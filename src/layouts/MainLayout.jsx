import Scaffolding from 'skeleton/Scaffolding';

import { useContext, useState } from 'react';
import { LayoutContext } from 'providers/LayoutProvider';
import SideMenu from 'components/Menu/SideMenu';
import SideMenuItem from 'components/Menu/SideMenuItem';
import MainHeader from 'components/Headers/MainHeader';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const handleClick = (name) => {
    switch (name) {
        case 'menu':
            return () => {
                console.log(name);
            };
        case 'logo':
            return () => {
                console.log(name);
            };
        default:
            return () => {
                console.log(name);
            };
    }
};

const SideMenuLink = ({ to, className, children, onClick }) => {
    //event bubbling
    return (
        <div onClick={onClick}>
            <NavLink
                to={to}
                className={({ isActive }) => {
                    return twMerge(
                        'flex h-fit w-full cursor-pointer flex-col items-stretch rounded-lg px-10 py-3 text-center text-gray-700 transition-all duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800',
                        className,
                        isActive ? '!text-blue-500' : '!text-black',
                    );
                }}
            >
                {children}
            </NavLink>
        </div>
    );
};

const MainLayout = ({ children }) => {
    const { headerState, setHeaderState } = useContext(LayoutContext);

    return (
        <Scaffolding Header={MainHeader} Content={() => <>{children}</>}>
            <SideMenu
                className={`top-[8dvh] z-2 h-[92dvh] ${headerState.menu ? 'max-w-64' : 'max-w-0'} transition-all duration-300 ease-in-out`}
            >
                <SideMenuLink
                    to='/'
                    className='h-auto w-full'
                    onClick={() =>
                        setHeaderState({
                            ...headerState,
                            menu: !headerState.menu,
                        })
                    }
                >
                    Home
                </SideMenuLink>
                <SideMenuLink
                    to='/discovery'
                    className='w-full'
                    onClick={() =>
                        setHeaderState({
                            ...headerState,
                            menu: !headerState.menu,
                        })
                    }
                >
                    Discover
                </SideMenuLink>
            </SideMenu>
            <div
                className={`fade fixed top-[8dvh] z-1 h-[92dvh] w-full bg-black ${headerState.menu ? 'opacity-30' : 'hidden opacity-[0]'}`}
                onClick={() =>
                    setHeaderState({ ...headerState, menu: !headerState.menu })
                }
            ></div>
        </Scaffolding>
    );
};

export default MainLayout;
