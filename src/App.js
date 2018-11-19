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

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentProng: null,
            firstUpdate: true,
            scrollState: "noscroll",
            showingEvidence: false
        }
        this.water = new Water();
        this.water.onScroll = this.handleScroll.bind(this);
        this.landingRefs = {
            title: React.createRef(),
            subtitle: React.createRef(),
            presentButton: React.createRef()
        }
        this.water.add({
            target: this.landingRefs.title,
            keyframes: {
                opacity: [1,0.37],
                translateY: [0, window.innerHeight / 2]
            }
        }).add({
            target: this.landingRefs.subtitle,
            keyframes: {
                opacity: [0.37, 1],
                translateY: [0, window.innerHeight * 3/4]
            }
        })
    }
    componentDidMount() {
        this.water.mount();
    }
    componentWillUnmount() {
        this.water.unmount();
    }
    componentDidUpdate() {
        if (this.state.currentProng === "Commentator" && this.state.firstUpdate) {
            window.scroll({top: window.innerHeight, behavior: "smooth"});
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
                                refs={this.landingRefs}
                            />
                            <ThesisPage 
                                onChooseProng={(prong) => this.onChooseProng(prong)} 
                                currentProng={this.state.currentProng} 
                                scrollState={this.state.scrollState} 
                                thesisTransition={this.thesisTransition.bind(this)}
                            />
                        </div>
                } />
                <Route exact path="/commentators" component={
                    () => 
                        <CommentatorPage navigationBar={this.getNavBar(3, true)} />   
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
        this.setState({
            showingEvidence: true
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