import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Coffee Shops Tia Rosa</h1>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cardapio">Cardápio</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}