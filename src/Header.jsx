
import { extendTheme, ChakraProvider, Container, Box, Image, Text,Button,VStack} from '@chakra-ui/react';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function Header() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Box mx="40px">
          <Box position="relative">
            <Image src="/src/imagen/Cisnenegro.png" alt="Imagen" boxSize="200px" mb={1} w={800}>          
            </Image>
            <Box position="absolute" top="70%" left="50%" transform="translate(-50%, -50%)">
                  <Button colorScheme="blue" mr={2} bg="transparent" >
                    VER DETALLES
                  </Button>
                  <Button colorScheme="green" bg="transparent" >
                     VER VIDEO</Button>
                  </Box>
                  <Box
                              position="absolute"
                              top="30%"
                              left="50%"
                              transform="translate(-50%, -50%)"
                              bg="transparent"
                              border="2px solid white"
                               p={4}
                  >
                <Text color="white">EL CISNE NEGRO</Text>
                </Box>
                </Box>
           
          <Box position="relative">
               <Image src="/src/imagen/Cisne_negro.jpg" alt="Imagen" boxSize="250px" />
                <VStack spacing={2}>
                    <Box position="absolute" top="70%" left="13%" transform="translate(-50%, -50%)">
                       <Button colorScheme="blue" mr={1} bg="transparent" >
                          VER DETALLES
                      </Button>
                      <Button colorScheme="green" bg="transparent" >
                           VER VIDEO
                     </Button>
                     </Box>
                   
                  <Box
                      position="absolute"
                      top="20%"
                      left="5%"
                      transform="translate(-20%, -20%)"
                      bg="transparent"
                      border="2px solid white"
                      w="400"
                      p={4}                    
                  >
                      <Text color="white">EL CISNE NEGRO</Text>
                  </Box>
                </VStack>  
          </Box>
         </Box>
      </Container>
    </ChakraProvider>
  );
}

export default Header;





