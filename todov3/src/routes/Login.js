import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';

export default function Login({router}) {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section className="wrapper">
      <h1>Login</h1>
      <form onSubmit={e => {
        e.preventDefault();
        appContext.setUser({
          ...appContext.user,
          loggedIn: true
        })
        navigate('/');
      }}>
        <ul>
          <li>
            <label>Identidiant&nbsp;</label>
            <input type="text"/>
          </li>
          <li>
            <label>Mot de passe&nbsp;</label>
            <input type="password"/>
          </li>
          <button type="submit">Connexion</button>
        </ul>
      </form>
    </section>
  )
}
