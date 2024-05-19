import { hero } from "../lib/constants"
import { Box, Container, Text } from "@chakra-ui/react"
import Button from "../components/Button"

const Hero = () => {
  return (
    <Box
      as="section"
      id="home"
      bgImage={`url(${hero.bgImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      pt="145px"
      pb="60px"
      textAlign={{ base: 'center', md: 'left' }}
      position={{ md: 'relative' }}
      overflow={{ md: 'hidden' }}
      zIndex={{ md: 1 }}
      minH={{ lg: '660px', xl: '770px' }}
      display={{ lg: 'grid' }}
      alignItems={{ lg: 'center' }}
    >
      <Container
        px="15px"
        mx={{ sm: "auto" }}
        width={{ sm: "100%" }}
        maxW={{ sm: "550px", md: "720px", lg: "960px", xl: "1200px" }}
      >
        <Box mx={{ md: 0 }}>
          <Text
            as="p"
            color="#ff8d29"
            fontFamily="shadowsIntoLight"
            fontSize={{ base: "29px", sm: "32px" }}
            letterSpacing="1px"
            mx={{ base: "auto", sm: "auto", md: "auto" }}
            mb="25px"
          >
            {hero.title}
          </Text>

          <Text
            textStyle="h1"
            as="h1"
            fontFamily="rubik"
            fontSize={{ base: '32px', sm: "42px", md: '70px' }}
            fontWeight="bold"
            color="#f1d6c6"
            maxW="12ch"
            mx={{ base: "auto", md: 0 }}
            letterSpacing={{ base: '-2px', md: '-2.5px' }}
            lineHeight={1.2}
          >
            {hero.subTitle}
          </Text>

          <Text
            as="p"
            color="#e6caba"
            fontFamily='roboto'
            fontSize={{ base: '16px', md: '18px' }}
            mx={{ base: 'auto', md: 0 }}
            maxW="44ch"
            mt="15px"
            mb="30px"
          >
            {hero.description}
          </Text>

          <Button mx={{ base: 'auto', md: 0 }} orange>
            {hero.buttonText}
          </Button>
        </Box>

        {/* Hero Image Below */}

        <Box
          as="figure"
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          top={{ base: 'calc(50% + 86px)', lg: 'auto' }}
          transform={{ base: 'translateY(-50%)', lg: 'translateY(0)' }}
          right="50px"
          maxW={{ base: '40%', lg: '45%' }}
          aspectRatio="1 / 0.9"
          bottom={{ lg: 0 }}
        >
          <Box
            as="img"
            src={hero.bannerImage}
            width={820}
            height={716}
            alt="Burgir Bg"
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
            transform={{
              base: 'none',
              md: 'scale(1.4) translateX(20px) translateY(-20px)',
            }}
          />
          <Box
            as="img"
            src={hero.burgerImage}
            width={700}
            height={637}
            alt="Burgir"
            position="absolute"
            bottom={0}

            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>

        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          right={0}
          bottom="-2px"
          width="full"
          height="full"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition="right bottom"
          pointerEvents="none"
          zIndex={-1}
          bgImage={`url(${hero.bgShape})`}
        />
      </Container>
    </Box>
  )
}

export default Hero
