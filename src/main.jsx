import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './includes/tailwind.css';
import { LayoutProvider } from 'providers/LayoutProvider.jsx';
import { AuthProvider } from 'providers/AuthProvider.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from './index.jsx';
import App from './App.jsx';
import { Login } from './auth/Login.jsx';
import { Signup } from './auth/Signup.jsx';
import PostDetailPage from './Main/PostDetailPage.jsx';
import AuthIndex from './auth/AuthIndex.jsx';
import SearchPage from './search/SearchPage.jsx';
import CommunityPage from './communities/CommunityPage.jsx';
import DiscoverPage from './discover/DiscoverPage.jsx';
import CommunityAboutPage from './communities/CommunityAboutPage.jsx';
import ProfilePage from './profile/ProfilePage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: 'posts',
                element: <Index />,
            },
            {
                path: 'posts/:id',
                element: <PostDetailPage />,
            },
        ],
    },
    {
        path: '/auth',
        children: [
            {
                index: true,
                element: <AuthIndex />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <Signup />,
            },
        ],
    },
    {
        path: '/search',
        element: <SearchPage />,
    },
    {
        path: '/communities',
        children: [
            {
                index: true,
                element: <DiscoverPage />,
            },
            {
                path: ':id',
                element: <CommunityPage />,
            },
            {
                path: ':id/about',
                element: <CommunityAboutPage />,
            },
        ],
    },
    {
        path: '/discovery',
        element: <DiscoverPage />,
    },
    {
        path: '/profile',
        children: [
            {
                index: true,
                element: <ProfilePage />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LayoutProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </LayoutProvider>
    </StrictMode>,
);
