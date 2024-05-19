import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { Box, Container, Text, Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import Button from "../components/Button";
import Toggle from "../components/Toggle";

import { navigation } from "../lib/constants";

const Header = () => {
  // Initializing router and state for navigation toggle
  const [openNavigation, setOpenNavigation] = useState(false);

  /**
   * Toggles the navigation menu visibility and page scroll.
   */
  const toggleNavigation = () => {
    const isNavigationOpen = !openNavigation;
    setOpenNavigation(isNavigationOpen);

    // Disabling page scroll when navigation is open
    if (isNavigationOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };

  /**
   * Handles navigation link clicks.
   * Closes the navigation menu and enables page scroll if open.
   */
  const handleClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <>
      <Box
        as="header"
        position="fixed"
        width="100%"
        top="0"
        zIndex="1000"
        py="15px"
        bgColor="header"
        boxShadow="0 2px 6px hsla(0, 0%, 0%, 0.1)">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          px="15px"
          mx="auto"
          width="100%"
          maxWidth={{
            sm: "550px",
            md: "720px",
            lg: "960px",
            xl: "1200px"
          }}>

          <Text
            fontFamily="rubik"
            textStyle="h1"
            letterSpacing="-2px"
            color="richBlack"
          >
            <Link
              as={NextLink}
              href="/"
              textDecoration="none"
              _hover="none"
              color="inherit">
              Burgir

              <Box
                as="span"
                color="darkOrage"
                display="inline-flex"
              >
                .
              </Box>
            </Link>

          </Text>
          <Box
            as="nav"
            display={{ base: openNavigation ? 'flex' : 'none', lg: 'flex' }}
            position={{ base: 'fixed', lg: 'static' }}
            top="4.5rem"
            left={0}
            right={0}
            bottom={0}
            bg={{ base: 'white', lg: 'transparent' }}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
            ml="auto"
          >
            <Box
              position="relative"
              zIndex={20}
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              gap={{ lg: '5px' }}
              alignItems="center"
              justifyContent="center"
              margin="auto"
            >
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  mx={{ base: 'auto', lg: 0 }}
                  display={{ lg: item.onlyMobile ? 'none' : 'block' }}
                  fontFamily="rubik"
                  fontSize={{ base: '24px', lg: '15px' }}
                  color="#0e0e12"
                  fontWeight="medium"
                  px="10px"
                  py="15px"
                  textDecoration="none"
                  _hover={{ color: '#ff8d29' }}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            gap="5px"
            alignItems="center"
            m={0}
          >
            <Button
              display={{ base: 'none', sm: 'block' }}
              orange
            >
              Reservation
            </Button>

            <Toggle clicked={openNavigation} onClick={toggleNavigation} />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Header