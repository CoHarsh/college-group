import react from 'react'
import Main from './Components/Main';
import SideNavbar from './Components/SideNavbar';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3Main from './Components/Web3Main';
import BlockChainMain from './Components/BlockChainMain';
import AppDevMain from './Components/AppDevMain';
import Accedmia from './Components/Accedmia';
import WebDMain from './Components/WebDMain';

// webdev list import

import HtmlList from './Components/WebDevList/HtmlList';
import CssList from './Components/WebDevList/CssList'
import JsList from './Components/WebDevList/JsList'
import ReactList from './Components/WebDevList/ReactList'
import AngularList from './Components/WebDevList/AngularList'
import VueList from './Components/WebDevList/VueList'
import CanvasList from './Components/WebDevList/CanvasList'


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <SideNavbar className="firstbody"/>
      <Routes>
          {/* <Route path='/' element={<SideNavbar className="firstbody"/>} /> */}
          <Route exact path="/" element={<Main />}/>
          <Route path="/web3dev" element={<Web3Main />} />
          <Route path="/webdev" element={<WebDMain />} />
          <Route path="/blochaindev" element={<BlockChainMain />} />
          <Route path="/appdev" element={<AppDevMain />} />
          <Route path="/academic" element={<Accedmia />} />
          <Route path='/htmllearn' element={ <HtmlList/> } />
          <Route path='/csslearn' element={ <CssList/> } />
          <Route path='/jslearn' element={ <JsList/> } />
          <Route path='/angularlearn' element={ <AngularList/> } />
          <Route path='/reactlearn' element={ <ReactList/> } />
          <Route path='/vuelearn' element={ <VueList/> } />
          <Route path='/canvaslearn' element={ <CanvasList/> } />
          
      </Routes>
      </div>
    </BrowserRouter>
  
      
  );
}

export default App;
