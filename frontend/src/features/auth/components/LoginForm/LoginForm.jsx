import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthLayout from '../AuthLayout/AuthLayout';
import Button from '../../../../shared/ui/Button/Button';
import Input from '../../../../shared/ui/Input/Input';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
            alert('Login successful!');
        } catch (error) {
            alert('Login failed!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout title="Welcome Back">
            <form onSubmit={handleSubmit}>
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

                <Button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : 'Sign In'}
                </Button>

                <div className={styles.links}>
                    <Link to="/register">Create Account</Link>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default LoginForm;