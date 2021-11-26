import "./style.css";
import { NavLink, useLocation } from "react-router-dom";

const MainNav = () => {
  const { pathname } = useLocation();

  const links = [
    {
      label: "Add restraunt",
      path: "/partner_with_us",
      visible: pathname === "/",
    },
    {
      label: "Log in",
      path: "/login",
      visible: true,
    },
    {
      label: "Sign up",
      path: "/signup",
      visible: true,
    },
  ];

  return (
    <nav>
      <ul className="nav-list">
        {links.map(
          (link) =>
            link.visible && (
              <li key={link.label}>
                <NavLink className="link" to={link.path}>
                  {link.label}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};

export default MainNav;
