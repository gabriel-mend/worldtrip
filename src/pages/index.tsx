import { Flex, Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { TravelType } from "../components/TravelType";

import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { GetStaticProps } from "next";
import Link from "next/link"
import api from "../services/api";

SwiperCore.use([Navigation, Pagination]);


interface HomeProps {
  data: [{
    slug: string
    title: string
    description: string
  }]
}

export default function Home({ data }: HomeProps) {
  console.log(data)
  return (
    <Flex 
      flexDir="column"
    >
      <Navbar />
      <Banner />
      <Container>
        <SimpleGrid templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]} spacingX="40px" margin="100px 0 80px">
          <TravelType src="cocktail.svg">
            vida noturna
          </TravelType>
          <TravelType src="surf.svg">
            praia
          </TravelType>
          <TravelType src="building.svg">
            moderno
          </TravelType>
          <TravelType src="museum.svg">
            clássico
          </TravelType>
          <TravelType src="earth.svg">
            e mais...
          </TravelType>
        </SimpleGrid>
        <Box  width="90px" height="2px" marginX="auto" backgroundColor="#47585B"/>
        <Heading textAlign="center" marginTop="52px" fontSize="26px" fontWeight="600" color="#47585B" lineHeight="54px" marginBottom="52px">Vamos nessa?<br />Então escolha seu continente</Heading>
        <Box height="450px" marginBottom="40px">
          <Swiper
            slidesPerView={1}
            navigation={true}
            pagination={true}
            style={{ height: "100%" }}
          >
            {data.map(continent => (
              <SwiperSlide key={continent.slug}>
                <Link href={`continent/${continent.slug}`}>
                  <Flex 
                    as="a" 
                    h="100%" 
                    flexDir="column" 
                    justifyContent="center" 
                    alignItems="center" 
                    backgroundImage="url('europe.png')"
                    cursor="pointer"
                  >
                    <Heading color="#fff">{continent.title}</Heading>
                    <Text color="#fff">{continent.description}</Text>
                  </Flex>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }  = await api.get('/continent')

  console.log(data)
  return {
    props: {
      data
    }
  }
}