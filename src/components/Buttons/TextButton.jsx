import { twMerge } from 'tailwind-merge';

export default function TextButton({
    onClick = () => {}, //returns a function
    buttonClass = '',
    textClass = '',
    text = '',
    children,
}) {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                'flex items-center justify-center !rounded-full !bg-gray-500 focus:!outline-none',
                buttonClass,
            )}
        >
            <span className={twMerge('text-base', textClass)}>{text}</span>
            {children}
        </button>
    );
}
