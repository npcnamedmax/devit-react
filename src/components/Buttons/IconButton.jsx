import { twMerge } from 'tailwind-merge';

export default function IconButton({
    onClick = () => {}, //returns a function
    Icon = null, //icon passed as component
    buttonClass = '',
    iconClass = '',
    iconProps = {},
    isActive = true,
    children,
    ...others
}) {
    return (
        <button
            onClick={isActive ? onClick : undefined}
            className={twMerge(
                'flex h-full w-full flex-row !rounded-none !bg-transparent !p-2 text-black focus:!outline-none',
                buttonClass,
            )}
            {...others}
        >
            {Icon && <Icon className={twMerge('', iconClass)} {...iconProps} />}

            {children}
        </button>
    );
}
