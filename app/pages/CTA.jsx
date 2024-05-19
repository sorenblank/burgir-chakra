import { Box, Container, Text, Image } from '@chakra-ui/react';
import { cta } from '../lib/constants';
import Button from '../components/Button';

const CTA = () => {
  return (
    <Box
      as="section"
      id="CTA"
      position="relative"
      bg="#f9f6f0"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      textAlign={{ base: 'center', md: 'left' }}
      overflow="hidden"
      py="60px"
      pt={{ lg: '120px' }}
      pb={{ lg: '60px' }}
      backgroundImage="url('/hero-bg.jpg')"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom="auto"
        transform="rotate(180deg)"
        width="100%"
        height="15px"
        bgRepeat="repeat"
        bgPosition="bottom"
        backgroundImage="url(/shape-grey.png)"
      ></Box>

      <Container
        maxW={{ base: '100%', sm: '550px', md: '720px', lg: '960px', xl: '1200px' }}
        px="15px"
        mx={{ sm: 'auto' }}
        display={{ md: 'grid' }}
        gridTemplateColumns={{ md: '1fr 1fr' }}
        alignItems={{ md: 'center' }}
        gap={{ md: '30px' }}
      >
        <Box>
          <Text
            fontFamily="rubik"
            fontSize={{ base: '32px', lg: '42px' }}
            mt="10px"
            mb="30px"
            mx={{base: 'auto', md: '0' }}
            color="#ffffff"
            fontWeight="600"
            lineHeight="1.5"
            letterSpacing="-2px"
            maxW="17ch"
            
          >
            {cta.title.text}{' '}
            <Box as="span" color="#ff9d2e">
              {cta.title.highlight}
            </Box>
          </Text>

          <Text
            fontFamily="Rubik"
            fontSize="16px"
            mt="25px"
            mb="20px"
            color="#ffffff"
          >
            {cta.description}
          </Text>

          <Button
            orange
            mx={{ base: 'auto', md: '0' }}
          >
            {cta.buttonText}
          </Button>
        </Box>

        <Box
          as="figure"
          position="relative"
          aspectRatio="1/0.9"
        >
          <Image
            src={cta.bannerImage}
            width={700}
            height={637}
            alt="CTA Banner"
            w="100%"
            h="auto"
            mx="auto"
            transform={{
              base: 'translateY(60px) scale(1.3)',
              md: 'scale(1.3) translateX(0px) translateY(60px)',
              lg: 'scale(1.4) translateX(20px) translateY(40px)',
            }}
          />

          <Image
            src={cta.saleImage}
            width={216}
            height={216}
            alt="Sale Shape"
            position="absolute"
            top="50px"
            left={{ base: '10px', lg: '-50px' }}
            animation="scaleUp 1s linear infinite alternate"
          />
        </Box>
      </Container>

      <Box
        backgroundImage="url(/shape-white.png)"
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="15px"
        bgRepeat="repeat"
        bgPosition="bottom"
      />
    </Box>
  );
};

export default CTA;
