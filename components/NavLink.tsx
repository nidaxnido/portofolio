import { Link } from  '@chakra-ui/react'
const NavLink =({caption, isActive, href}:{caption:string, isActive?:boolean, href:string}) => {
    return <Link color={isActive? 'teal.500': ''} 
                textDecor={isActive? 'underline':''}
                href={href}
                >{caption}</Link>
}
export default NavLink;