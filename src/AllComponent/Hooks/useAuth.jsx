import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider/AuthProvider';

const useAuth = () => { 
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth; 