import { Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'

export function Navbar() {
  return (
    <Flex
      h="100px"
      w="100%"
      background="#F5F8FA"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Image src='/Logo.svg' />
    </Flex>
  )
}