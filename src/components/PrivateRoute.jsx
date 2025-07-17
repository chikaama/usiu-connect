import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function PrivateRoute({ children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    alert('You must be logged in to view this page.');
    return <Navigate to="/login" replace />;
  }

  return children;
}
