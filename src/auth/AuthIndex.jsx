import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Outlet, useNavigate } from 'react-router';

const AuthIndex = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);
    return <Outlet />;
};

export default AuthIndex;
