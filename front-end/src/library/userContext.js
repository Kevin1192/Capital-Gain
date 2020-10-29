import React from 'react';

export const UserContext = React.createContext({
    isAuthenticated: false,
    user: {},
    setCurrentUser: () => {},
})