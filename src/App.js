import React from 'react'
import Header from './component/Header'
import Profile from './component/Profile'
import TextComponent from './component/TextComponents'
import Footer from './component/Footer'
import './App.css';
import './component/Storie.css'


 
export default props => {
  return(
    
    <div className="bg">
      <div className="twinkling"></div>
      <img className="Nebula" src={require('./nebula.png')} draggable="false" alt="Bruno Francisco"/>

      <Header/>

      <Profile
        cursor="pointer"
        nome="BRUNO"
        bitcoin="1GsaVB7ypw8zkZz5KKL124GcKEi1ZfCZdD"
        text="As the old world fall behind, my spirit reaches wide..."
        filter="grayscale(0)"
      />

      <TextComponent/>
      <br/><br/>
      <Footer nome="BRUNO"/>
    </div>

    )
}



 