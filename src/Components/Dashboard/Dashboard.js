import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./Dashboard.css";

import House from "../House/House"

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            houses:[{
                id: '',
                name: '',
                img: '',
                address: '',
                city: '',
                state: '',
                zip:''
            }]
        }
        this.getHouses=this.getHouses.bind(this);
        this.deleteHouse=this.deleteHouse.bind(this);
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

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`)
        .then(() => this.getHouses())
    }

    render() {
        console.log(this.state);
        const mappedHouses = this.state.houses.map(house => {
            return (
                <div key={this.state.houses.indexOf(house)}>            
                    <House house={house} deleteHouse={this.deleteHouse}/>
                </div>    
            );
        })
        return (
            <div>
                <h3>Dashboard</h3>
                <div className="mapped-houses">{mappedHouses}</div>
                <Link to="/wizard/step1" className='links'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}