import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function About() {
  return (
    <section className="wrapper">
      <Header />
      <h1>Todo List</h1>
      <p>Todo List est une application développée avec React qui permet de créer et gérer une liste de tâches à effectuer.</p>
      <Link to='/'>Retour</Link>
    </section>
  )
}