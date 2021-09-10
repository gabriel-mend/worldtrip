import { Flex, Image, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container } from '../Container'

export function Navbar() {
  const { pathname } = useRouter()
  
  return (
    <Flex
      h="100px"
      w="100%"
      background="#F5F8FA"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Container>
        <Box
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
        >
          {pathname !== "/" && (
            <Link href="/">
              <a>
                <Image src='/back.svg' />
              </a>
            </Link>
          )}
        </Box>
        <Image src='/Logo.svg' margin="0 auto"/>
      </Container>
    </Flex>
  )
}