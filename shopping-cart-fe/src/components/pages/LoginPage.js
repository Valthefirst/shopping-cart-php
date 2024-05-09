import { useState } from "react";
import Login from "../SignIn";
import SignUp from "../SignUp";

export default function LoginPage() {

    const [showRegister, setShowRegister] = useState(false);

    const toggleForm = () => {
        setShowRegister((prevShowRegister) => !prevShowRegister);
    };

    return (
        <div >
            {showRegister ? <SignUp /> : <Login />}
            <p className="small fw-bold mt-2 pt-1 mb-2 text-center mb-3">
                {showRegister ? (
                    <span>Already have an account? </span>
                ) : (
                    <span>Don't have an account? </span>
                )}
                <a href="#" className="link-danger" onClick={toggleForm}>
                    {showRegister ? "Sign In" : "Sign Up"}
                </a>
            </p>
        </div>
    )
}