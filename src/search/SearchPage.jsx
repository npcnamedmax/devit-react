import SearchContainer from '../components/search/SearchContainer';
import SearchLayout from '../layouts/SearchLayout';
import { communities } from '../data/communities';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const searchRes = [
    {
        type: 'community',
        id: '1',
        title: 'React Developers',
    },
    {
        type: 'community',
        id: '2',
        title: 'Laravel Developers',
    },
    {
        type: 'user',
        id: '3',
        username: 'John Doe',
    },
    {
        type: 'user',
        id: '4',
        username: 'Jane Doe',
    },
];

const SearchPage = () => {
    //save search cache
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let isValid = true; //closure
        if (!isValid) return;
        const results = communities.filter((community) =>
            community.name.toLowerCase().includes(query.toLowerCase()),
        );
        if (isValid) setSearchResults(results);
        return () => {
            isValid = false;
        };
    }, [query]);

    return (
        <SearchLayout
            headerProp={{
                query,
                setQuery,
            }}
        >
            <SearchContainer
                results={searchResults}
                onClick={(result) => navigate(`/communities/${result.id}`)}
            />
        </SearchLayout>
    );
};

export default SearchPage;
