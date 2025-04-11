import { useNavigate } from 'react-router';
import PostListItem from './PostListItem';
import { useEffect } from 'react';

const PostContainer = ({ messages }) => {
    //memoise messages
    const navigate = useNavigate();
    const handleClick = (messageObj) => {
        navigate(`/posts/${messageObj.id}`);
    };

    useEffect(() => {
        console.log('messageObj is ', messages);
    }, []);

    return (
        <ul className='p-2'>
            {messages &&
                messages.map((message) => (
                    <li key={message.id}>
                        <PostListItem
                            messageObj={message}
                            onClick={() => handleClick(message)}
                            descriptionClassName='line-clamp-2 break-words'
                            titleClassName='line-clamp-1 break-words'
                        />
                    </li>
                ))}
        </ul>
    );
};

export default PostContainer;
