import React from "react";
import LandingPage from "./components/LandingPage";
import ThesisPage from "./components/ThesisPage";
import CommentatorPage from "./components/CommentatorPage";
import ScrollWrapper from "./components/ScrollWrapper";
import EvidencePage from "./components/EvidencePage";
import {Transition} from "react-transition-group";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Water from "./water";
import MediatorPage from "./components/MediatorPage";
import ConsulterPage from "./components/ConsulterPage";

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentProng: null,
            firstUpdate: true,
            scrollState: "noscroll",
            showingEvidence: false
        }
    }
    render = () => {
        let currentElement = null;
        return  <Router>
            <div>
                <Route exact path="/" component={
                    () => 
                        <div>
                            <LandingPage
                                navigationBar={this.getNavBar(0, true)}
                                updateScrollState={(value) => this.updateScrollState(value)}
                                beganScrolling={this.state.scrollState !== "noscroll"}
                            />
                        </div>
                } />
                <Route exact path="/commentators" component={
                    () => 
                        <CommentatorPage navigationBar={this.getNavBar(3, false)} />   
                }/>
                <Route exact path="/mediators" component={
                    () => 
                        <MediatorPage navigationBar={this.getNavBar(2, false)} />   
                }/>
                <Route exact path="/consulters" component={
                    () => 
                        <ConsulterPage navigationBar={this.getNavBar(2, false)} />   
                }/>
            </div>
            {/*
                <ScrollWrapper handleScroll={this.handleScroll.bind(this)}>
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

                <Transition in={this.state.showingEvidence} timeout={4000}>
                    {   (state) =>  <EvidencePage state={state} subprongs={data.Commentator}/>
                    }
                </Transition>
                </ScrollWrapper>*/}

        </Router>
        
    }

    navItems = [
		{name: "Home", link: "/"}, 
		{name: "The Consulters", link: "/consulters"}, 
		{name: "The Mediators", link: "/mediators"}, 
		{name: "The Commentators", link: "/commentators"},
	]
	getNavBar = (i, light) => {
		return <NavigationBar
			navItems={this.navItems}
			selected={i}
			lightBar={light}
		/>
	}
}

export default App;