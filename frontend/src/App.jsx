import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loveLetter, setLoveLetter] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [showStory, setShowStory] = useState(false);

  // Fetch short love messages from backend
  useEffect(() => {
    fetch('https://jaya-ui8r.onrender.com/api/messages')
      .then(response => response.json())
      .then(data => setMessages(data.messages))
      .catch(err => console.error(err));
  }, []);

  // Fetch the full love letter from backend
  useEffect(() => {
    fetch('https://jaya-ui8r.onrender.com/api/letter')
      .then(response => response.json())
      .then(data => setLoveLetter(data.letter))
      .catch(err => console.error(err));
  }, []);

  // Sample photo paths (ensure these files exist in frontend/public/photos/)
  const photos = [
    '/photos/photo1.jpg',
    '/photos/photo2.jpg',
    '/photos/photo3.jpg',
    '/photos/photo4.jpg',
    '/photos/photo5.jpg',
    '/photos/photo6.jpg',
    '/photos/photo7.jpg',
    '/photos/photo8.jpg',
  ];

  // Sample flower image paths (place your flower images in frontend/public/flowers/)
  const flowers = [
    '/flowers/flower1.jpg',
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome Jaya....</h1>
      </header>

      <main className="content">
        {/* Photo Gallery Section */}
        <section className="gallery">
          <h2>Photos</h2>
          <div className="photo-grid">
            {photos.map((src, index) => (
              <img key={index} src={src} alt={`Jaya ${index + 1}`} className="gallery-image" />
            ))}
          </div>
        </section>

        {/* Short Love Messages Section */}
        <section className="messages">
          <h2>Facts about Jaya</h2>
          {messages.length ? (
            <ul>
              {messages.map((msg, index) => (
                <li key={index} className="love-message">{msg}</li>
              ))}
            </ul>
          ) : (
            <p>Loading messages...</p>
          )}
        </section>

        {/* Love Letter Section with Typewriter Animation */}
        <section className="letter">
          <h2>My Love Letter</h2>
          {loveLetter ? (
            <p className="love-letter">{loveLetter}</p>
          ) : (
            <p>Loading love letter...</p>
          )}
        </section>

        {/* Love Calculator Section */}
        <section className="love-calculator">
          <h2>Love Calculator</h2>
          <div className="calculator-icon" onClick={() => setShowCalculator(true)}>
            <p>Mrs Jaya, would you like to know how much Raj loves you..? Click the icon to find out.</p>
            <button className="calc-btn">Yes</button>
          </div>
          {showCalculator && (
            <div className="calculator-result">
              <p className="red-text">
                Error:Seems like we cannot calculate the love percentage as it is infinite, you should take care of your boyfriend—he is rare.
              </p>
            </div>
          )}
        </section>

        {/* Our Story Envelope Section */}
        <section className="love-story">
          <h2>STORY...</h2>
          <div className="envelope" onClick={() => setShowStory(!showStory)}>
            <p>Click the envelope to read a quick story about jaya</p>
          </div>
          {showStory && (
            <div className="story-content">
              <p>
                So there is this friend of jaya that once told her that she would help jaya with her assignments which
                was delayed because her team partner had lost the entire files and data that they had worked on.
                So even though her friend said that she would help jaya she did not,
                so jaya was like why did you make a promise that you could not keep.
                jaya had to complete the assignments on her own and she was very upset about it.
                I don't know that girl name that made her upset but whenever i will find that girl i will make her
                complete my entire semesters assignments again and again.          
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer with Flowers Covering Entire Area */}
      <footer className="footer">
        <div className="flower-grid">
          {flowers.map((src, index) => (
            <img key={index} src={src} alt={`Flower ${index + 1}`} className="flower-image" />
          ))}
        </div>
        <p>Made with ❤️ for Jaya</p>
      </footer>
    </div>
  );
}

export default App;
