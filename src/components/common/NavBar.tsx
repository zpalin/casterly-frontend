import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const styles = {
    container: 'bg-white w-100 shadow-3 flex items-center fixed',
    logo: 'blue pv2 ph4 f2 link hover-gray no-outline',
    buttonContainer: '',
    navLink: 'pv3 ph4 dark-gray link hover-blue nav-link no-outline'
}

const NavBar = () => (
    <div className={styles.container}>
        <Link className={styles.logo} to="/">Casterly</Link>
        <div className={styles.buttonContainer}>
            <NavLink to="/" exact={true} className={styles.navLink}>Home</NavLink>
            <NavLink to="/other" className={styles.navLink}>Other</NavLink>
        </div>
    </div>
)

export default NavBar
