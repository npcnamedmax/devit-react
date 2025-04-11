import Scaffolding from 'skeleton/Scaffolding';
import PostHeader from 'components/Headers/PostHeader';

const PostLayout = ({ children }) => {
    return (
        <Scaffolding
            Header={() => <PostHeader onExit={() => {}} />}
            Content={() => <>{children}</>}
        ></Scaffolding>
    );
};

export default PostLayout;
