import React from "react";
import "../stylesheets/landingStyle.scss";
import anime from "animejs";
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presentationStarted: false,
        }
        this.playRef=React.createRef();
        this.subtitleRef = React.createRef();
        this.titleRef = React.createRef();
        this.ballRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.state.presentationStarted || this.props.beganScrolling) {
            anime({
                targets: this.playRef.current,
                color: "rgba(255,255,255,0)",
                width: ["20vw", "4vw"],
                height: ["3vw", "7vw"],
                duration: 300,
                easing: "easeInCubic"
            })
            anime({
                targets: this.ballRef.current,
                bottom: ["4vw", "8vw"],
                opacity: 1,
                loop: true,
                duration: 800,
                direction: "alternate",
                easing: "easeInCubic"
            })
            anime({
                targets: this.subtitleRef.current,
                opacity: 1,
                translateY: window.innerHeight / 4,
                duration: 1000,
                easing: "easeOutQuad"
            })
            anime({
                targets: this.titleRef.current,
                opacity: 0.37,
                duration: 1000,
                easing: "easeOutQuad"
            })
        }
    }
    render() {
        let started = this.state.presentationStarted;
        return <div className="landing-page">
                <div className="title" ref={this.titleRef}>The Chorus and the Fool</div> 
                <div className="sub-title" ref={this.subtitleRef}>In Oedipus the King and King Lear</div>
                <div style={{
                    opacity: 0,
                    width: "1vw",
                    height: "1vw",
                    borderRadius: "0.5vw",
                    backgroundColor: "white",
                    position: "absolute",
                    left: "50%",
                    bottom: "8vw",
                    transform: "translateX(-50%)"
                }} ref={this.ballRef}></div>
                <div className={(started) ? "start-button scroll" : "start-button"} onClick={this.startPresentation.bind(this)} ref={this.playRef}>{started ? "" : "Start Presentation"}</div>
        </div>
    }
    startPresentation() {
        if (!this.state.presentationStarted) {
            this.setState({
                presentationStarted: true
            })
        }
        else {
            // scroll down
            window.scrollTo({top: this.state.scrolled ? 0 : window.innerHeight, behavior: "smooth"});
            this.props.updateScrollState("scrolling");
            setTimeout(() => {
                this.props.updateScrollState("scrolled");
            }, 500);
        }
    }
}

export default LandingPage;