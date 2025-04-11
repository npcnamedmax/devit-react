import { twMerge } from 'tailwind-merge';

const SideMenu = ({ className = '', children }) => {
    return (
        <div
            className={twMerge(
                'fixed top-0 left-0 h-full overflow-x-hidden shadow-xl dark:shadow-neutral-900/50',
                className,
            )}
        >
            <div className='flex h-full flex-col items-center justify-start gap-4 overflow-x-hidden overflow-y-auto bg-white px-2 py-2 dark:bg-[#1E1E1E]'>
                {children}
            </div>
        </div>
    );
};

export default SideMenu;
