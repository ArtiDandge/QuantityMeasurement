import React, {Component} from 'react';
import {AppBar, TextField, Select, MenuItem, FormLabel} from '@material-ui/core';
import './home.css';
import Card from 'react-bootstrap/Card';
import length from '../assets/lengthNormal.png'
import temperature from '../assets/temperature.png'
import volumn from '../assets/volumn1.png'
import {withRouter} from 'react-router-dom'

class Home extends Component{
  
    handleTemperature=()=>{
        this.props.history.push('/temperature');
    }

    handleLength=()=>{
        this.props.history.push('/length');
    }

    handleVolumn=()=>{
        this.props.history.push('/volumn');
    }

    render(){
        return(
            <div className="homeContainer">              
                <AppBar id="welcomeBar">
                    <h1>Welcome to Quantity Measurement</h1>
                </AppBar>           
                <div id="chooseType">
                <label>CHOOSE TYPE</label>
                </div> 
                <div className="converterCard">
                    <Card id="length" onClick={this.handleLength}>
                    <div>
                        <img src={length}/>
                    </div>
                    <div>
                    <FormLabel>Length</FormLabel>
                    </div>
                    </Card>
                    <Card id="temperature" onClick={this.handleTemperature}>
                    <div>
                        <img src={temperature}/>
                    </div>
                    <div>
                    <FormLabel>Temperature</FormLabel>
                    </div>
                    </Card>
                    <Card id="volumn" onClick={this.handleVolumn}>
                    <div>
                        <img src={volumn}/>
                    </div>
                    <div>
                    <FormLabel>Volumn</FormLabel>
                    </div>
                    </Card>
                </div>     
            </div>  
        )
    }
}

export default withRouter(Home);
