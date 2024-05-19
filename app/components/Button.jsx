import { Button as ChakraButton, Box } from '@chakra-ui/react';

const Button = ({ children, orange, sx, ...props }) => {
  return (
    <ChakraButton
      {...props}
      fontFamily="rubik"
      sx={{
        ...sx,
        borderRadius: '6px',
        px: '35px',
        py: '0px',
        bg: orange ? 'darkOrange' : 'orange',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        color: 'white',
        fontSize: '14px',
        height: '45px',
        fontWeight: 'normal',
        textTransform: 'none',
        border: 'none',
        cursor: 'pointer',
        _hover: {
          bg: orange ? 'darkOrange' : 'orange',
          '& div': {
            transform: 'translate(-50%, 51%) scale(500)',
          },
        },
      }}
    >
      {children}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-1px',
          left: '20px',
          width: '1px',
          height: '1px',
          borderRadius: '50%',
          bg: '#000000',
          zIndex: -1,
          transition: '0.5s ease',
          transform: 'translate(-50%, 51%) scale(1)',
        }}
      />
    </ChakraButton>
  );
};

export default Button;