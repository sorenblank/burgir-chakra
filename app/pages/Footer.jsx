import { Box, Container, Text, Flex, Link, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { footer } from '../lib/constants';

const Footer = () => {
  return (
    <Box as="section">
      <Container
        px="15px"
        mx={{ sm: 'auto' }}
        width={{ sm: '100%' }}
        maxW={{ sm: '550px', md: '720px', lg: '960px', xl: '1200px' }}
        position="relative"
        py="24px"
        display="flex"
        gap="20px"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ lg: 'space-between' }}
        alignItems="center"
        verticalAlign="middle"
      >
        <Text fontFamily="rubik" fontSize="16px" color="#808080">
          {footer.copyrightText}
        </Text>

        <UnorderedList
          m={0}
          p={0}
          display="flex"
          flexWrap="wrap"
          gap="20px"
          listStyleType="none"
        >
          {footer.socialLinks.map((link, index) => (
            <ListItem key={index}>
              <Link
                href={link.url}
                textDecoration="none"
                display="flex"
                alignItems="center"
                width="40px"
                height="40px"
                borderRadius="100%"
                bg="#e7e7e7"
                _hover={{ bg: '#cccccc' }}
              >
                <Image src={link.icon} alt={link.name} width={"16px"} height={"16px"} mx="auto" />
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Container>
    </Box>
  );
};

export default Footer;
