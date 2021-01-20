import React, {Component} from 'react';
import {AppBar} from '@material-ui/core';
import './home.css';
import Card from 'react-bootstrap/Card';
import length from '../assets/length.png'
import temperature from '../assets/temperature.png'
import volumn from '../assets/volumn.png'

class Home extends Component{
    render(){
        return(
                <div className="homeContainer">              
                    <AppBar id="welcomeBar">
                        <h1>Welcome to Quantity Measurement </h1>
                    </AppBar>           
                    <div id="chooseType">
                        <lable>CHOOSE TYPE</lable>
                    </div> 
                    <div className="converterCard">
                        <Card id="length">
                        <div>
                            <img src={length}/>
                        </div>
                        <div>
                            Length
                        </div>
                        </Card>
                        <Card id="temperature">
                        <div>
                            <img src={temperature}/>
                        </div>
                        <div>
                            Temperature
                        </div>
                        </Card>
                        <Card id="volumn">
                        <div>
                            <img src={volumn}/>
                        </div>
                        <div>
                            Volumn
                        </div>
                        </Card>
                    </div>
                    <div className="calculationContainer">
                    <Card>                        
                        <div id="fromLable">
                            From
                        </div>
                        <div id="From">
                            <div id="inputFrom">
                                <input type="text"></input>
                            </div>
                        </div>
                        </Card>
                        <Card>
                        <div id="toLable">
                           To
                        </div>
                        <div id="To">
                            <div id="inputTo">
                                <input type="text"></input>
                            </div>
                            <div id="inputToConverter">
                                
                            </div>    
                        </div>
                        </Card>
                    </div>                     
                </div>  
        )
    }
}

export default Home;