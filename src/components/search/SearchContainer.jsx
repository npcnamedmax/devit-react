const SearchContainer = ({ results, onClick }) => {
    return (
        <ul className='flex flex-col p-3'>
            {results.map((res) => (
                <li
                    key={res.id}
                    className='border-b-1 p-2 py-4'
                    onClick={() => onClick(res)}
                >
                    {res.name}
                </li>
            ))}
        </ul>
    );
};

export default SearchContainer;
