import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="list">
      <p>
        This is the start of a decent app!
        <br />
        <br />
        Built with<br />
        - React <br />
        - Express <br />
        - Node  <br />
        - PostgreSQL <br />
        - Material-ui <br />
        - SweetAlerts<br />
        - Moment.js<br />
    
      </p>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
