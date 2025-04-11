/*
    comment: {
        username: 'julia',
        comment: 'Looks delicious!',
        numLikes: 3,
    },
*/
const UpIcon = ({ ...props }) => {
    return (
        <svg
            {...props}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z'
                    fill='#000000'
                ></path>{' '}
            </g>
        </svg>
    );
};

const DownIcon = ({ ...props }) => {
    return (
        <svg
            {...props}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            transform='rotate(180)'
        >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z'
                    fill='#000000'
                ></path>{' '}
            </g>
        </svg>
    );
};
const CommentItem = ({ comment }) => {
    return (
        <div
            layout='position'
            className='flex h-full flex-col justify-between gap-[1rem] rounded-xl bg-white dark:bg-[#1E1E1E] dark:text-white'
        >
            <header className='flex h-10 justify-between p-2'>
                <div className='flex h-full w-auto'>
                    <div className='flex justify-between gap-2'>
                        <div className='aspect-square h-full rounded-full'>
                            <img src='/src/assets/react.svg' />
                        </div>
                        <div>
                            <p className='text-sm'>{comment.username}</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className='flex w-full flex-col gap-2 p-2'>
                <p className='text-left'>{comment.comment}</p>
            </div>
            <footer className='flex h-10 justify-end p-2'>
                <div className='flex flex-row justify-between gap-2'>
                    <UpIcon className='aspect-square h-full' />
                    <p>{comment.numLikes}</p>
                    <DownIcon className='aspect-square h-full' />
                </div>
            </footer>
        </div>
    );
};

export default CommentItem;
