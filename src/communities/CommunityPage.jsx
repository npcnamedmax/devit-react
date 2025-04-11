import { useParams } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import { useEffect, useState } from 'react';

import { communities } from '../data/communities';
import IconButton from '../components/Buttons/IconButton';
import { AddIcon, BellIcon, HorizontalDotIcon } from '../assets/icons';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import PostContainer from 'components/Post/PostContainer';
import messages from '../data/messages';

const LinkButton = ({
    to = '/',
    className = '',
    activeClass = () => {},
    children,
    ...others
}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return twMerge(
                    'h-full !rounded-none !bg-transparent !p-2 text-black focus:!outline-none',
                    className,
                    isActive ? '!text-blue-500' : '!text-black',
                );
            }}
            {...others}
        >
            <button className='!text-inherit'>{children}</button>
        </NavLink>
    );
};

const CommunityPage = () => {
    const communityId = useParams().id;
    const [community, setCommunity] = useState(null);
    const [posts, setPosts] = useState([]);
    const [joinBtn, setJoinBtn] = useState({ text: 'Join', isActive: true });

    useEffect(() => {
        // fetch community data
        const communityTemp = communities.find(
            (community) => community.id === communityId,
        );
        setCommunity(communityTemp);
        // fetch posts data
        const postTmp = messages.filter(
            (message) => communityTemp.id === message.communityId,
        );
        setPosts(postTmp);
        setJoinBtn(
            communityTemp.joined
                ? { ...joinBtn, text: 'Joined' }
                : { ...joinBtn, text: 'Join' },
        );
    }, []);

    const handleJoinButtonClick = async () => {
        setJoinBtn({ ...joinBtn, isActive: false });
        (async () => {
            // Simulate an API call to join the community
            await new Promise((resolve) => setTimeout(resolve, 1000));
            //console.log('Join community API called');
            if (community.joined) {
                console.log('Unjoin community API called');
                setJoinBtn({ text: 'Join', isActive: true });
                community.joined = false;
            } else {
                console.log('Join community API called');
                setJoinBtn({ text: 'Joined', isActive: true });
                community.joined = true;
            }
        })();
    };

    return (
        <MainLayout>
            {community && (
                <div className='flex flex-col'>
                    <img
                        src={community?.banner_image_url}
                        className='h-30 w-full'
                    />
                    <div className='p-3'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row gap-5'>
                                <img
                                    src={community?.banner_image_url}
                                    className='h-15 w-15 rounded-full object-cover'
                                />
                                <div className='flex flex-col'>
                                    <h2 className='font-bold text-black'>
                                        {community.name}
                                    </h2>
                                    <span className='text-xs font-light'>
                                        {community.memberCount} members
                                    </span>
                                </div>
                            </div>
                            <div className='flex h-10 flex-row gap-3'>
                                <IconButton
                                    Icon={AddIcon}
                                    buttonClass='!bg-[#f9f9f9] min-w-auto max-w-30'
                                    iconClass='h-full aspect-square'
                                >
                                    <span className='flex h-full w-full items-baseline text-sm whitespace-nowrap'>
                                        Create Post
                                    </span>
                                </IconButton>
                                <IconButton
                                    Icon={BellIcon}
                                    buttonClass='!bg-[#f9f9f9] h-full w-auto'
                                    iconClass='aspect-square h-full'
                                />
                                <IconButton
                                    buttonClass={`!bg-[#f9f9f9] h-10 w-auto ${joinBtn.isActive ? 'opacity-100' : 'opacity-50'}`}
                                    iconClass='h-full aspect-square '
                                    isActive={joinBtn.isActive}
                                    onClick={handleJoinButtonClick}
                                >
                                    {joinBtn.text}
                                </IconButton>
                                <IconButton
                                    Icon={HorizontalDotIcon}
                                    buttonClass='!bg-[#f9f9f9] h-10 w-auto'
                                    iconClass='h-full aspect-square'
                                />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='flex flex-row'>
                                <LinkButton
                                    to={`/communities/${community.id}`}
                                    end
                                    activeClass={({ isActive }) => {
                                        return isActive
                                            ? 'text-blue-500'
                                            : 'text-black';
                                    }}
                                >
                                    Posts
                                </LinkButton>
                                <LinkButton
                                    to={`/communities/${community.id}/about`}
                                    end
                                    activeClass={({ isActive }) => {
                                        return isActive
                                            ? 'text-blue-500'
                                            : 'text-black';
                                    }}
                                >
                                    About
                                </LinkButton>
                            </div>
                        </div>
                    </div>

                    <PostContainer messages={posts} />
                </div>
            )}
        </MainLayout>
    );
};

export default CommunityPage;
