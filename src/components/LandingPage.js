import React from "react";
import anime from "animejs";
import ScrollButton from "./ScrollButton";
import { Transition } from "react-transition-group";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presentationStarted: false,
        }
    }
    componentDidMount() {
        if(this.props.beganScrolling) {
            this.setState({
                presentationStarted: true
            })
        } 
    }

    render() {
        let started = this.state.presentationStarted;
        return <div className="landing-page">
            { this.props.navigationBar }
            <div className="title" ref={this.props.refs.title}>The Chorus and the Fool</div> 
            <div className="sub-title" ref={this.props.refs.subtitle}>In Oedipus the King and King Lear</div>
            
            <Transition in={!started} timeout={1000}>
                {(state) =>  <div className={"start-button " + state} onClick={this.startPresentation.bind(this)} ref={this.props.refs.presentButton}>Start Presentation</div>}
            </Transition>
            <Transition in={started} timeout={1000}>
                {(state) => <ScrollButton state={state} onClick={() => this.leaveHomeScreen()}/>}
            </Transition>
        </div>
    }

    startPresentation() {
        window.scrollTo({top: window.innerHeight * 0.6, behavior: "smooth"});
        this.setState({
            presentationStarted: true
        })
    }
    leaveHomeScreen() {
        // scroll down
        window.scrollTo({top: window.innerHeight * 1.6, behavior: "smooth"});
        this.props.updateScrollState("scrolling");
        setTimeout(() => {
            this.props.updateScrollState("scrolled");
        }, 500);
    }   
}

export default LandingPage;