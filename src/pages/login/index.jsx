
import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="Background">
      <div className="Consangue">
        <div className="Logo">
          <img src="/assets/images/Logo.png" alt="Logo" />
        </div>

        <div className="Marca">
          <h2>ConSangue</h2>
          <p>Mobilização Coletiva para<br />Doação de Sangue</p>
        </div>
      </div>

      <main className="Login">
        <h1>Fazer Login na sua Conta</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Digite seu CPF ou telefone"
            required
          />

          <input
            type="password"
            placeholder="Digite sua Senha"
            required
          />

          <button type="submit" className="Entrar">
            Entrar
          </button>
        </form>

        <div className="Cadastro">
          <p>
            É a sua primeira vez por aqui? Faça o seu Cadastro!
          </p>

          <Link to="/cadastro" className="BotaoCadastro">
            Cadastrar-se
          </Link>
        </div>
      </main>

    </div>
  );
}
