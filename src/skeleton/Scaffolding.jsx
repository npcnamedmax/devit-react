const Scaffolding = ({ Header, Content, children }) => {
    return (
        <div className='relative h-full w-full'>
            <header className='fixed top-0 z-1 flex h-[8dvh] w-full border-b-2 border-gray-500 bg-white px-6 py-2 dark:bg-gray-500'>
                {Header()}
                {/* Treat as renderProp instead as functional component (refer to l2) */}
            </header>
            <div className='relative top-[8dvh] h-[92dvh] w-full'>
                {Content()}
                {/* Treat as renderProp instead as functional component (refer to l2) */}
            </div>
            {children}
        </div>
    );
};

export default Scaffolding;
