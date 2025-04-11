import { LanguageSelect } from 'components/Language/LanguageSelect';

const handleLanguageChange = (language) => {
    //show language options
    console.log(language);
};

const AuthScaffolding = ({ children }) => {
    //const [language, setLanguage] = useState('en'); move to provider

    return (
        <div className='grid min-h-[100dvh] w-[100dvw] max-w-xl grid-rows-[min-content_1fr_min-content] py-4'>
            <LanguageSelect
                className='grid-start-1'
                onClick={handleLanguageChange}
            />
            <div className='grid-start-2 light:shadow-gray-300 flex w-96 flex-col gap-2 place-self-center rounded-lg border-2 border-gray-400 p-6 shadow-lg dark:border-black dark:shadow-gray-900'>
                {children}
            </div>
        </div>
    );
};

export { AuthScaffolding };
