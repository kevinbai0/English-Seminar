import React from "react";
import LandingPage from "./components/LandingPage";
import ThesisPage from "./components/ThesisPage";
import CommentatorPage from "./components/CommentatorPage";

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentProng: null,
            firstUpdate: true,
            scrollState: "noscroll"
        }
    }
    componentDidMount() {
        window.scroll({top: 0});
    }
    componentDidUpdate() {
        if (this.state.currentProng === "Commentator" && this.state.firstUpdate) {
            window.scroll({top: window.innerHeight, behavior: "smooth"});
        }
    }
    render = () => {
        let currentElement = null;
        if (this.state.currentProng === "Commentator") currentElement = <CommentatorPage />
        return  <div>
            <LandingPage updateScrollState={(value) => this.updateScrollState(value)}/>
            <ThesisPage 
                onChooseProng={(prong) => this.onChooseProng(prong)} 
                currentProng={this.state.currentProng} 
                scrollState={this.state.scrollState} 
            />
            {this.state.currentProng ? currentElement : ""}
        </div>
    }
    updateScrollState = (value) => {
        if (this.state.scrollState === value) return;
        this.setState({
            scrollState: value
        })
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