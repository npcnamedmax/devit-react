const CommunityAboutSection = ({ children, title }) => {
    return (
        <div className='flex flex-col gap-5 border-b-2 border-black p-2'>
            <header className='flex flex-col gap-2 font-semibold'>
                {title}
            </header>
            <div className='flex flex-col gap-2 pb-5'>{children}</div>
        </div>
    );
};

const CommunityAboutContainer = ({ community }) => {
    return (
        <div className='flex flex-col gap-2 rounded-lg bg-gray-300 p-5'>
            {community && (
                <>
                    <CommunityAboutSection title='About Community'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h3 className='font-bold'>{community.name}</h3>
                                <p>{community.description}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p>Created at {community.createdAt}</p>
                                <p>Type: {community.type}</p>
                            </div>
                        </div>
                    </CommunityAboutSection>

                    {community.resources &&
                        community.resources.length !== 0 && (
                            <CommunityAboutSection title='Resources'>
                                <ul className='flex flex-col gap-4'>
                                    {community.resources.map(
                                        (resource, idx) => (
                                            <li
                                                key={idx}
                                                className='rounded-full border-1'
                                            >
                                                <a
                                                    href={resource.url}
                                                    className='!block h-full w-full p-2 py-3 text-center !text-black'
                                                >
                                                    {resource.name}
                                                </a>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </CommunityAboutSection>
                        )}

                    {community.rules && community.rules.length !== 0 && (
                        <CommunityAboutSection title='Rules'>
                            <ul>
                                {community.rules.map((rule, idx) => (
                                    <li key={idx} className='p-2 py-4'>
                                        {idx + 1}. {rule}
                                    </li>
                                ))}
                            </ul>
                        </CommunityAboutSection>
                    )}
                </>
            )}
        </div>
    );
};
export default CommunityAboutContainer;
