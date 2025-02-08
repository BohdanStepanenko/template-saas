import { FiActivity, FiBell, FiLock, FiDollarSign } from 'react-icons/fi';
import styles from './FeaturesGrid.module.css';

const FeaturesGrid = () => {
    return (
        <section className={styles.features}>
            <h2 className={styles.title}>Why Choose Us?</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <FiDollarSign className={styles.icon} />
                    <h3>Payment Tracking</h3>
                    <ul className={styles.list}>
                        <li>Real-time transaction updates</li>
                        <li>Multi-currency support</li>
                        <li>Payment method analysis</li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <FiActivity className={styles.icon} />
                    <h3>Smart Analytics</h3>
                    <ul className={styles.list}>
                        <li>Spending trends visualization</li>
                        <li>Budget prediction models</li>
                        <li>Exportable financial reports</li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <FiBell className={styles.icon} />
                    <h3>Smart Alerts</h3>
                    <ul className={styles.list}>
                        <li>Renewal reminders</li>
                        <li>Price change alerts</li>
                        <li>Suspicious activity detection</li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <FiLock className={styles.icon} />
                    <h3>Bank-Grade Security</h3>
                    <ul className={styles.list}>
                        <li>256-bit encryption</li>
                        <li>Two-factor authentication</li>
                        <li>Regular security audits</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;