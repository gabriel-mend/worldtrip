import { Flex, Box, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      h="335px"
      w="100%"
      backgroundImage="url(Background.png)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      alignItems="center"
    >
      <Box
        w="100%"
        maxW="1160px"
        margin="0 auto"
        position="relative"
        padding={["0 15px", "auto"]}
      >
        <Heading color="#fff" fontWeight="medium" fontSize="4xl" lineHeight="54px" mb="20px">5 Continentes,<br/> infinitas possibilidades.</Heading>
        <Text color="#DADADA" fontSize="20px" lineHeight="30px">Chegou a hora de tirar do papel a viagem que você<br/>sempre sonhou. </Text>
        {isMobileVersion && (
          <Image src="./Airplane.png" position="absolute" bottom="-105px" right="0"/>
        )}
      </Box>
    </Flex>
  )
}