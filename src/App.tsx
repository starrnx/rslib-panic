import React from 'react';
import { Button } from './Button';
import { LoadableExample } from './index';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>React Loadable Demo</h1>
      <p>This demo shows how to use react-loadable for code splitting and lazy loading components.</p>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Regular Button Component</h2>
        <Button label="Regular Button" />
      </div>
      
      <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h2>Loadable Component Example</h2>
        <p>Click the button below to dynamically load the component:</p>
        <LoadableExample />
      </div>
    </div>
  );
};

export default App; 