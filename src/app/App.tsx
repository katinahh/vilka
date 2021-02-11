import React from 'react';
import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainMenu } from './components/mainMenu/mainMenu';

const App: React.FC = () => {
  const displayWidth = document.body.clientWidth;

  return (
    <div className="App">
      <Header></Header>
      {
        displayWidth < 1440
          ?
          <div className="content">
            <div className="content-cart">

            </div>
            <div className="slider">

            </div>
            <MainMenu></MainMenu>
          </div>
          :
          <div className="body">
            <MainMenu></MainMenu>
            <div className="content">
              <div className="content-cart">

              </div>
              <div className="slider">

              </div>

            </div>
          </div>
      }

      <Footer></Footer>
    </div>
  );
}

export default App;
