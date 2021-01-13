import react, { Component } from "react";
import "./about.css";
import Profile from "./profile";
import Intro from "./intro";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about">
                <Profile></Profile>
                <Intro></Intro>
            </div>
        );
    }
}
