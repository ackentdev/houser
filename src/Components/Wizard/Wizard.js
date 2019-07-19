import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            address: "",
            city: "",
            state: "",
            zip:""
        }
    }

    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addHouse(){
        const { name, address, city, state, zip } = this.state;
        axios.post('/api/houses', {name, address, city, state, zip})
        .then( res => {
            console.log(res);
            this.location.replace('http://localhost:3000/#/')
        })
        .catch( err => {
            console.log(err);
        });
    };

    render() {
        const { name, address, city, state, zip } = this.state;
        return (
            <div>
                <h3>Wizard</h3>
                <form>
                    <div class="form-input">
                        <label for="name">Name:</label>
                        <input type="text" name="name" value={name} onChange={(e) => this.changeHandler(e)} id="name" required />
                    </div>
                    <div class="form-input">
                        <label for="address">Address:</label>
                        <input type="text" name="address" value={address} onChange={(e) => this.changeHandler(e)} id="address" required />
                    </div>
                    <div class="form-input">
                        <label for="city">City:</label>
                        <input type="text" name="city" value={city} onChange={(e) => this.changeHandler(e)} id="city" required />
                    </div>
                    <div class="form-input">
                        <label for="state">State:</label>
                        <input type="text" name="state" value={state} onChange={(e) => this.changeHandler(e)} id="state"  maxLength="2" required />
                    </div>
                    <div class="form-input">
                        <label for="zip">Zip:</label>
                        <input type="text" name="zip" value={zip} onChange={(e) => this.changeHandler(e)} id="zip" maxLength="5" required />
                    </div>
                </form>
                <Link to="/">
                    <button onClick={() => this.addHouse()}>Complete</button>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}