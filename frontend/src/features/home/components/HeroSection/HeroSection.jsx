import { Link } from 'react-router-dom';
import { FiUsers, FiGlobe, FiZap } from 'react-icons/fi';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Take Control of Your Subscriptions</h1>
                <p className={styles.subtitle}>
                    Track, analyze, and optimize all your recurring payments in one powerful dashboard
                </p>

                <div className={styles.ctaContainer}>
                    <Link to="/register" className={styles.primaryCta}>
                        Get Started Free
                    </Link>
                    <Link to="/login" className={styles.secondaryCta}>
                        Sign In
                    </Link>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <FiUsers className={styles.statIcon} />
                        <span>50,000+ Active Users</span>
                    </div>
                    <div className={styles.statItem}>
                        <FiGlobe className={styles.statIcon} />
                        <span>150+ Services Tracked</span>
                    </div>
                    <div className={styles.statItem}>
                        <FiZap className={styles.statIcon} />
                        <span>$10M+ Saved Annually</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;