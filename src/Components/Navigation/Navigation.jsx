import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/tweets">TWEETS</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
