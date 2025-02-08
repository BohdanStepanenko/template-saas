import styles from './AuthLayout.module.css';

const AuthLayout = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </form>
        </div>
    );
};

export default AuthLayout;