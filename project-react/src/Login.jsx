


import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {


  return (
    <>
      
      <div className="login">

        <h2>Faça o seu login</h2>

        <div className="linha"></div>

        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" />

        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />

        <button>ENTRAR</button>

      <Link to="/cadastro">
        <button className='botão-login-avançar'>Avançar</button>
      </Link>

      </div>
      
      
    </>
  )
}


