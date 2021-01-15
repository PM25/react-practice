import react, { Component } from "react";
import "./about.css";
import Profile from "./profile";
import IntroSection from "./intro";
import ExperienceSection from "./experiences.js";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about">
                <Profile></Profile>
                <IntroSection></IntroSection>
                <ExperienceSection></ExperienceSection>
            </div>
        );
    }
}