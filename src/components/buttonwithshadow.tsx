import { 
  Button, 
  ButtonProps, 
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
} from '@chakra-ui/react';
import NewsLetter from './newsletter';

export default function ButtonWithShadow(props: ButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <><Flex h="100vh" justifyContent="center" alignItems="center">
      <Button onClick={onOpen}
        {...props}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#0cc894'}
        color={'white'}
        boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
        _hover={{
          bg: '#0cc',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
        Subscribe Us
      </Button>
    </Flex><Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal></>
  );
}

function useDisclosure(): { isOpen: any; onOpen: any; onClose: any; } {
  throw new Error('Function not implemented.');
}
