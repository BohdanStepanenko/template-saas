import styles from './PricingSection.module.css';

const PricingSection = () => {
    return (
        <section className={styles.pricing}>
            <h2 className={styles.title}>Simple, Transparent Pricing</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3>Starter</h3>
                    <div className={styles.price}>$9<span>/month</span></div>
                    <ul className={styles.features}>
                        <li>Up to 10 subscriptions</li>
                        <li>Basic analytics</li>
                        <li>Email support</li>
                        <li>1 user account</li>
                        <li>7-day history</li>
                    </ul>
                    <button className={styles.button}>Start Free Trial</button>
                </div>

                <div className={`${styles.card} ${styles.recommended}`}>
                    <div className={styles.badge}>Most Popular</div>
                    <h3>Professional</h3>
                    <div className={styles.price}>$29<span>/month</span></div>
                    <ul className={styles.features}>
                        <li>Unlimited subscriptions</li>
                        <li>Advanced analytics</li>
                        <li>Priority support</li>
                        <li>5 user accounts</li>
                        <li>Custom reports</li>
                    </ul>
                    <button className={styles.button}>Get Started</button>
                </div>

                <div className={styles.card}>
                    <h3>Enterprise</h3>
                    <div className={styles.price}>$99<span>/month</span></div>
                    <ul className={styles.features}>
                        <li>Team management</li>
                        <li>Custom integrations</li>
                        <li>Dedicated support</li>
                        <li>Unlimited users</li>
                        <li>Full API access</li>
                    </ul>
                    <button className={styles.button}>Contact Sales</button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;