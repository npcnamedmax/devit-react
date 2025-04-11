import { motion, AnimatePresence } from 'motion/react';
import { ChatIcon, DownIcon, OptIcon, ShareIcon, UpIcon } from 'icons/index';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import IconButton from 'components/Buttons/IconButton';
import { twMerge } from 'tailwind-merge';
import { style } from 'motion/react-client';
/*
messageobj: {
title,
description,
author, (profile pic, username)
timePosted,
photos,
comments,
numlikes,
numShares,
numViews,
}
*/

const PostListItem = ({
    messageObj,
    onClick = () => {},
    descriptionClassName = '',
    titleClassName = '',
}) => {
    const timerRef = useRef([]);
    const [buttonState, setButtonState] = useState({
        upvote: false,
        downvote: false,
    });
    const navigate = useNavigate();

    useEffect(() => {
        console.log('mounted the post');

        return () => {
            console.log('unmounted post');
            // clear all timers
            timerRef.current.forEach((timer) => {
                clearTimeout(timer);
            });
        };
    }, []);

    const handleUpvote = async (e) => {
        //handle upvote
        e.stopPropagation();

        //setButtonState({ ...buttonState, upvote: !buttonState.upvote });
        console.log('upvote');
        const timer = setTimeout(() => {
            setButtonState({ ...buttonState, upvote: !buttonState.upvote });
        }, 1000);
        timerRef.current.push(timer);
    };
    const handleDownvote = (e) => {
        //handle downvote
        e.stopPropagation();

        const timer = setTimeout(() => {
            setButtonState({ ...buttonState, downvote: !buttonState.downvote });
        }, 1000);
        timerRef.current.push(timer);
    };

    const handleComment = (e) => {
        //handle comment
        e.stopPropagation();
        navigate(`/posts/${messageObj.id}`);
    };

    return (
        <motion.div
            className='rounded-xl border-b-1 border-gray-700 shadow-md transition-transform duration-300 ease-in-out'
            onClick={onClick}
        >
            <motion.div
                className='relative flex min-h-[8rem] flex-col rounded-xl'
                layoutId={messageObj.id}
            >
                <motion.div
                    className='flex h-full flex-col justify-between gap-4 rounded-xl bg-white p-4 transition-all duration-300 ease-in-out dark:bg-[#1E1E1E] dark:text-white'
                    layout
                >
                    {/* Header */}
                    <header className='flex items-center justify-between p-2'>
                        <div className='flex items-center gap-2'>
                            <div className='h-10 w-10 overflow-hidden rounded-full'>
                                <img
                                    src='/src/assets/react.svg'
                                    alt='Author avatar'
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>
                                    {messageObj.author.username}
                                </p>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>
                                    {'sam'}
                                </p>
                            </div>
                        </div>
                        <div className='h-6 w-6'>
                            <IconButton
                                onClick={() => {}}
                                Icon={OptIcon}
                                buttonClass='h-full aspect-square !p-0'
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className='flex flex-col gap-2 p-2'>
                        <h2
                            className={twMerge(
                                'text-left text-lg font-bold',
                                titleClassName,
                            )}
                        >
                            {messageObj.title}
                        </h2>
                        <p
                            className={twMerge(
                                'text-left text-sm',
                                descriptionClassName,
                            )}
                        >
                            {messageObj.description}
                        </p>
                    </div>

                    {/* Footer */}
                    <footer className='flex h-10 justify-between p-2'>
                        <div className='flex h-full'>
                            <div className='flex flex-row justify-between gap-2'>
                                <IconButton
                                    onClick={handleUpvote}
                                    Icon={UpIcon}
                                    buttonClass='h-full aspect-square !p-0'
                                    iconProps={{
                                        fill: buttonState.upvote
                                            ? 'red'
                                            : 'black',
                                    }}
                                />
                                <p>{messageObj.numLikes}</p>
                                <IconButton
                                    onClick={handleDownvote}
                                    Icon={DownIcon}
                                    buttonClass='h-full aspect-square !p-0'
                                />
                            </div>
                        </div>
                        <div>
                            <IconButton
                                onClick={handleComment}
                                Icon={ChatIcon}
                                buttonClass='h-full aspect-square !p-0'
                            />
                        </div>
                        <div>
                            <IconButton
                                onClick={() => {}}
                                Icon={ShareIcon}
                                buttonClass='h-full aspect-square !p-0'
                            />
                        </div>
                    </footer>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default PostListItem;
