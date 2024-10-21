import React from 'react'
import { useState } from 'react'
import { supabase } from '../supabase/client';


function Login() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await supabase.auth.signInWithOtp({
                email,
                options: {
                  emailRedirectTo: '/home'
                }
              })
            
        } catch (error) {
            console.error(error)
        }
          
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Correo electrónico'
            onChange={(e) => setEmail(e.target.value)}/>
            <button>Iniciar Sesión</button>
        </form>
    </div>
  )
}

export default Login