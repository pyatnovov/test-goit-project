import { NavLink } from "react-router-dom";
import { List } from "./Navigation.styled";
const Navigation = () => {
  return (
    <List>
      <li>
        <NavLink
          to="/"
          style={{
            margin: 8,
            padding: "12px 16px",
            borderRadius: 4,
            backgroundColor: "gray",
            color: "white",
            textDecoration: "none",
          }}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tweets"
          style={{
            margin: 8,
            padding: "12px 16px",
            borderRadius: 4,
            backgroundColor: "gray",
            color: "white",
            textDecoration: "none",
          }}
        >
          TWEETS
        </NavLink>
      </li>
    </List>
  );
};

export default Navigation;
