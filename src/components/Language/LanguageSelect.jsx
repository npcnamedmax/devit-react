import { languages } from '../../data/languages';

const LanguageSelect = ({ className, onClick }) => {
    return (
        <header className={className}>
            <select
                onClick={{
                    onClick,
                }}
            >
                {languages.map((language) => (
                    <option key={language.key} value={language.value}>
                        {language.value}
                    </option>
                ))}
            </select>
        </header>
    );
};

export { LanguageSelect };
