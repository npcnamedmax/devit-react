import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    user: null,
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const isLoggedIn = () => {
        return true;
    };

    const login = (cred) => {
        console.log('login', cred);
        setUser({
            username: cred.username,
            profileUrl: cred.profileUrl,
            email: cred.email,
            bio: cred.bio,
            joinedCommunities: cred.joinedCommunities,
        }); //set user
    };

    const signup = (cred) => {};
    const logout = () => {
        localStorage.removeItem('user'); //remove user
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
