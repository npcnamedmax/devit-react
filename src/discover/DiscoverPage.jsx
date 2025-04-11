import MainLayout from '../layouts/MainLayout';
import CommunityListItem from 'components/community/CommunityListItem';
import { communities } from 'data/communities';
import { useNavigate } from 'react-router';

const DiscoverPage = () => {
    const navigate = useNavigate();
    const handleCommunityClick = (id) => {
        navigate(`/communities/${id}`);
    };
    const handleJoinClick = (id) => {
        // Handle join community logic here
        console.log(`Joining community with id: ${id}`);
    };
    return (
        <MainLayout>
            <div>
                <h1>Discover Page</h1>
            </div>
            <ul className='mt-4 p-4'>
                {communities.map((community) => (
                    <li key={community.id} className='mb-4'>
                        <CommunityListItem
                            community={community}
                            onClick={() => handleCommunityClick(community.id)}
                            buttonOnClick={(e) => {
                                e.stopPropagation();
                                handleJoinClick(community.id);
                            }}
                        />
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};
export default DiscoverPage;
