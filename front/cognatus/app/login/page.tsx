"use client";

import axios from "axios";
import { useState } from "react";
import "./style.css";

function Login(){  
    const [email, setEmail]=useState("");
    const [senha, setSenha]=useState("");

    const fzLogin = (e:any)=>{
        e.preventDefault();
        axios
        .post("http://localhost:8005/back/auth/login", {email, senha})
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    
    return (
        <main>
            <form>
                <label htmlFor="email">Email:</label>
                <input 
                type="text" 
                id="email"
                onChange={(e)=>setEmail(e.currentTarget.value)}
                />
                
                <label htmlFor="senha">Senha:</label>
                <input 
                type="password" 
                id="senha" 
                onChange={(e)=>setSenha(e.currentTarget.value)}
                />

                <button onClick={(e)=>fzLogin(e)}>Logar</button>
            </form>
        </main>
    );
}

export default Login;