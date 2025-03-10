import React from 'react';

interface LazyComponentProps {
  message?: string;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ message = 'Hello from Lazy Component!' }) => {
  return (
    <div style={{ 
      padding: '20px', 
      margin: '10px', 
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>Lazy Loaded Component</h2>
      <p>{message}</p>
      <p>This component was loaded dynamically using react-loadable!</p>
    </div>
  );
};

export default LazyComponent; 