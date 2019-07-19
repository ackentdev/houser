import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>Dashboard</h3>
                <Link to="/wizard" className='links'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}