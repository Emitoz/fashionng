import { Button } from "../../components/button";
import { FormInput } from "../../components/formInput";

import logo from '../../assets/img/Logo.svg';
import bgImage from '../../assets/img/auth-bg.jpg';
import { Link } from "react-router-dom";
import { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useEffect } from "react";

export const Login = () => {

    useEffect(() => {
        document.title = "Sign in | Fashionng";
        return () => {};
    }, []);

    const [user, setUser] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        try {
            await signInWithEmailAndPassword(auth, email, password);

            setUser({ email: '', password: '' });
        } catch (error) {
            console.log('Error signing in:', error);
        }

    }

    const handleChange = e => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
        // window.location = '/';
    }

    return (
        <div className="auth-grid">
            <div className="auth-content">
                <div className="brand">
                    <Link to="/"><img className="logo" alt="logo" src={logo}/></Link>
                </div>
                <h1 className="auth-heading">Login to your account</h1>
                <p className="auth-subheading">We’re glad to have you back, login to continue shopping.</p>
                <form className="" onSubmit={handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        placeholder="Your email address"
                        value={user.email}
                        onChange={handleChange}
                        required={true}
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        placeholder="Your password"
                        value={user.password}
                        onChange={handleChange}
                        required={true}
                    />
                    <Button type="submit" theme="gold" text="Login to your account"/>
                    <Button type="button" theme="ghost" text="Login with Google" clickHandler={handleGoogleSignIn}/>
                    <p>Not on fashionng? <Link to="/register" className="text-link">Register now</Link></p>
                </form>
            </div>
            <div className="auth-bg-image bg-image" style={{ background: `url(${bgImage})` }}></div>
        </div>
    )
}