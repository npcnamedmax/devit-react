import { useNavigate } from 'react-router';
import { AuthScaffolding } from './AuthScaffolding';
import InputField from 'components/Inputs/InputField';
import { AuthContext } from 'providers/AuthProvider';
import { useContext, useEffect } from 'react';
const handleSubmit = (e) => {
    e.preventDefault();
};

const Login = () => {
    //const [language, setLanguage] = useState('en'); //move to provider
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); //useAuth is a custom hook that returns the auth context

    const handleOnSignup = () => {
        navigate('/auth/signup');
    };
    const handleOnLogin = () => {
        login({
            username: 'testuser',
            profileUrl: 'https://example.com/profile.jpg',
            email: 'test@example.com',
            bio: 'This is a test user',
            joinedCommunities: ['1', '2'],
        });
        navigate('/'); //redirect to homepage
    };
    return (
        <AuthScaffolding>
            <div>
                <h2 className='text-center text-2xl font-semibold'>Login</h2>
                <p className='text-center text-sm text-gray-600'>
                    Something about agreeing to data collection
                </p>
            </div>
            <form className='mt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
                <InputField name='username' placeholder='Enter your username' />
                <InputField name='password' placeholder='Enter your password' />
                <button
                    className='mt-3 !bg-red-900 text-white'
                    type='submit'
                    onClick={handleOnLogin}
                >
                    Login
                </button>
            </form>
            <div className='mt-2 self-start'>
                Don't have an account?{' '}
                <a
                    className='cursor-pointer hover:!underline'
                    onClick={handleOnSignup}
                >
                    Sign up now
                </a>
            </div>
        </AuthScaffolding>
    );
};

export { Login };
