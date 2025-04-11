import { Link } from 'react-router';
import { AuthScaffolding } from './AuthScaffolding';
import InputField from 'components/Inputs/InputField';

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi');
};

const Signup = () => {
    //const [language, setLanguage] = useState('en'); //move to provider

    return (
        <AuthScaffolding>
            <div>
                <h2 className='text-center text-2xl font-semibold'>Signup</h2>
                <p className='text-center text-sm text-gray-600'>
                    Something about agreeing to data collection
                </p>
            </div>
            <form className='mt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
                <InputField name='username' placeholder='Enter your username' />
                <InputField name='password' placeholder='Enter your password' />
                <button className='mt-3 !bg-red-900 text-white' type='submit'>
                    Signup
                </button>
            </form>
            <div className='mt-2 self-start'>
                Have an account?{' '}
                <Link
                    className='cursor-pointer hover:!underline'
                    to='/auth/login'
                >
                    Log in now
                </Link>
            </div>
        </AuthScaffolding>
    );
};

export { Signup };
