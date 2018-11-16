import React from "react";
import "../stylesheets/thesisStyle.scss";
import "../stylesheets/commentatorSplashPage.scss";
import anime from "animejs";
import { Transition } from "react-transition-group";

import CommentatorSplashPage from "./CommentatorSplashPage";

class ThesisPage extends React.Component {
    constructor(props) {
        super(props);
        this.captionRef = React.createRef();
        this.consulterProngRef = React.createRef();
        this.commentatorProngRef = React.createRef();
        this.mediatorProngRef = React.createRef();
        this.prongsContainerRef = React.createRef();
        this.commentatorSplashRef = React.createRef();
        this.state = {
            shouldSwitchPage: false
        }
    }
    async componentDidUpdate() {
        let prongTarget;
        let sideTargets = [];
        if (this.props.currentProng === "Commentator") {
            this.commentatorProngRef.current.style.zIndex=100;
            this.mediatorProngRef.current.style.zIndex=99;
            this.consulterProngRef.current.style.zIndex=98;
            prongTarget = this.commentatorProngRef.current;
            sideTargets = [this.consulterProngRef.current, this.mediatorProngRef.current];
        }

        if (this.state.shouldSwitchPage) {
            let timeline = anime.timeline();
            timeline.add({
                targets: this.commentatorSplashRef.current,
                translateX: -window.innerWidth,
                duration: 5000,
                easing: "easeInQuad",
                delay: 100
            }).add({
                targets: this.commentatorSplashRef.current,
                opacity: [1,0],
                duration: 2000,
                easing: "easeInQuad",
                offset: "-=2000",
            })
            anime({
                targets: prongTarget,
                opacity: [1,0],
                duration: 0,
            })

            timeline.finished.then(this.props.thesisTransition);
            
            return;
        }
        console.log("current prong");
        if (this.props.currentProng) {
            // get deltaX for left to middle
            let dXLeft = this.mediatorProngRef.current.offsetLeft - this.consulterProngRef.current.offsetLeft;
            let dXRight = this.mediatorProngRef.current.offsetLeft - this.commentatorProngRef.current.offsetLeft;
            
            let timeline = anime.timeline();
            timeline.add({
                targets: this.captionRef.current,
                translateY: -this.captionRef.current.offsetTop,
                duration: 1000,
                offset: 1000,
                easing: "easeInQuad"
            }).add({
                targets: this.consulterProngRef.current,
                left: dXLeft,
                duration: 1000,
                offset: 1500,
                easing: "easeOutQuad"
            }).add({
                targets: this.commentatorProngRef.current,
                translateX: dXRight,
                duration: 1000,
                offset: 1500,
                easing: "easeOutQuad",
                complete: () => {
                    this.consulterProngRef.current.className = "prong remove-box-shadow";
                    this.commentatorProngRef.current.className = "prong remove-box-shadow";
                    this.mediatorProngRef.current.className = "prong remove-box-shadow";
                }
            }).add({
                targets: prongTarget,
                color: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return "#FD6B6B";
                    }
                },
                duration: 1000,
                offset: 2000
            }).add({
                targets: prongTarget,
                right: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return ["5vw", "35.5vw"];
                    }
                },
                translateX: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return  0;
                    }
                },
                top: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return ["10vw", "-19.4vw"];
                    }
                },
                backgroundColor: "rgba(255,255,255,0)",
                fontSize: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return ["2.5vw", "6.38vw"];
                    }
                },
                duration: 1000,
                offset: 3000,
                easing: "easeInOutQuad"
            }).add({
                targets: sideTargets,
                opacity: 0,
                duration: 1000,
                offset: 2000,
                complete: () => {
                    // hide
                    for (let sideTarget of sideTargets) {
                        sideTarget.className = "prong no-box-shadow hidden";
                    }
                }
            })
        }
        else if (this.props.scrollState === "scrolling") {
            let commentatorRightOffset = window.innerWidth - this.commentatorProngRef.current.offsetLeft + 20;
            let consulterLeftOffset = this.consulterProngRef.current.offsetLeft + this.consulterProngRef.current.offsetWidth + 20;
            anime({
                targets: this.captionRef.current,
                opacity: 0,
                duration: 0
            })
            anime({
                targets: this.commentatorProngRef.current,
                translateX: [0, commentatorRightOffset],
                translateY: [0, -200],
                duration: 0,
            })
            anime({
                targets: this.mediatorProngRef.current,
                opacity: 0,
                duration: 0,
            })
            anime({
                targets: this.consulterProngRef.current,
                translateX: [0, -consulterLeftOffset],
                translateY: [0, 200],
                duration: 0
            })
        }
        else if (this.props.scrollState === "scrolled") {
            let result = await this.animateCaptionText();
            anime({
                targets: this.commentatorProngRef.current,
                translateX: 0,
                translateY: 0,
                duration: 1000,
            })
            anime({
                targets: this.mediatorProngRef.current,
                opacity: 1,
                duration: 1000,
            })
            anime({
                targets: this.consulterProngRef.current,
                translateX: 0,
                translateY: 0,
                duration: 1000
            })
        }
        
    }
    render = () => {
        return <div className="thesis-component" style={{
            height: this.props.currentProng ? "100vh" : "auto"
        }}>
            <div className="caption" ref={this.captionRef}><span className="emphasis">Both</span><span> characters provide the same function in </span><span className="emphasis">both</span><span> plays.</span></div>
            <div className="prongs-container" ref={this.prongsContainerRef}>
                <div className="prong" ref={this.consulterProngRef} onClick={() => this.prongChosen("Consulter")}>The <span className="emphasis">Consulter</span></div>
                <div className="prong" ref={this.mediatorProngRef} onClick={() => this.prongChosen("Mediator")}>The <span className="emphasis">Mediator</span></div>
                <div className="prong" ref={this.commentatorProngRef} onClick={() => this.prongChosen("Commentator")}>The <span className="emphasis">Commentator</span></div>
            </div>
            <Transition in={this.props.currentProng === "Commentator"} timeout={4000}>
                {(state) => {
                    return <CommentatorSplashPage 
                        state={state} 
                        animationsFinished={this.animationsFinished.bind(this)} 
                        reference={this.commentatorSplashRef}
                    />
                }}
            </Transition>

        </div>
    }

    async animateCaptionText() {
        let caption = this.captionRef.current;
        caption.style.opacity = 1;
        let elements = caption.getElementsByTagName("span");
        let timeCounter = 0;
        let allPromises = [];
        for (let e = 0; e < elements.length; e++) {
            let elementText = elements[e].innerHTML;
            elements[e].innerHTML = "";
            for (let i = 0; i < elementText.length ;i++) {
                let localCounter = timeCounter++;
                let promise = new Promise((res, rej) => setTimeout(() => {
                    elements[e].innerHTML += elementText[i];
                    res("Good");
                }, localCounter * 100));
                allPromises.push(promise);
            }
        }
        await Promise.all(allPromises);
        return true;
    }

    animationsFinished() {
        this.setState({
            shouldSwitchPage: true
        })
    }

    prongChosen(prong) {
        this.props.onChooseProng(prong);
    }
}

export default ThesisPage;