import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, createUserProfile, signInWithGoogle } from "../../firebase/firebase.utils";

import { Button } from "../../components/button";
import { FormInput } from "../../components/formInput";

import logo from '../../assets/img/Logo.svg';
import bgImage from '../../assets/img/auth-bg.jpg';
import { useEffect } from "react";

export const Register = () => {

    
    useEffect(() => {
        document.title = "Create account | Fashionng";
        return () => {};
    }, []);

    const [user, setUser] = useState({
        displayName: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password } = user;

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            createUserProfile(user, { displayName });

            setUser({
                displayName: "",
                email: "",
                password: ""
            });
        } catch (error) {
            console.log('Error creating profile', error);
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className="auth-grid">
            <div className="auth-content">
                <div className="brand">
                    <Link to="/"><img className="logo" alt="logo" src={logo}/></Link>
                </div>
                <h1 className="auth-heading">Create your account</h1>
                <p className="auth-subheading">Get started on fashionng and enjoy your shopping.</p>
                <form className="" onSubmit={handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        value={user.displayName} 
                        onChange={handleChange}
                        placeholder="Your name"
                        required={true}
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange}
                        placeholder="Your email address"
                        required={true}
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange}
                        placeholder="Your password"
                        required={true}
                    />
                    <Button theme="gold" text="Create your account" icon=""/>
                    <Button type="button" theme="ghost" text="Register with Google" clickHandler={handleGoogleSignIn}/>
                    <p>Already on fashionng? <Link to="/login" className="text-link">Login</Link></p>
                </form>
            </div>
            <div className="auth-bg-image bg-image" style={{ background: `url(${bgImage})` }}></div>
        </div>
    )
}