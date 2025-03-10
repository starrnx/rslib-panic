import React, { useState, Suspense } from 'react';

const Loading = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <p>Loading component...</p>
    <div style={{ 
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '3px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '50%',
      borderTopColor: '#3498db',
      animation: 'spin 1s ease-in-out infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// const LazyComponent = React.lazy(() => import('./LazyComponent'));

const LoadableExample: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>React Lazy Example</h1>
      
      <button 
        onClick={() => setShowComponent(!showComponent)}
        style={{
          padding: '10px 15px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer1adadasdas',
          marginBottom: '20px'
        }}
      >
        {showComponent ? 'Hide' : 'Load'} Component
      </button>
      
      {showComponent && (
        <Suspense fallback={<Loading />}>
          {/* <LazyComponent message="This was dynamically imported with React.lazy!" /> */}
        </Suspense>
      )}
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
        <p>
          <strong>How it works:</strong> When you click the button, React.lazy will dynamically 
          import the LazyComponent. During loading, you'll see a loading indicator inside the Suspense 
          component. Once loaded, the component will be displayed.
        </p>
      </div>
    </div>
  );
};

export default LoadableExample;