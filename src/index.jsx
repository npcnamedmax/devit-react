const messages = [
    {
        id: 1,
        title: 'Morning Adventure',
        description:
            'Had a great time hiking and exploring the trail asdadwae1dawdawdawd1awdawdassdasdasdasdasd!',
        author: {
            profilePic: 'https://example.com/profiles/john.jpg',
            username: 'john_doe',
        },
        timePosted: '2023-03-21T08:30:00Z',
        photos: [
            'https://example.com/photos/hike1.jpg',
            'https://example.com/photos/hike2.jpg',
        ],
        comments: [
            { username: 'alice', comment: 'Looks amazing!', numLikes: 3 },
            { username: 'bob', comment: 'Great pictures!', numLikes: 2 },
        ],
        numLikes: 150,
        numShares: 20,
        numViews: 1200,
    },
    {
        id: 2,
        title: 'City Lights',
        description: 'Enjoying a night out in the bustling city.',
        author: {
            profilePic: 'https://example.com/profiles/maria.jpg',
            username: 'maria_citylife',
        },
        timePosted: '2023-04-10T21:15:00Z',
        photos: ['https://example.com/photos/city1.jpg'],
        comments: [{ username: 'chris', comment: 'So vibrant!', numLikes: 2 }],
        numLikes: 240,
        numShares: 35,
        numViews: 2300,
    },
    {
        id: 3,
        title: 'Sunset Bliss',
        description: 'Captured the perfect sunset on the beach.',
        author: {
            profilePic: 'https://example.com/profiles/emma.jpg',
            username: 'emma_sunsets',
        },
        timePosted: '2023-05-05T19:45:00Z',
        photos: ['https://example.com/photos/sunset1.jpg'],
        comments: [
            { username: 'luke', comment: 'Breathtaking view!', numLikes: 1 },
        ],
        numLikes: 310,
        numShares: 50,
        numViews: 3400,
    },
    {
        id: 4,
        title: 'Coffee Time',
        description: 'Enjoying my favorite brew on a rainy day.',
        author: {
            profilePic: 'https://example.com/profiles/sam.jpg',
            username: 'sam_cafe',
        },
        timePosted: '2023-06-15T10:00:00Z',
        photos: ['https://example.com/photos/coffee.jpg'],
        comments: [],
        numLikes: 95,
        numShares: 10,
        numViews: 800,
    },
    {
        id: 5,
        title: 'Art in the Park',
        description: 'An impromptu art session with local talents.',
        author: {
            profilePic: 'https://example.com/profiles/zoe.jpg',
            username: 'zoe_art',
        },
        timePosted: '2023-07-01T14:30:00Z',
        photos: [
            'https://example.com/photos/art1.jpg',
            'https://example.com/photos/art2.jpg',
        ],
        comments: [
            { username: 'max', comment: 'So creative!', numLikes: 7 },
            { username: 'liz', comment: 'I love this vibe!', numLikes: 5 },
        ],
        numLikes: 180,
        numShares: 22,
        numViews: 1500,
    },
    {
        id: 6,
        title: 'Weekend Getaway',
        description:
            'Exploring the countryside and relaxing away from the city.',
        author: {
            profilePic: 'https://example.com/profiles/ryan.jpg',
            username: 'ryan_travels',
        },
        timePosted: '2023-08-12T09:00:00Z',
        photos: ['https://example.com/photos/countryside.jpg'],
        comments: [
            { username: 'eve', comment: 'Wish I was there!', numLikes: 22 },
        ],
        numLikes: 210,
        numShares: 18,
        numViews: 1900,
    },
    {
        id: 7,
        title: 'Book Recommendations',
        description: 'Sharing my favorite reads from this summer.',
        author: {
            profilePic: 'https://example.com/profiles/lily.jpg',
            username: 'lily_reads',
        },
        timePosted: '2023-09-03T16:20:00Z',
        photos: [],
        comments: [
            {
                username: 'mark',
                comment: 'Adding these to my list!',
                numLikes: 58,
            },
            { username: 'anna', comment: 'Great suggestions!', numLikes: 2 },
        ],
        numLikes: 130,
        numShares: 12,
        numViews: 1100,
    },
    {
        id: 8,
        title: 'Fitness Journey',
        description: 'Documenting my progress and workouts.',
        author: {
            profilePic: 'https://example.com/profiles/dan.jpg',
            username: 'dan_fitness',
        },
        timePosted: '2023-10-11T07:30:00Z',
        photos: ['https://example.com/photos/gym.jpg'],
        comments: [
            { username: 'sara', comment: 'Keep it up!', numLikes: 2 },
            { username: 'tom', comment: 'Inspiring!', numLikes: 6 },
        ],
        numLikes: 270,
        numShares: 30,
        numViews: 2200,
    },
    {
        id: 9,
        title: 'Culinary Creations',
        description: 'Tried a new recipe today and it turned out delicious.',
        author: {
            profilePic: 'https://example.com/profiles/rita.jpg',
            username: 'rita_cooks',
        },
        timePosted: '2023-11-20T12:45:00Z',
        photos: ['https://example.com/photos/recipe.jpg'],
        comments: [
            { username: 'mike', comment: 'Yummy, looks great!', numLikes: 4 },
        ],
        numLikes: 320,
        numShares: 40,
        numViews: 2500,
    },
    {
        id: 10,
        title: 'Night Sky Wonders',
        description:
            'Stargazing session with a telescope—amazing constellations!',
        author: {
            profilePic: 'https://example.com/profiles/olivia.jpg',
            username: 'olivia_nights',
        },
        timePosted: '2023-12-05T22:10:00Z',
        photos: ['https://example.com/photos/stars.jpg'],
        comments: [
            {
                username: 'george',
                comment: 'Wow, the sky looks incredible!',
                numLikes: 5,
            },
        ],
        numLikes: 400,
        numShares: 55,
        numViews: 3000,
    },
];
import MainLayout from 'layouts/MainLayout';
import PostContainer from 'components/Post/PostContainer';

const Index = () => {
    //request posts here and memoise
    return (
        <MainLayout>
            <PostContainer messages={messages} />
        </MainLayout>
    );
};

export default Index;
