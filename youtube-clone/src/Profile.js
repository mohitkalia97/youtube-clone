import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
  
    return( 
        isAuthenticated && (
            <h1> USER PAGE </h1>
        )
    );
};

export default LoginButton;