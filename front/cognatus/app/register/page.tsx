"use client";

import axios from "axios";
import { useState } from "react";
import "./style.css";

function Register(){ 
    const [nome, setNome]=useState(""); 
    const [email, setEmail]=useState("");
    const [senha, setSenha]=useState("");
    const [confirSenha, setConfirSenha]=useState("");

    const fzRegistro = (e:any)=>{
        e.preventDefault();
        axios
        .post("http://localhost:8005/back/auth/register", {nome, email, senha, confirSenha})
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
                <label htmlFor="nome">Nome:</label>
                <input 
                type="text" 
                id="nome"
                onChange={(e)=>setNome(e.currentTarget.value)}
                />

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
                
                <label htmlFor="confirmSenha">Confirme a Senha:</label>
                <input 
                type="password" 
                id="confirmSenha" 
                onChange={(e)=>setConfirSenha(e.currentTarget.value)}
                />

                <button onClick={(e)=>fzRegistro(e)}>Logar</button>
            </form>
        </main>
    );
}

export default Register;