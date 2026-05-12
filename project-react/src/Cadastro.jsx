

import './Cadastro.css'
import { Link } from 'react-router-dom'

export default function Cadastro(){

  return (
    <>
      <div className="cadastro">

        <h2>Cadastro de Usuário</h2>

        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" />

        <label>Idade</label>
        <input type="number" placeholder="Digite sua idade" />

        <label>CPF</label>
        <input type="text" placeholder="Digite seu CPF" />

        <button>CADASTRAR</button>

        <Link to="/"className='botão-voltar'>
            Voltar
        </Link>


        <Link to="/listagem">
            <button>Avançar</button>
        </Link>

      </div>
    </>
  )
}

