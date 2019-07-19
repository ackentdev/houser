import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state={
            img:""
        }
    }

    changeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { img } = this.state;
        return (
            <div>
                <h3>Wizard</h3>
                <form>
                    <div class="form-input">
                        <label for="name">Image URL:</label>
                        <input type="text" name="img" value={img} onChange={(e) => this.changeHandler(e)} id="img" required />
                    </div>
                </form>
                <Link to="/wizard/step1">
                    <button>Previous Step</button>
                </Link>
                <Link to="/wizard/step3">
                    <button>Next Step</button>
                </Link>
                {/* <Link to="/">
                    <button onClick={() => this.addHouse()}>Complete</button>
                    <button>Cancel</button>
                </Link> */}
            </div>
        )
    }
}