import { Flex, Heading, Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import api from "../../services/api";

interface ContinentProps {
  continent: {
    slug: string
    title: string
    content: string
    languages: string
    countries: string
    cidades: string
  }
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex
      flexDir="column"
    >
      <Navbar />
      <Flex 
        h="500px" 
        background="url('/cover.png')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Container>
          <Box h="100%" display="flex" alignItems="flex-end">
            <Heading color="#fff" marginBottom="50px">{continent.title}</Heading>
          </Box>
        </Container>
      </Flex>
      <Container>
        <SimpleGrid  templateColumns="1.5fr 1fr" gridGap="70px" margin="80px 0">
          <Text color="#47585B" fontSize="24px" lineHeight="36px" textAlign="justify">{continent.content}</Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Box textAlign="center">
              <Heading
                color="#FFBA08"
                fontSize="48px"
              >              
                {continent.countries}
              </Heading>
              <Text
                color="#47585B" 
                fontSize="24px"
              >
                países
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading
                color="#FFBA08"
                fontSize="48px"
              >              
                {continent.languages}
              </Heading>
              <Text
                color="#47585B" 
                fontSize="24px"
              >
                línguas
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading
                color="#FFBA08"
                fontSize="48px"
              >              
                {continent.cidades}
              </Heading>
              <Text
                color="#47585B" 
                fontSize="24px"
              >
                cidades
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
      <Container>
        <Heading>Cidades {continent.cidades}</Heading>
        <SimpleGrid templateColumns="1fr 1fr 1fr 1fr" gridGap="45px" margin="40px 0">
          <Box borderRadius="4px">
            <Image src="/londres.png" />
            <Box position="relative" background="#fff" border="1px solid rgba(255, 186, 8, 0.5);" padding="16px 24px">
              <Text fontSize="20px" marginBottom="12px" fontWeight="600" color="#47585B">Londres</Text>
              <Text fontSize="16px" fontWeight="500" color="#999999">Reino Unido</Text>
              <Image src="/londres-bandeira.png" position="absolute" top="38px" right="24px"/>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/continent') 

  const paths = data.map((continent) => ({
    params: { slug: continent.slug },
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await api.get(`/continent?slug=${String(context.params.slug)}`)
  const continent = data[0]
  return {
    props: {
      continent
    }
  }
}