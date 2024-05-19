import { Box, Container, Text, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { about } from '../lib/constants';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from '../components/Button';

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      textAlign={{ base: 'center', md: 'left' }}
      position="relative"
      py="40px"
    >
      <Container
        maxW={{ sm: "550px", md: "720px", lg: "960px", xl: "1200px" }}
        px="15px"
        mx={{ sm: "auto" }}
        display={{ lg: 'grid' }}
        gridTemplateColumns={{ lg: '1fr 1fr' }}
        gap={{ lg: '30px', xl: '60px' }}
        position="relative"
      >
        <Box position="relative" aspectRatio="1/0.9">
          <Image
            src={about.bannerImage.url}
            alt={about.bannerImage.alt}
            width={509}
            height={459}
            maxWidth="max-content"
            mx="auto"

            sx={{
              width:"100%",
              height:"auto"
            }}

          />

          <Image
            src={about.redShape.url}
            alt={about.redShape.alt}
            width={216}
            height={226}
            position="absolute"
            top="0"
            left="100px"
            animation="scaleUp 1s linear infinite alternate"
            sx={{
              width:"216px",
              height:"auto"
            }}
          />
        </Box>

        <Box>
          <Text
            fontFamily="Rubik"
            fontSize={{ base: "32px", lg: "42px" }}
            fontWeight="semibold"
            color="rgb(14, 14, 18)"
            letterSpacing="-1px"
            lineHeight={1.6}
            maxWidth="15ch"
            mt="40px"
            mb="10px"
            mx={{ base: 'auto', md: '0' }}
          >
            {about.title.text}
            <Box as="span" color="#ff9d2e">
              {about.title.highlight}
            </Box>
          </Text>

          <Text
            fontFamily="Roboto"
            fontSize="16px"
            color="#787878"
            lineHeight={1.2}
          >
            {about.description}
          </Text>

          <UnorderedList mt="20px" mb="30px" pl={0} styleType="none">
            {about.facilities.map((item, index) => (
              <ListItem
                key={index}
                mb="10px"
                display="flex"
                justifyContent={{ base: 'center', md: 'flex-start' }}
                alignItems="center"
                gap="10px"
              >
                <IoCheckmarkCircleOutline
                  style={{
                    backgroundColor: '#ff9d2e',
                    color: 'white',
                    fontSize: '24px',
                    borderRadius: '50%',
                    margin: 0,
                  }}
                />
                <Box
                  as="span"
                  fontFamily="Rubik"
                  fontSize="18px"
                  fontWeight="medium"
                  color="#0e0e12"
                  pl={0}
                >
                  {item}
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
          <Button orange>
            Order Now
          </Button>
        </Box>
      </Container>

      <Box
        backgroundImage='url(/shape-grey.png)'
        position='absolute'
        bottom='0'
        left='0'
        width='100%'
        height='15px'
        backgroundRepeat='repeat'
        backgroundPosition='bottom'
      />
    </Box>
  );
}

export default About;
