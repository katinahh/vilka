import React from 'react';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainMenu } from './components/mainMenu/mainMenu';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <MainMenu></MainMenu>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
