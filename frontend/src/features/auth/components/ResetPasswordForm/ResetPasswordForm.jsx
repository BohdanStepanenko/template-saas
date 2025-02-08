import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthLayout from '../AuthLayout/AuthLayout';
import Button from '../../../../shared/ui/Button/Button';
import Input from '../../../../shared/ui/Input/Input';
import styles from './ResetPasswordForm.module.css';

const ResetPasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const token = searchParams.get('token');
    const email = searchParams.get('email');

    useEffect(() => {
        if (!token || !email) {
            navigate('/login');
        }
    }, [token, email, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            setIsLoading(false);
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/password/reset`, {
                token,
                email,
                password,
                password_confirmation: confirmPassword
            });
            setSuccess('Password has been reset successfully! Redirecting to login...');
            setTimeout(() => navigate('/login'), 3000);
        } catch (error) {
            setError(error.response?.data?.message || 'Password reset failed!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout title="Set New Password">
            <form onSubmit={handleSubmit}>
                {error && <div className={styles.error}>{error}</div>}
                {success && <div className={styles.success}>{success}</div>}

                <div className={styles.formGroup}>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="New Password"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        label="Confirm New Password"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isLoading}
                >
                    {isLoading ? 'Resetting...' : 'Reset Password'}
                </Button>
            </form>
        </AuthLayout>
    );
};

export default ResetPasswordForm;