import { Box, Container, Text, Heading, Input, Select, Textarea } from '@chakra-ui/react';
import { reservation } from '../lib/constants';
import Button from '../components/Button';

const Reservation = () => {
  return (
    <Box
      as="section"
      id="contact"
      color="white"
      position="relative"
      py="60px"
      pt={{ lg: '120px' }}
      pb={{ lg: '60px' }}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      borderBottom="2px solid #c5c4cc"
      backgroundImage="url('/footer-illustration.png')"
    >
      <Container
        maxW={{ base: '100%', sm: '550px', md: '720px', lg: '960px', xl: '1200px' }}
        px="15px"
        mx={{ sm: 'auto' }}
      >
        <Box
          display="grid"
          gap="60px"
          gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
        >
          <Box
            as="form"
            bg="#fff"
            p="30px"
            border="1px solid #ededed"
            borderRadius="8px"
            boxShadow="0 1px 2px hsla(0, 0%, 0%, 0.2)"
            display="flex"
            flexDirection="column"
            alignItems="left"
          >
            <Box display="flex" flexDirection="row" gap="5px">
              <Heading
                position="relative"
                color="#0e0e12"
                minWidth="max-content"
                fontSize="22px"
                fontFamily="rubik"
                fontWeight="600"
                letterSpacing="-1px"
                mb="20px"
              >
                {reservation.form.formTitle}
                <Box
                  as="span"
                  position="absolute"
                  top="50%"
                  transform="translateY(-50%)"
                  left="calc(100% + 15px)"
                  bg="#ff9d2e"
                  width="50px"
                  height="4px"
                  borderRight="5px solid #ff9d2e"
                  boxShadow="inset -5px 0px 0px 0px #ffffff"
                />
              </Heading>
            </Box>

            <Box display="grid" gap="10px" mb="10px" gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}>
              <Input
                required
                type="text"
                placeholder="Name"
                p="10px"
                color="#9ca3af"
                border="1px solid #ededed"
                borderRadius="6px"
                fontSize="16px"
                fontFamily="rubik"
              />
              <Input
                required
                type="email"
                placeholder="Email"
                p="10px"
                color="#9ca3af"
                border="1px solid #ededed"
                borderRadius="6px"
                fontSize="16px"
                fontFamily="rubik"
              />
            </Box>

            <Box display="grid" gap="10px" mb="10px" gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}>
              <Select
                required
                placeholder="Person"
                p="10px"
                color="#9ca3af"
                border="1px solid #ededed"
                borderRadius="6px"
                fontSize="16px"
                fontFamily="rubik"
              >
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
                <option value="4">4 Person</option>
                <option value="5">5 Person</option>
              </Select>
              <Input
                required
                type="date"
                p="10px"
                color="#9ca3af"
                border="1px solid #ededed"
                borderRadius="6px"
                fontSize="16px"
                fontFamily="rubik"
              />
            </Box>

            <Textarea
              required
              placeholder="Message"
              p="10px"
              color="#9ca3af"
              border="1px solid #ededed"
              borderRadius="6px"
              fontSize="16px"
              minHeight="130px"
              resize="none"
              fontFamily="rubik"
              width="100%"
            />

            <Button mt="15px" mx="auto" alignItems="center" justifyContent="center">
              Book Now
            </Button>
          </Box>

          <Box display="grid" gridTemplateColumns={{ md: 'repeat(1, 1fr)' }} gap="20px">
            {reservation.sections.map((section, index) => (
              <Box key={index}>
                <Box display="flex" flexDirection="row" gap="5px" mb="10px">
                  <Heading
                    position="relative"
                    minWidth="max-content"
                    fontSize="24px"
                    fontFamily="rubik"
                    fontWeight="600"
                    letterSpacing="-1px"
                    color="#0e0e12"
                  >
                    {section.title}
                    <Box
                      as="span"
                      position="absolute"
                      top="50%"
                      transform="translateY(-50%)"
                      left="calc(100% + 15px)"
                      bg="#ff9d2e"
                      width="50px"
                      height="4px"
                      borderRight="5px solid #ff9d2e"
                      boxShadow="inset -5px 0px 0px 0px #ffffff"
                    />
                  </Heading>
                </Box>
                <Box>
                  {section.description.map((desc, idx) => (
                    <Text key={idx} fontFamily="rubik" fontSize="16px" color="#0e0e12">
                      {desc.title}:{' '}
                      <Box as="span" color="#ff8d29">
                        {desc.info}
                      </Box>
                    </Text>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Reservation;
