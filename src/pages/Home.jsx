import React, {Component} from 'react';
import {AppBar} from '@material-ui/core';
import './home.css';
import Card from 'react-bootstrap/Card';
class Home extends Component{
    render(){
        return(
            <div className="homeContainer">
            <AppBar id="welcomeBar">
                <h1>Welcome to Quantity Measurement </h1>
            </AppBar>
            <div className="cardContainer">
                <Card id="Length">
                    <img id="lengthImg"></img>
                    <label htmlFor="lenght" id="lengthLable">Length</label>
                </Card>               
                <Card id="Temperature">
                    <img id="temperatureImg"></img>
                    <label htmlFor="temparature" id="temperatureLable">Temperature</label>
                </Card>
                <Card id="Volumn">
                    <img id="volumnImg"></img>
                    <label htmlFor="volumn" id="volumnLable">Volumn</label>
                </Card>        
                   
            </div>   
            <div className="converterContainer">
                <Card id="convertFromContainer"></Card>    
                <Card id="convertToContainer"></Card>   
            </div>                         
            </div>
        )
    }
}

export default Home;