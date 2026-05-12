


import './Listagem.css'
import { Link } from 'react-router-dom'

export default function Listagem(){

  return (
    <>
      <table>
            <tr>
                <td>Nome</td>
                <td>Idade</td>
                <td>CPF</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>

            <tr>
                <td>Elika Lopes</td>
                <td>42</td>
                <td>20000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Gustavoweb</td>
                <td>35</td>
                <td>10000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Barozzi</td>
                <td>60</td>
                <td>30000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Rian</td>
                <td>16</td>
                <td>40000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Gabriel Lopes</td>
                <td>16</td>
                <td>50000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Rafael Vlademir</td>
                <td>16</td>
                <td>60000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Gustavo Chiavegatto</td>
                <td>30</td>
                <td>70000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Lucas Cisterna</td>
                <td>16</td>
                <td>80000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Cristiano Ronaldo</td>
                <td>41</td>
                <td>90000000000</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>

            <tr>
                <td>Jannik Sinner</td>
                <td>24</td>
                <td>90000000001</td>
                <td>✏️</td>
                <td>🚮</td>
            </tr>


        </table>


        <Link to="/cadastro" className='botão-voltar'>
        Voltar
      </Link>
    </>
  )
}

