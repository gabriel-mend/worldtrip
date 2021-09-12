import { Box } from '@chakra-ui/react' 
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container ({ children }: ContainerProps) {
  return (
    <Box 
      w="100%"
      maxW="1160px"
      margin="0 auto"
      position="relative"
      padding={["0 15px", "auto"]}
    >
      {children}
    </Box>
  )
}