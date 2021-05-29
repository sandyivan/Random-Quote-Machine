import './App.css';

import WisdomBox from './WisdomBox'
import colors  from './colors'

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: 'You can do it',
      author: 'Sandeep Ivan',
      colors: colors,
      color: ''
      
    }
  }

  componentDidMount() {
    this.fetchData()
  }
  
  changeBg = () => {
    const { colors } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    document.getElementById("new-quote").style.backgroundColor  = color;
    document.getElementById("tweet-quote").style.color = color;
    document.getElementById("text").style.color = color;
    document.getElementById("author").style.color = color;

    console.log("click")
  }

  
  
  generateRandomQuote = () => {
    console.log(this.state.quote)
    let randomIndx  = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    console.log(randomIndx.text, randomIndx.author)
    this.setState({
      quote: randomIndx.text,
      author: randomIndx.author
    })
    this.changeBg()
  }

  fetchData = () => {
    
    fetch('https://type.fit/api/quotes')
     .then(response => response.json())
     .then(results => this.setState({ quotes: results }))
  }
 //.then(results => this.setState({ quote: results[0].text, author: results[0].author }))

  render() {
    
    
    return (
      <div className="App">
        <WisdomBox   generateRandomQuote={this.generateRandomQuote} quote={this.state.quote} author={this.state.author}/>
       
      </div>
    );
  }
  
}

export default App;
