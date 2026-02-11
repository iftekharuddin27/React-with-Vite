import React, { useState } from 'react';

function ShowHideApp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <button onClick={toggleVisibility} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      
      {isVisible && <h2 style={{ marginTop: '20px' }}>Hello, React Learner!</h2>}
    </div>
  );
}

export default ShowHideApp;