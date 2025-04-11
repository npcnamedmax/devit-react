import IconButton from 'components/Buttons/IconButton';
import { BackIcon } from 'icons/index';
import { useNavigate } from 'react-router';

const PostHeader = ({ onExit }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        //navigate to previous page
        navigate(-1);
    };
    return (
        <>
            <div className='flex h-full w-full items-center justify-start gap-4'>
                <IconButton
                    Icon={BackIcon}
                    onClick={() => handleBack()}
                    buttonProps={{
                        className: 'h-full aspect-square hover:!border-0',
                    }}
                />
            </div>
        </>
    );
};

export default PostHeader;
