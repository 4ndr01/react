import { useContext } from 'react';
import './App.css';
import { TodosProvider } from './context/todosContext';
import { AppContext } from './context/appContext';

// components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
import Header from './components/Header';

export default function App() {
  const appContext = useContext(AppContext);

  return (
    <TodosProvider>
      <section className="wrapper">
        <Header />
        <InputTodo />
        <ListTodos />
        <button onClick={() => {
          appContext.setUser({
            ...appContext.user,
            loggedIn: false
          }
        )}}>Déconnexion</button>
      </section>
    </TodosProvider>
  );
}
