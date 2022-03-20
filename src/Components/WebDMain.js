import React from 'react'
import NewItemBar from './NewItemBar'
import './WeDMain.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'

import HtmlList from './WebDevList/HtmlList'

export default function WebDMain() {
  return (
    <div className='webdMain'>


      <NewItemBar/>
      <div className='container-items-webdev'>
        <Link to='/htmllearn' className='items-webdev' style={{'background': 'rgba(241, 171, 234, 0.5)'}}>HTML</Link>
        <Link to='/csslearn' className='items-webdev' style={{'background': 'rgba(114, 134, 243, 0.5)'}}>CSS</Link>
        <Link to='/jslearn' className='items-webdev' style={{'background': 'rgba(241, 171, 234, 0.5)'}}>JavaScript</Link>
        <Link to='/angularlearn' className='items-webdev' style={{'background': 'rgba(114, 134, 243, 0.5)'}}>Angular</Link>
        <Link to='/reactlearn' className='items-webdev' style={{'background': 'rgba(241, 171, 234, 0.5)'}}>React</Link>
        <Link to='/canvaslearn' className='items-webdev' style={{'background': 'rgba(114, 134, 243, 0.5)'}}>Canvas API</Link>
        <Link to='/vuelearn' className='items-webdev' style={{'background': 'rgba(241, 171, 234, 0.5)'}}>Vue JS</Link>
      </div>
    </div>
  )
}
