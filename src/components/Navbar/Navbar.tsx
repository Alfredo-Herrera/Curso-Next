import styles from "./Navbar.module.css";
import ActiveLink from '../ActiveLink';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const Navbar = () => {
    return (
        <nav className={styles["menu-container"]}>
            {menuItems.map((item) => {
                const key = `${item.text}-menu`
                return (<ActiveLink text={item.text} href={item.href} key={key} />)
            })}
        </nav>
    )
}


export default Navbar