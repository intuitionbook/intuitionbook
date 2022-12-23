import { Button, ButtonProps, Flex } from '@chakra-ui/react';

export default function ButtonWithShadow(props: ButtonProps) {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        {...props}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#0cc894'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: '#0cc',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
        Subscribe Us
      </Button>
    </Flex>
  );
}