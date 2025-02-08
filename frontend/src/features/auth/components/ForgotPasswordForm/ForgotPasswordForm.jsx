import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout/AuthLayout';
import Button from '../../../../shared/ui/Button/Button';
import Input from '../../../../shared/ui/Input/Input';
import styles from './ForgotPasswordForm.module.css';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setMessage('');

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/password/forgot`, { email });
            setMessage('Password reset link has been sent to your email!');
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to send reset link!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout title="Reset Password">
            <form onSubmit={handleSubmit}>
                {error && <div className={styles.error}>{error}</div>}
                {message && <div className={styles.success}>{message}</div>}

                <div className={styles.formGroup}>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                </Button>

                <div className={styles.links}>
                    <Link to="/login">Remember your password? Sign In</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ForgotPasswordForm;