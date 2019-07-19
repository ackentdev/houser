import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Wizard extends Component {
    render() {
        return (
            <div>
                <h3>Wizard</h3>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}