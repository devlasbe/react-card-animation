import React from 'react';
import { CardAnimation } from './lib';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '90vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '32px' }}>
        <CardAnimation angle={30}>
          <div style={{ width: '300px', height: '200px', borderRadius: '8px', background: '#df3f00' }}></div>
        </CardAnimation>

        <CardAnimation>
          <div style={{ width: '300px', height: '300px', borderRadius: '8px', background: '#0054b5' }}></div>
        </CardAnimation>
      </div>
    </div>
  );
}

export default App;
