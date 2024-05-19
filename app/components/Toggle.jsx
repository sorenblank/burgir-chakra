import { Box } from '@chakra-ui/react';

const Toggle = ({ clicked, onClick }) => {
  return (
    <Box
      as="button"
      display={{ base: 'grid', lg: 'none' }}
      gap="4px"
      cursor="pointer"
      border="none"
      background="none"
      minHeight="100%"
      onClick={onClick}
    >
      <Box
        width="10px"
        height="3px"
        bg="black"
        borderRadius="5px"
        transition="0.25s ease"
        transform={clicked ? 'translate(1px, 3px) rotate(45deg)' : 'none'}
      />
      <Box
        width="20px"
        height="3px"
        bg="black"
        borderRadius="5px"
        transition="0.25s ease"
        transform={clicked ? 'rotate(-45deg)' : 'none'}
      />
      <Box
        width="10px"
        height="3px"
        bg="black"
        borderRadius="5px"
        ml="auto"
        transition="0.25s ease"
        transform={clicked ? 'translate(-1px, -3px) rotate(45deg)' : 'none'}
      />
    </Box>
  );
};

export default Toggle;