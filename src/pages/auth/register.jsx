import { Button } from "../../components/button";
import { FormInput } from "../../components/formInput";

import logo from '../../assets/img/Logo.svg';
import bgImage from '../../assets/img/auth-bg.jpg';
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="auth-grid">
            <div className="auth-content">
                <div className="brand">
                    <Link to="/"><img className="logo" alt="logo" src={logo}/></Link>
                </div>
                <h1 className="auth-heading">Create your account</h1>
                <p className="auth-subheading">Get started on fashionng and enjoy your shopping.</p>
                <form className="">
                    <FormInput type="text" name="name" placeholder="Your name"/>
                    <FormInput type="email" name="email" placeholder="Your email address"/>
                    <FormInput type="password" name="password" placeholder="Your password"/>
                    <Button theme="gold" text="Create your account" icon=""/>
                    <Button type="button" theme="ghost" text="Register with Google"/>
                    <p>Already on fashionng? <Link to="/login" className="text-link">Login</Link></p>
                </form>
            </div>
            <div className="auth-bg-image bg-image" style={{ background: `url(${bgImage})` }}></div>
        </div>
    )
}