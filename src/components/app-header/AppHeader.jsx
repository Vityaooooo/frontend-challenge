import { useLocation } from 'react-router-dom';
import AppHeaderUI from "../ui/app-header/AppHeaderUI";

const AppHeader = () => {
  const location = useLocation().pathname;
  
  return (
    <AppHeaderUI locationPath={location} />
)}

export default AppHeader;
