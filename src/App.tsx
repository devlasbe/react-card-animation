import React from 'react';
import { ScrollAnimation } from './lib';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  height: '100vh',
  fontSize: '50px',
};

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '200vh' }}>
      <div style={style}>
        <ScrollAnimation startingPoint="left" amount={'xl'}>
          <div onClick={() => console.log('hi')}>abc</div>
        </ScrollAnimation>
        <ScrollAnimation startingPoint="right" amount={'xl'} duration={0.5} repeat={true} delay={1}>
          <div>abc</div>
        </ScrollAnimation>
      </div>
      <div style={style}>
        <ScrollAnimation startingPoint="top" amount={'md'} repeat={true}>
          <div>abc</div>
        </ScrollAnimation>
        <ScrollAnimation startingPoint="bottom" amount={'md'}>
          <div>abc</div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default App;
