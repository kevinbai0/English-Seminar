import React from "react";
import LandingPage from "./components/LandingPage";
import ThesisPage from "./components/ThesisPage";
import CommentatorPage from "./components/CommentatorPage";
import ScrollWrapper from "./components/ScrollWrapper";

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentProng: null,
            firstUpdate: true,
            scrollState: "noscroll"
        }
    }
    componentDidUpdate() {
        if (this.state.currentProng === "Commentator" && this.state.firstUpdate) {
            window.scroll({top: window.innerHeight, behavior: "smooth"});
        }
    }
    render = () => {
        let currentElement = null;
        if (this.state.currentProng === "Commentator") currentElement = <CommentatorPage />
        return  <ScrollWrapper handleScroll={this.handleScroll.bind(this)}>
            <LandingPage
                updateScrollState={(value) => this.updateScrollState(value)}
                beganScrolling={this.state.scrollState !== "noscroll"}
            />
            <ThesisPage 
                onChooseProng={(prong) => this.onChooseProng(prong)} 
                currentProng={this.state.currentProng} 
                scrollState={this.state.scrollState} 
                thesisTransition={this.thesisTransition.bind(this)}
            />
            {this.state.currentProng ? currentElement : ""}
        </ScrollWrapper>
    }
    prevScrollPos = 0;
    handleScroll(event) {
        // scrolling down
        if (this.prevScrollPos < window.pageYOffset) {
            if (this.state.scrollState === "noscroll") {
                this.setState({
                    scrollState: "scrolling"
                })
            }
            else if (this.state.scrollState === "scrolling" && window.pageYOffset >= window.innerHeight * 2 / 3) {
                this.setState({
                    scrollState: "scrolled"
                })
            }
        }
        // scrolling up
        else {
            if (this.state.scrollState === "scrolled" && window.pageYOffset <= 10) {
                this.setState({
                    scrollState: "scrolling"
                })
            }
            else if (this.state.scrollState === "scrolling" && window.pageYOffset <= 5) {
                this.setState({
                    scrollState: "noscroll"
                })
            }
        }
        

        this.prevScrollPos = window.pageYOffset;
    }
    updateScrollState = (value) => {
        if (this.state.scrollState === value) return;
        this.setState({
            scrollState: value
        })
    }

    thesisTransition() {
        console.log("Transition time");
    }
    
    onChooseProng = (prong) => {
        this.setState({
            currentProng: prong
        }, () => {
            this.setState({
                firstUpdate: false
            })
        })
    }
}

export default App;