import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ArticleList from './pages/landing/landingpage';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <ArticleList/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
