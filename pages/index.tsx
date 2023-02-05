import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Link, Avatar, Box, Heading, HStack, Text } from '@chakra-ui/react'
import NavLink from '@/components/NavLink'
import NavBar from '@/components/Navbar'
import Layout from '@/components/Layout'
import CustomHeading from '@/components/CustomHeading'
// import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout pageName='home'>
      <Avatar boxSize='150px' name='Nida' src='/images/pp.jpg' mt='30px' />
          <CustomHeading mt='30px'>Halo!</CustomHeading>
          <CustomHeading>My name is <Text as='span' color='teal.500'>Ni'mal Mursyidah</Text></CustomHeading>
          <Text fontSize='30px' fontWeight='extrabold' ></Text>
          <Text mt='40px'>Currently working as a Frontend Developer Morning Glory Enterprise using {' '}
          <Link textDecor='underline' href={'https://reactjs.org/'}>React</Link>, {' '} 
          <Link textDecor='underline' href={'https://reactjs.org/'}>Next</Link>, and {' '}
          <Link textDecor='underline' href={'https://reactjs.org/'}>TypeScript</Link>.
          </Text>
          <Text mt='30px'>Contact me at {' '}
              <Link color='teal.500'>nida0704@gmail.com</Link> or visit my {' '}
              <Link color='teal.500' href='#'>contact page</Link>.</Text>
    </Layout>
  )
}
