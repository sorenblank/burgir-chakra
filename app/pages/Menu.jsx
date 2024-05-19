import { useState, useEffect } from 'react';
import { Box, Container, Text, Image, List, ListItem, Flex } from '@chakra-ui/react';
import { IoStar } from 'react-icons/io5';
import { menu } from '../lib/constants';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredMenu(menu.items);
    } else {
      setFilteredMenu(menu.items.filter(dish => dish.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box as="section" id="about" textAlign="center" bg="#faf7f2" py={{ base: '60px', lg: '120px' }}>
      <Container maxW={{ base: '100%', sm: '550px', md: '720px', lg: '960px', xl: '1200px' }} px="15px">
        <Text
          fontFamily="rubik"
          fontSize="16px"
          textAlign="center"
          fontWeight="500"
          color="red"
        >
          {menu.subTitle}
        </Text>

        <Text
          fontFamily="rubik"
          fontSize="32px"
          mt="10px"
          mb="30px"
          mx="auto"
          color="richBlack"
          fontWeight="600"
          letterSpacing="-1px"
        >
          {menu.title.text}{' '}
          <Box as="span" color="darkOrage">
            {menu.title.highlight}
          </Box>
        </Text>

        <Text
          fontFamily="rubik"
          maxW="44ch"
          fontSize="16px"
          textAlign="center"
          color="#787878"
          mb="30px"
          mx="auto"
        >
          {menu.description}
        </Text>

        <List display="flex" flexWrap="wrap" justifyContent="center" gap="10px" mb="40px" pl="0">
          {menu.filterItems.map((item, index) => (
            <ListItem key={index} listStyleType="none">
              <Box
                onClick={() => handleCategoryChange(item)}
                fontFamily="rubik"
                borderRadius="6px"
                fontWeight="500"
                px="20px"
                py="5px"
                cursor="pointer"
                border="1px solid"
                borderColor="borderGray"
                bg={
                  selectedCategory === 'All' && item === 'All'
                    ? 'darkOrage'
                    : selectedCategory === item
                    ? 'darkOrage'
                    : 'white'
                }
                color={
                  selectedCategory === 'All' && item === 'All'
                    ? 'white'
                    : selectedCategory === item
                    ? 'white'
                    : 'richBlack'
                }
              >
                {item}
              </Box>
            </ListItem>
          ))}
        </List>

        <List
          display="grid"
          gap="30px"
          alignItems="center"
          justifyContent="center"
          pl="0"
          gridTemplateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        >
          {filteredMenu.map((item, index) => (
            <ListItem key={index} listStyleType="none">
              <Box
                bg="white"
                p="40px"
                borderRadius="12px"
                boxShadow="0 1px 4px hsla(0, 0%, 0%, 0.2)"
              >
                <Box position="relative" pt="30px" maxW="max-content" mx="auto">
                  <Image src={item.image} width="300" height="300" alt={item.dish} w="100%" h="100%" aspectRatio="1/1" />

                  {item.discount && (
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      bg="red"
                      color="white"
                      fontSize="12px"
                      rounded="6px"
                      fontFamily="rubik"
                      fontWeight="400"
                      px="15px"
                      py="2px"
                    >
                      -{item.discount}
                    </Box>
                  )}
                </Box>

                <Flex
                  justify={{ base: 'center', md: 'flex-start' }}
                  align="center"
                  gap="15px"
                  mt="20px"
                  mb="10px"
                >
                  <Text fontFamily="rubik" fontSize="16px" fontWeight="500" color="#787878">
                    Rating:
                  </Text>
                  <Flex gap="5px" color="darkOrage" fontSize="14px">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <IoStar key={i} />
                    ))}
                  </Flex>
                </Flex>

                <Text
                  fontFamily="rubik"
                  fontSize="22px"
                  fontWeight="600"
                  color="richBlack"
                  letterSpacing="-1px"
                  lineHeight={1.2}
                  mb="10px"
                  textAlign={{ md: 'left' }}
                >
                  {item.dish}
                </Text>

                <Flex justify={{ base: 'center', md: 'flex-start' }} gap="5px" fontFamily="rubik" fontWeight="500">
                  <Text fontFamily="rubik" fontWeight="500" color="red" textTransform="uppercase">
                    PRICE:
                  </Text>
                  <Box as="data" color="darkOrage">
                    {item.price}
                  </Box>
                  <Box as="del" color="#bababa">
                    {item.previousPrice}
                  </Box>
                </Flex>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Menu;
