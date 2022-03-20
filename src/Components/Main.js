import React from 'react'
import './Main.css'
import img1 from '../Image/img1.jpg'

import WebDMain from './WebDMain'
import AppDevMain from './AppDevMain'
import BlockChainMain from './BlockChainMain'
import Accedmia from './Accedmia'
import Web3Main from './Web3Main'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className='mainPage'>
      <div className='updateContainer'>
        <div className='updatevalue'>
          this is update section.... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, mollitia!lorem20
        </div>
      </div>
      <div className='trending-container'>
        <div className='trendVideos'>
          
        <iframe width="560" height="315" src="https://www.youtube.com/embed/k_UvCSj8A4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='imgtrending' ></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/k_UvCSj8A4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='imgtrending' ></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/k_UvCSj8A4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='imgtrending' ></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/k_UvCSj8A4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='imgtrending' ></iframe>
          
        </div>

      </div>
      <div className='backLine'>
        What would you like to learn?
      </div>
      <div className='maintopics'>
          <Link to='/webdev' className='item1'>
            Web development
          </Link>
          <Link to='/appdev' className='item2'>
            App development
          </Link>
          <Link to='/blochaindev' className='item1'>
            block chain
          </Link>
          <Link to='/web3dev' className='item2'>
            Web 3.0
          </Link>
          <Link to='/academic' className='item1'>
            College academic
          </Link>                                       
      </div>

    </div>
  )
}
