import React from 'react'
import logo from '../Image/logo.png'
import './SideNavbar.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    <div className='firstbody'>
        <div className='container-imglogo'>
            <img src={logo} alt=""  className='imglogo'/>
        </div>
        <div className='optionsNavbar'>
            <Link to='/' className='items'>
            <i class="fa-solid fa-house"></i> Home
            </Link>
            <Link to='/' className='items'>
            <i class="fa-solid fa-clapperboard"></i>  Playlist
            </Link>
            <Link to='/' className='items'>
            <i class="fa-solid fa-file-contract"></i>  Docs
            </Link>
            <Link to='/' className='items'>
            <i class="fa-solid fa-images"></i>  Memes
            </Link>
            <Link to='/' className='items'>
            <i class="fa-solid fa-plus"></i>  UploadTopic
            </Link>
        </div>
    </div>
  )
}
