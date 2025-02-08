import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './features/auth/components/LoginForm/LoginForm';
import RegisterForm from './features/auth/components/RegisterForm/RegisterForm';
import ForgotPasswordForm from './features/auth/components/ForgotPasswordForm/ForgotPasswordForm';
import ResetPasswordForm from './features/auth/components/ResetPasswordForm/ResetPasswordForm';
import Home from './features/home/HomePage/HomePage';
import './shared/styles/global.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                <Route path="/reset-password" element={<ResetPasswordForm />} />
            </Routes>
        </Router>
    );
}

export default App;