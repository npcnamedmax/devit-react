import MainLayout from '../layouts/MainLayout';
import { AuthContext } from 'providers/AuthProvider';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
const ProfilePage = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/auth/login');
        }
    }, []);
    useEffect(() => {
        console.log('user', user);
    }, [user]);
    return (
        <MainLayout>
            {user && (
                <div>
                    <h1>Profile Page</h1>
                    <p>This is the profile page.</p>
                    <p>{user.username}</p>
                    <p>{user.profileUrl}</p>
                    <p>{user.email}</p>
                    <p>{user.bio}</p>
                    <p>{user.joinedCommunities}</p>
                </div>
            )}
        </MainLayout>
    );
};
export default ProfilePage;
