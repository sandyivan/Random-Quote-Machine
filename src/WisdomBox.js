import React from 'react';
import './WisdomBox.css';

// font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"


const Wrapper = ({ quote, author, generateRandomQuote }) => {
    
    let tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}` ;
    return (
        <div className="quote-container">
            <div id="quote-box">
                <blockquote id="text">
                    <FontAwesomeIcon className="quote-left" icon={faQuoteLeft} /> 
                    <span>{quote}</span>
                </blockquote>   
                <p id="author">- {author}</p>
                <a id="tweet-quote" target="_blank"class="twitter-share-button"
                href={tweetLink}>
                    <FontAwesomeIcon icon={faTwitterSquare} className="fa-3x" />
                </a>
                <button onClick={generateRandomQuote} id="new-quote" className="shadow-none btn btn-default float-end">click me </button>    
            </div>
            
        </div>
    )
}


export default Wrapper;