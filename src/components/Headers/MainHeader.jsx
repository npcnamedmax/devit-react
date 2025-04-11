import { useContext } from 'react';
import { LayoutContext } from 'providers/LayoutProvider';
import IconButton from 'components/Buttons/IconButton';
import {
    MenuIcon,
    ReactLogo,
    SearchIcon,
    BellIcon,
    ProfileIcon,
} from 'icons/index';
import { useNavigate } from 'react-router';

const MainHeader = () => {
    const { headerState, setHeaderState } = useContext(LayoutContext);
    const navigate = useNavigate();
    return (
        <div className='flex w-full flex-row justify-between'>
            <div className='flex h-full w-auto items-center justify-start gap-4'>
                <IconButton
                    Icon={MenuIcon}
                    onClick={() =>
                        setHeaderState({
                            ...headerState,
                            menu: !headerState.menu,
                        })
                    }
                    buttonClass='h-full aspect-square hover:!border-0'
                />
                <IconButton
                    Icon={ReactLogo}
                    onClick={() => navigate('/')}
                    buttonClass='h-full aspect-square hover:!border-0'
                />
            </div>
            <div className='flex h-full w-auto items-center justify-end gap-4'>
                <IconButton
                    Icon={SearchIcon}
                    onClick={() => navigate('/search')}
                    buttonClass='h-full aspect-square hover:!border-0'
                />
                <IconButton
                    Icon={BellIcon}
                    onClick={() =>
                        setHeaderState(
                            ...headerState,
                            !headerState.notification,
                        )
                    }
                    buttonClass='h-full aspect-square hover:!border-0'
                />
                <IconButton
                    Icon={ProfileIcon}
                    onClick={() => {
                        console.log('Profile');
                        navigate('/profile');
                    }}
                    buttonClass='h-full aspect-square hover:!border-0'
                />
            </div>
        </div>
    );
};

export default MainHeader;
