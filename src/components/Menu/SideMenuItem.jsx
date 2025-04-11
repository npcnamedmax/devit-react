import { twMerge } from 'tailwind-merge';

const SideMenuItem = ({ onClick = () => {}, className = '', children }) => {
    return (
        <div
            className={twMerge(
                'flex h-fit w-full cursor-pointer flex-col items-stretch rounded-lg px-10 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800',
                className,
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default SideMenuItem;
