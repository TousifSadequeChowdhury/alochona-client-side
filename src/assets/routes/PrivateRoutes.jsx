import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider';  // Adjust path as needed
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {  // 'children' should be lowercase
  const { user } = useContext(AuthContext); // Make sure 'user' is being set correctly in AuthContext
  console.log(user)
  if (user) {
    console.log('user exist')
    return children;  
  } else {
    return <Navigate to="/login" />;  
  
}
};

export default PrivateRoutes;
