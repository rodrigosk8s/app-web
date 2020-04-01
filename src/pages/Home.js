import React from 'react'

import logo from '../images/logo.png'
import '../pages/styles/Home.css'

class Home extends React.Component{
    render(){
        return(

            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Home.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
        
    
    )
        }
}
export default Home