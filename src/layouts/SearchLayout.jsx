import Scaffolding from 'skeleton/Scaffolding';
import SearchHeader from 'components/Headers/SearchHeader';

const SearchLayout = ({ headerProp = null, children }) => {
    return (
        <Scaffolding
            Header={() => <SearchHeader {...headerProp} />}
            Content={() => <>{children}</>}
        ></Scaffolding>
    );
};

export default SearchLayout;
