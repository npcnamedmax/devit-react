import { createContext, useState } from 'react';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
    //state of header
    const [headerState, setHeaderState] = useState({
        menu: false,
        search: false,
        notification: false,
        user: false,
    });

    return (
        <LayoutContext.Provider value={{ headerState, setHeaderState }}>
            {children}
        </LayoutContext.Provider>
    );
};
export { LayoutProvider, LayoutContext };
