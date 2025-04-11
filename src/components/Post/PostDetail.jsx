import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChatIcon, DownIcon, OptIcon, ShareIcon, UpIcon } from 'assets/icons';
import CommentItem from './CommentItem';
import { useNavigate, useParams } from 'react-router';
import IconButton from '../Buttons/IconButton';
import PostListItem from './PostListItem';

const PostDetail = ({ messageObj }) => {
    useEffect(() => {
        //check if cache has post, if has then request comment, else request post
        console.log('mounted the post');

        return () => {
            console.log('unmounted post');
        };
    }, []);

    return (
        <motion.div className={`h-full w-full`}>
            <motion.div
                className='flex flex-col gap-[3rem] bg-white p-2 transition-all duration-300 ease-in-out dark:bg-[#1E1E1E] dark:text-white'
                layout
            >
                <PostListItem messageObj={messageObj} />
                <ul className='flex flex-col gap-7'>
                    {messageObj.comments.map((comment, idx) => (
                        <li
                            key={idx}
                            className='rounded-xl border-b-1 border-black'
                        >
                            <CommentItem comment={comment} />
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default PostDetail;
