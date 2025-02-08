import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout/AuthLayout';
import Button from '../../../../shared/ui/Button/Button';
import Input from '../../../../shared/ui/Input/Input';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            setIsLoading(false);
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
                email,
                password
            });
            alert('Registration successful! Please check your email to verify your account.');
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout title="Create Account">
            <form onSubmit={handleSubmit}>
                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.formGroup}>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        label="Confirm Password"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating Account...' : 'Register'}
                </Button>

                <div className={styles.links}>
                    <Link to="/login">Already have an account? Sign In</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default RegisterForm;