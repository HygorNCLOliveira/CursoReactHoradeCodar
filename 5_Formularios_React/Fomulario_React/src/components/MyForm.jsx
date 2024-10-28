import React from 'react'
import './MyForm.css'

import { useState } from 'react'

const MyForm = ({userName, userEmail}) => {

    // 3- Gerenciamento de dados
    const [name, setName] = useState(userName);

    // 4- Manupulação simplificada
    const [email, setEmail] = useState(userEmail);

    // 8- Textarea
    const [bio, setBio] = useState("");

    // 9 - Select
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role)

        // Validacao
        // Envio

        // 7- Limpar o form
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

  return (
    <div>
        {/*5- Envio de formulários*/}
        <form onSubmit={handleSubmit}>
            <div>
                {/*1- Criando um form*/}
                <label htmlFor="nome">Nome:</label>
                <input type="text" name='nome' placeholder='Digite o seu nome' onChange={handleName}
                // 6- Controlled input
                value={name || ""}
                />
            </div>

            <div>
                {/* 2 - Label envolvendo input*/}
                <label>
                    <span>Email:</span>
                    <input type="email" name='email' placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)}
                    // 6- Controlled input
                    value={email || ""}/>
                </label>
            </div>

            <div>
                {/*8- Textarea */}
                <label>
                    <span>Biografia</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
            </div>

            <div>
                {/*9 - Select*/}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </div>
            
            <input type="submit" value={"enviar"}/>
        </form>
    </div>
  )
}

export default MyForm