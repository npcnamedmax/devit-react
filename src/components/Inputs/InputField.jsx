import { useId } from 'react';
import { twMerge } from 'tailwind-merge';

export default function InputField({
    placeholder = 'Enter text',
    type = 'text',
    onClick = () => {},
    className = '',
    Icon = null, //icon passed as component
    id,
    ...others
}) {
    const genId = useId();
    const inputId = id || genId;

    return (
        <div
            className={twMerge('flex h-38 gap-2 rounded-4xl p-0', className)}
            htmlFor={inputId}
        >
            {Icon && (
                <label
                    className='flex aspect-square h-full items-center p-2'
                    htmlFor={inputId}
                >
                    <Icon />
                </label>
            )}
            <div className='relative box-content h-full w-full rounded-4xl bg-[#f0f0f0] px-4 dark:bg-[#1E1E1E]'>
                <input
                    className='peer text-bottom bottom-0 left-0 h-full w-full grow origin-bottom-left leading-[12rem] text-black placeholder-transparent focus:scale-50 focus:outline-none dark:text-white'
                    type={type}
                    onClick={onClick}
                    id={inputId}
                    {...others}
                />
                <label
                    className='absolute top-0 left-0 mx-4 flex h-full w-min origin-top-left cursor-text items-center text-sm text-nowrap text-gray-500 transition-all duration-200 peer-focus:scale-75'
                    htmlFor={inputId}
                >
                    {placeholder}
                </label>
            </div>
        </div>
    );
}
