import styles from './Header.module.css'
import { Menu } from 'lucide-react';
import { useAuth } from "../../hooks/authContext.tsx";

export default function Header() {
    const { user } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>D</div>
                    <span className={styles.logoText}>Daraja Devs</span>
                </div>

                <nav className={styles.nav}>
                    <a href="#" className={styles.navLink}>Products</a>
                    <a href="#" className={styles.navLink}>Developers</a>
                    <a href="#" className={styles.navLink}>Company</a>
                    <a href="#" className={styles.navLink}>Pricing</a>
                </nav>

                <div className={styles.user}>
                    {user?.name && (
                        <>
                            <div className={styles.userAvatar}>
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <p className={styles.userName}>{user.name}</p>
                        </>
                    )}
                    <button className={styles.menuButton}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    )
}