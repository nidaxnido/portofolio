import CustomHeading from "@/components/CustomHeading";
import Layout from "@/components/Layout";
import {Text, Image, Box, Link, Flex, AspectRatio} from '@chakra-ui/react';
import projects from '@/data/projects'

export default function Projects(){
    return <Layout pageName="projects">
        <>
            <CustomHeading mt='20px'>My Projects</CustomHeading>
            <Text mt='30px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum sed expedita ex culpa officiis, molestiae doloribus fugiat maxime distinctio repudiandae consectetur animi! Explicabo voluptate tempore perspiciatis magni sed eos.</Text>
            <Flex wrap='wrap' align='center' justify='center' mt='30px'>
            {
                projects.map((item) => {
                 return   <Box key={item.name} p={3}>
                        <AspectRatio ratio={5/3} minW='250px' bg='blackAlpha.400' borderRadius='lg' >
                        <Image alt={item.name} src={item.image} borderRadius='lg'  />
                        </AspectRatio>
                        <Text fontWeight='bold'>{item.name}</Text>
                        <Link color='blackAlpha.500' href={item.link}>{item.link}</Link>
                    </Box>
                })
            }
            </Flex>
            </>
    </Layout>
}