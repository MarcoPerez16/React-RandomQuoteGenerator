import React from 'react'
import './container.scss'
import {FaQuoteLeft} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {SiTumblr} from 'react-icons/si'

const Container = () => {
  return (
    <div id="quote-box" className='main__container'>
        <div className="div__quote">
            <FaQuoteLeft className='icon__quote'/>
            <span id='text' className='quote'></span>
        </div>
        <div className="div__author">- <span id='author' className="author"></span></div>
        <div className="div__buttons">
          <a target="_blank" title='Post on twitter' className='button' id="tweet-quote"><FaTwitter className='icon__social'/></a>
          <a target="_blank" title='Post on Tumblr' className='button' id="tumblr-quote"><SiTumblr className='icon__social'/></a>
          <button className='button' id="new-quote">New Quote</button>
        </div>
    </div>
  )
}

export default Container