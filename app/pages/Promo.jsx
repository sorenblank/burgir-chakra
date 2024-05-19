import { Box, Container, Text, Image } from "@chakra-ui/react";
import { promo } from "../lib/constants";

const Promo = () => {
  return (
    <Box
      as="section"
      id="promo"
      bgColor="#f9f6f0"
      py="40px"
      textAlign="center"
      position="relative"
    >
      <Container
        px="15px"
        mx={{ sm: "auto" }}
        width={{ sm: "100%" }}
        maxW={{ sm: "550px", md: "720px", lg: "960px", xl: "1200px" }}
      >
        <Text
          textStyle="h2"
          as="h2"
          fontFamily="rubik"
          fontSize="32px"
          py="40px"
          color="#0e0e12"
          textDecoration="underline"
          textUnderlineOffset="12px"
          justifyContent="center"
          lineHeight={1.2}
          letterSpacing="-1px"
        >
          Our New <Box as="span" color="#ff9d2e">Meals!</Box>
        </Text>

        <Box
          as="ul"
          display="flex"
          gap="12px"
          overflowX="auto"
          pb="40px"
          scrollSnapType="x mandatory"
          sx={{
            '&::-webkit-scrollbar': {
              height: '12px',
              '&-button': {
                width: 'calc(25% - 40px)',
              },
              '&-track': {
                outline: '2px solid #ff9d2e',
                borderRadius: '2px',
              },
              '&-thumb': {
                border: '3px solid #f9f6f0',
                borderRadius: '12px',
              },
            }
          }
        }
        >
          {promo.map((item) => (
            <Box
              as="li"
              key={item.id}
              overflow="hidden"
              minWidth={{ base: "100%", sm: "calc( 50% - 5px )", lg: "calc( 33.33% - 6.66px )", xl: "calc( 26% - 22px )" }}
              width="100%"
              minHeight="350px"
              bgColor="#ffffff"
              scrollSnapAlign="start"
              borderRadius="12px"
              listStyleType="none"
              boxShadow="0 1px 4px hsla(0, 0%, 0%, 0.2)"
            >
              <Box
                as="div"
                display="flex"
                flexDirection="column"
                minHeight={{ base: "440px", lg: "440px" }}
                justifyContent="space-between"
                position="relative"
                px="40px"
                textAlign="center"
                py="30px"
                zIndex={1}
              >
                <Box>
                  <Text
                    as="h6"
                    my="15px"
                    fontFamily="rubik"
                    fontSize="22px"
                    fontWeight="500"
                    color="#0e0e12"
                    letterSpacing="-1px"
                    lineHeight={1.2}
                    transition="0.25s ease"
                  >
                    {item.cardTitle}
                  </Text>

                  <Text
                    as="p"
                    fontFamily="roboto"
                    fontSize="16px"
                    color="#787878"
                    mb="15px"
                  >
                    {item.cardDescription}
                  </Text>
                </Box>

                <Box
                  as="img"
                  src={item.cardImage}
                  alt={item.cardTitle}
                  width="300px"
                  height="300px"
                  maxWidth="max-content"
                  mx="auto"
                  aspectRatio="1/1"
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                />

                <Box
                  position="absolute"
                  inset="0"
                  bgColor="#ff8d29"
                  transform="scaleY(0.3)"
                  transformOrigin="bottom"
                  zIndex={-1}
                  clipPath="polygon(0 40%, 100% 0%, 100% 100%, 0 100%)"
                  transition="0.25s ease"
                  content="''"
                />
              </Box>
            </Box>
          ))}
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

export default Promo;
