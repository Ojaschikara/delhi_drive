import {
    Box,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    Button,
    Link,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import {  HamburgerIcon } from '@chakra-ui/icons';
  import React from 'react';
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <Box bg="gray.200" color="#242b2d" px={8}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
         
          <Text fontSize="xl" fontWeight="bold">
          Ojas Chikara
          </Text>
  
           
          <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <Link href="#" mx={4}>
            Home
            </Link>
            <Link href="#" mx={4}>
            About
            </Link>
  
            
            <Menu>
              <MenuButton
                as={Button}
               
                color={"gray.700"}
                bg="gray.500"
                _hover={{ bg: 'gray.600', color:"white" }}
              >
                Services
              </MenuButton>
              <MenuList bg="white" color="gray.800" p={4} borderRadius="md" shadow="lg">
                <Flex>
                  <Box p={4}>
                    <MenuGroup title="Web Development">
                      <MenuItem>Frontend</MenuItem>
                      <MenuItem>Backend</MenuItem>
                      <MenuItem>Full Stack</MenuItem>
                    </MenuGroup>
                  </Box>
                  <Box p={4}>
                    <MenuGroup title="Design">
                      <MenuItem>UI Design</MenuItem>
                      <MenuItem>UX Design</MenuItem>
                      <MenuItem>Graphic Design</MenuItem>
                    </MenuGroup>
                  </Box>
                  <Box p={4}>
                    <MenuGroup title="Marketing">
                      <MenuItem>SEO</MenuItem>
                      <MenuItem>Content Marketing</MenuItem>
                      <MenuItem>Social Media</MenuItem>
                    </MenuGroup>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
  
            <Link href="#" mx={4}>
            Contact
            </Link>
          </Flex>
  
        
          <IconButton
            ref={btnRef}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            onClick={onOpen}
            display={{ base: 'flex', md: 'none' }}
          />
  
         
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader textAlign={'center'} fontSize={20}>Menu</DrawerHeader>
  
              <DrawerBody textAlign={'center'} fontSize={22}>
               
                <Link href="#" display="block" py={3}>
                Home
                </Link>

                  <Menu>
                  <MenuButton
                    as={Button}
                  
                   bg={'white'}
                    _hover={{bg:'white'}}
                    fontSize={20}
                  >
                     Services
                  </MenuButton>
                  <MenuList bg="white" color="gray.800" p={4} borderRadius="md">
                    <Box p={4}>
                      <MenuGroup title="Web Development">
                        <MenuItem>Frontend</MenuItem>
                        <MenuItem>Backend</MenuItem>
                        <MenuItem>Full Stack</MenuItem>
                      </MenuGroup>
                    </Box>
                    <Box p={4}>
                      <MenuGroup title="Design">
                        <MenuItem>UI Design</MenuItem>
                        <MenuItem>UX Design</MenuItem>
                        <MenuItem>Graphic Design</MenuItem>
                      </MenuGroup>
                    </Box>
                     
                  </MenuList>
                </Menu>

                <Link href="#" display="block" py={2}>
                About
                </Link>
  
              
                 
  
                <Link href="#" display="block" py={2}>
                Contact
                </Link>
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  