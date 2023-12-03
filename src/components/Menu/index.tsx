import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <img src="" alt="logo" />
      <ul>
        <li>
          <NavLink to="/">RELATÓRIOS</NavLink>
        </li>
        <li>
          <NavLink to="/">CLIENTES</NavLink>
        </li>
        <li>
          <NavLink to="/">SERVIÇOS</NavLink>
        </li>
        <li>
          <NavLink to="/">PRODUTOS</NavLink>
        </li>
      </ul>
    </nav>
  );
}
