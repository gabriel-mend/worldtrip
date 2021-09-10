import { Flex, Heading, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import api from "../../services/api";

interface ContinentProps {
  continent: {
    slug: string
    title: string
    content: string
    language: string
    contries: string
    cidades: string
  }
}

export default function Continent({ continent }: ContinentProps) {
  console.log(continent)
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
        <SimpleGrid  templateColumns="1fr 1fr" gridGap="70px">
          <Text color="#47585B" fontSize="24px" lineHeight="36px" textAlign="justify">{continent.content}</Text>
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