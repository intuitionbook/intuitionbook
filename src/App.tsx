import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import CaptionCarousel from './pages/landing/CaptionCarousel';
import ArticleList from './pages/landing/landingpage';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <CaptionCarousel/>
      <ArticleList/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
