import IconButton from 'components/Buttons/IconButton';
import { BackIcon } from 'icons/index';
import { useNavigate } from 'react-router';

const SearchHeader = ({ query, setQuery }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        //navigate to previous page
        navigate(-1);
    };
    return (
        <div className='flex w-full flex-row justify-start'>
            <div className='w-aut flex h-full items-center justify-start gap-4'>
                <IconButton
                    Icon={BackIcon}
                    onClick={() => handleBack()}
                    buttonClass='h-full aspect-square hover:!border-0 w-auto'
                />
                <input
                    type='text'
                    placeholder='Search'
                    onChange={(event) => setQuery(event.target.value)}
                    value={query}
                    className='h-full w-full focus:outline-none'
                />
            </div>
        </div>
    );
};

export default SearchHeader;
