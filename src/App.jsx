import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { AuthContext } from 'providers/AuthProvider';
//do routing here based on login state

function App() {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn()) {
        return <Navigate to='/auth/login' replace={true} />;
    }

    return <Outlet />;
}

export default App;
