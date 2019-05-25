import React, { Component } from 'react';
import twitter from '../twitter.png';
import quoteMark from '../quote.png';
import './quote.css';
import { quoteList } from './quoteList';

class Quote extends Component {
  constructor(props){
    super(props)
    this.state = {
      quote: '',
      source: ''
    }
  }

  componentDidMount = () => {
    this.handleNewClick();
  }

  handleNewClick = () => {
    const randomiser = Math.floor(Math.random() * (100)) + 1;
    this.setState({
      quote: quoteList[randomiser].quote,
      source: quoteList[randomiser].author
    })
  }

  render() {
  
    return (
      <div id='quote-box' className="quote-container">
        <div className="quote-wrapper">
          <img src={quoteMark} alt='quotation-mark' id='quoteMark'/>
          <div id='text'>
            <i>{this.state.quote}</i>
          </div>
          <div id='author'>
            - {this.state.source}
          </div>
        </div>
        <a href='twitter.com/intent/tweet'><img src={twitter}alt='twitter' id='tweet-quote' /></a>
        <button id='new-quote' onClick={this.handleNewClick}>New Quote</button>
      </div>
    );
  }
}

export default Quote;
