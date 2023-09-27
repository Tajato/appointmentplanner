import {NavLink, Outlet} from "react-router-dom";
import styles from './Header.module.css';
export function Header() {
    return (
        <>
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li className={styles.navitem}>
                 <NavLink className={styles.navlink} to="/dashboard">  Home</NavLink>
                </li>
                <li className={styles.navitem}>
                    <NavLink className={styles.navlink} to="/appointments">Appointments</NavLink>
                </li>
            </ul>
        
        </nav>
        
        <main>
            <Outlet />
        </main>
     </>
    )
}