import { Box, Text, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TravelTypeProps {
  src: string
  children: ReactNode
}

export function TravelType({ src, children }) {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Image src={src} marginBottom="24px" />
      <Text fontWeight="600" fontSize="24px" color="#47585B">
        {children}
      </Text>
    </Box>
  )
}