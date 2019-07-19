import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./Dashboard.css";

import House from "../House/House"

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            houses:[]
        }
    }

    componentDidMount(){
        this.getHouses();
    }
    getHouses(){
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        const mappedHouses = this.state.houses.map(house => {
            return (
                <div key={this.state.houses.indexOf(house)}>            
                    <House house={house} />
                </div>    
            );
        })
        return (
            <div>
                <h3>Dashboard</h3>
                <div className="mapped-houses">{mappedHouses}</div>
                <Link to="/wizard" className='links'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}