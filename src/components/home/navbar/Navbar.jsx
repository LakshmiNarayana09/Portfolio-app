import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <>
      
      <div className={styles.navbar}>
        <NavLink to="/" className={getLinkClass} end>
          Home
        </NavLink>

        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>

        <NavLink to="/project" className={getLinkClass}>
          Project
        </NavLink>

        <NavLink to="/gallery" className={getLinkClass}>
          Gallery
        </NavLink>

        <NavLink to="/contactus" className={getLinkClass}>
          Contact us
        </NavLink>

        
        <i
          className={`bi bi-list ${styles.menuIcon}`}
          onClick={() => setOpen(true)}
        ></i>
      </div>

      
      <div
        className={`${styles.sidebar} ${open ? styles.showSidebar : ""}`}
      >
        
        <i
          className={`bi bi-x-lg ${styles.closeIcon}`}
          onClick={() => setOpen(false)}
        ></i>

        <NavLink to="/" className={getLinkClass} end onClick={() => setOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/about" className={getLinkClass} onClick={() => setOpen(false)}>
          About
        </NavLink>

        <NavLink to="/project" className={getLinkClass} onClick={() => setOpen(false)}>
          Project
        </NavLink>

        <NavLink to="/gallery" className={getLinkClass} onClick={() => setOpen(false)}>
          Gallery
        </NavLink>

        <NavLink to="/contactus" className={getLinkClass} onClick={() => setOpen(false)}>
          Contact us
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;