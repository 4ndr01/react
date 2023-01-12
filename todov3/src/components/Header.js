import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link className="nav-item" to='/'>Home</Link>
      <Link className="nav-item" to='/about'>About</Link>
    </nav>
  )
}
