import TextButton from '../Buttons/TextButton';
import { twMerge } from 'tailwind-merge';

const CommunityListItem = ({
    community,
    onClick,
    className,
    buttonOnClick,
}) => {
    return (
        <div
            className={twMerge(
                'flex flex-col gap-2 rounded-lg border-1 border-gray-300 p-4',
                className,
            )}
            onClick={onClick}
        >
            <div className='flex h-20 flex-row justify-between'>
                <div className='flex flex-row gap-2'>
                    <div className='aspect-square h-full'>
                        <img
                            src={community.banner_image_url}
                            alt={community.name}
                            className='aspect-square rounded-full object-cover'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-bold'>{community.name}</h3>
                        <p>{community.memberCount} members</p>
                    </div>
                </div>

                <TextButton
                    onClick={buttonOnClick}
                    buttonClass='rounded !bg-blue-500 !px-8 !py-2 !h-fit text-white self-center'
                    textClass='text-sm font-bold text-sm'
                    text='Join'
                />
            </div>
            <div>
                <p className='text-sm text-gray-600'>{community.description}</p>
            </div>
        </div>
    );
};

export default CommunityListItem;
