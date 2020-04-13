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
        <a href="https://imgur.com/G0guCFl"><img src="https://i.imgur.com/G0guCFl.jpg" title="source: imgur.com" /></a>
        </p>
      </header>
    </div>
        
    
    )
        }
}
export default Home