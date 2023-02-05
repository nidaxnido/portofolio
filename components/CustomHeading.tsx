import React from "react";
import {Text} from '@chakra-ui/react'
const CustomHeading = ({children, mt}:{children:React.ReactNode, mt?:string}) => {
    return <Text fontSize='30px' fontWeight='bold' mt={mt? mt:''}>{children}</Text>
}
export default CustomHeading;