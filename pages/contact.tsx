import CustomHeading from "@/components/CustomHeading";
import Layout from "@/components/Layout";
import {Link, ListItem, Text, UnorderedList} from '@chakra-ui/react'

export default function Contact(){
    return <Layout pageName="contact">
        <CustomHeading mt='30px'>Contact Me</CustomHeading>
        <Text mt='30px'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum at perferendis, autem ad quos dolore nihil voluptas, hic eius iusto neque in vitae quis distinctio obcaecati aperiam, minima nostrum dolorem.</Text>
        <UnorderedList>
            <ListItem>Github: <Link color='teal.500' href="https:github.com/nidaxnido" target='_blank'>https://github.com/nidaxnido</Link></ListItem>
            <ListItem>Twitter: <Link color='teal.500' href="https:twitter.com/nidaxnido" target='_blank'>https://twitter.com/nidaxnido</Link></ListItem>
            <ListItem>LinkedIn: <Link color='teal.500' href="https:LinkedIn.com/nidaxnido" target='_blank'>https://LinkedIn.com/nidaxnido</Link></ListItem>
            <ListItem>Email: <Link color='teal.500' href="https:Email.com/nidaxnido" target='_blank'>https://Email.com/nidaxnido</Link></ListItem>

        </UnorderedList>
    </Layout>
}