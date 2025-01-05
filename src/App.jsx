import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  return (
    <div className="splash-page">

      {/* Overlay Content */}
      <div className="overlay">
        <header className="header">
          <h1>Mistress Eva Cruz</h1>
          <h3>To book:
            <a href="mailto:MistressEvaCruz@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'underline' }}>
              MistressEvaCruz@gmail.com
            </a>
          </h3>
        </header>
        {/* Background Image */}
        <div className="background-image">
          <img
            src="../public/images/Main.JPEG"
            alt="Splash Background"
          />
        </div>

        {/* Social Media Links */}
        <div className="social-links" style={{ color: 'black'}}>
          <h2>Stay Connected</h2>
       
            <p>
              <a style={{ color: 'black' }}href="https://twitter.com/MistressEvaCruz" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </p>
            <p>
              <a style={{ color: 'black' }}href="https://instagram.com/Ms_Eva_Cruz" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
        
        </div>

      </div>
    </div>
  );
}

export default App;
