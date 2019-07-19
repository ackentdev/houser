import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state={
            mortgage:"",
            rent: ""
        }
    }

    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addHouse(){
        const { mortgage, rent } = this.state;
        axios.post('/api/houses', {mortgage, rent})
        .then( res => {
            console.log(res);
            this.location.replace('http://localhost:3000/#/')
        })
        .catch( err => {
            console.log(err);
        });
    };

    render() {
        const { mortgage, rent } = this.state;
        return (
            <div>
                <h3>Wizard</h3>
                <form>
                    <div class="form-input">
                        <label for="mortgage">Mortgage:</label>
                        <input type="text" name="mortgage" value={mortgage} onChange={(e) => this.changeHandler(e)} id="mortgage" required />
                    </div>
                    <div class="form-input">
                        <label for="rent">Rent:</label>
                        <input type="text" name="rent" value={rent} onChange={(e) => this.changeHandler(e)} id="rent" required />
                    </div>
                </form>
                <Link to="/wizard/step2">
                    <button>Previous Step</button>
                </Link>
                <Link to="/">
                    <button onClick={() => this.addHouse()}>Complete</button>
                </Link>
            </div>
        )
    }
}