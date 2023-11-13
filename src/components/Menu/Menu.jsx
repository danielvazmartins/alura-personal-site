import { NavLink } from "react-router-dom";

import styles from "./Menu.module.css";

export default function Menu() {
    const getClassName = ({ isActive }) => isActive ? styles.active : ""

    return (
        <div className={styles.menuBar}>
            <NavLink className={getClassName} to="/">Home</NavLink>
            <NavLink className={getClassName} to="/about">Sobre mim</NavLink>
        </div>
    )
}