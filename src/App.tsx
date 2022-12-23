import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom"
import * as React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import CaptionCarousel from './pages/landing/CaptionCarousel';
import ArticleList from './pages/landing/landingpage';
import Home from './pages/home/home';

function App() {
  return (
    <div className='App'>
      {/* <ChakraProvider>
      <Header/>
      <CaptionCarousel/>
      <ArticleList/>
    </ChakraProvider> */}
      <Routes>
        <Route path='home' element={<Home/>}></Route>
        <Route path='/' element={
          <ChakraProvider>
            <Header/>
            <ArticleList/>
          </ChakraProvider>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
