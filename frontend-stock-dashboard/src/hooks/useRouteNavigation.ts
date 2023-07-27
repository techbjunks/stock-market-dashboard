import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();
  
  const previousRoute = () => {
    navigate(-1); 
  };

  const forwardRoute = () => {
    navigate(1); 
  };

  return { previousRoute, forwardRoute };
};

export default useNavigation;
