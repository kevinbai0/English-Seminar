import React from "react";
import LandingPage from "./components/LandingPage";
import ThesisPage from "./components/ThesisPage";
import CommentatorPage from "./components/CommentatorPage";

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentProng: null,
            firstUpdate: true
        }
    }
    componentDidUpdate() {
        if (this.state.currentProng === "Commentator" && this.state.firstUpdate) {
            console.log("SCroll");
            window.scroll({top: window.innerHeight, behavior: "smooth"});
        }
    }
    render = () => {
        let currentElement = null;
        if (this.state.currentProng === "Commentator") currentElement = <CommentatorPage />
        return  <div>
            <LandingPage />
            <ThesisPage onChooseProng={(prong) => this.onChooseProng(prong)} currentProng={this.state.currentProng}/>
            {this.state.currentProng ? currentElement : ""}
        </div>
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