import React from "react";
import "../stylesheets/landingStyle.scss";
import anime from "animejs";
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startingPresentation: false,
            presentationStarted: false,
            scrolled: false
        }
        this.playRef=React.createRef();
        this.subtitleRef = React.createRef();
        this.titleRef = React.createRef();
        this.ballRef = React.createRef();
    }

    componentDidUpdate() {
        anime({
            targets: this.playRef.current,
            color: () => {
                if (this.state.startingPresentation) return "rgba(255,255,255,0)";
            },
            width: () => {
                if (this.state.presentationStarted) return ["20vw", "4vw"];
            },
            height: () => {
                if (this.state.presentationStarted) return ["3vw", "7vw"];
            },
            duration: this.state.startingPresentation ? 300 : 600,
            easing: "easeInCubic"
        });
        if (this.state.presentationStarted) {
            anime({
                targets: this.ballRef.current,
                bottom: ["4vw", "8vw"],
                opacity: 1,
                loop: true,
                duration: 800,
                direction: "alternate",
                easing: "easeInCubic"
            })
        }
        
        anime({
            targets: this.subtitleRef.current,
            opacity: () => {
                if (this.state.startingPresentation || this.state.presentationStarted) {
                    return 1
                }
            },
            top: () => {
                if(this.state.startingPresentation) return ["11vw", "25vw"];
            },
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
    render() {
        let starting = this.state.startingPresentation;
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
                <div className={(started || starting) ? "start-button scroll" : "start-button"} onClick={this.startPresentation.bind(this)} ref={this.playRef}>{started ? "" : "Start Presentation"}</div>
        </div>
    }
    startPresentation() {
        if (!this.state.presentationStarted && !this.state.startingPresentation) {
            this.setState({
                startingPresentation: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        presentationStarted: true,
                        startingPresentation: false
                    })
                }, 500);
            })
        }
        else {
            // scroll down
            window.scrollTo({top: this.state.scrolled ? 0 : window.innerHeight, behavior: "smooth"});
            this.setState({
                scrolled: !this.state.scrolled
            })
        }
    }
}

export default LandingPage;