import React,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
     
    const handleRegister = async(e)=> {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password); 
            alert("User registered successfully");
        }catch (error) {
            setError(error.message);
        }
    };

    return(
        <div>
            <h2>Register</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleRegister}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;