import React from 'react';
import './style.css'

export default class ScrollToTop extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button title='Back to top' className='scroll-button' 
                 onClick={ () => { this.scrollToTop(); }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)">
  <path d="M5 12.5059H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 19.5938L19 12.5114L12 5.42904" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>;
     }
  }