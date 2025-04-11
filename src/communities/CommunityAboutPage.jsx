import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { communities } from '../data/communities';
import MainLayout from '../layouts/MainLayout';
import CommunityAboutContainer from '../components/community/CommunityAboutContainer';

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
const CommunityAboutPage = () => {
    const communityId = useParams().id;
    const [community, setCommunity] = useState(null);
    useEffect(() => {
        // fetch community data
        console.log(
            communities.find((community) => community.id === communityId),
        );
        setCommunity(
            communities.find((community) => community.id === communityId),
        );
    }, []);
    return (
        <MainLayout>
            <div>
                {community && (
                    <>
                        <img
                            src={community?.banner_image_url}
                            className='h-30 w-full'
                        />
                        <div className='p-3'>
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
                            <div>
                                <div className='flex flex-row'>
                                    <LinkButton
                                        to={`/communities/${community.id}`}
                                        end
                                        className={({ isActive }) => {
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
                                        className={({ isActive }) => {
                                            return isActive
                                                ? 'text-blue-500'
                                                : 'text-black';
                                        }}
                                    >
                                        About
                                    </LinkButton>
                                </div>
                            </div>
                            <div>
                                <CommunityAboutContainer
                                    community={community}
                                ></CommunityAboutContainer>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </MainLayout>
    );
};
export default CommunityAboutPage;
