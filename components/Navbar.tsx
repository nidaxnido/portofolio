import { HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";

const NavBar = ({activePage} : {activePage : string}) => {
    return <HStack spacing={5}>
    <NavLink caption='Home' href='/' isActive={activePage == 'home' ?true:false} />
    <NavLink caption='Projects' href='/projects' isActive={activePage == 'projects' ?true:false} />
    <NavLink caption='Contact' href='/contact' isActive={activePage == 'contact' ?true:false} />
  </HStack>  
}
export default NavBar;