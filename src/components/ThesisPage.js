import React from "react";
import "../stylesheets/thesisStyle.scss";
import anime from "animejs";
import { Transition } from "react-transition-group";

class ThesisPage extends React.Component {
    constructor(props) {
        super(props);
        this.captionRef = React.createRef();
        this.consulterProngRef = React.createRef();
        this.commentatorProngRef = React.createRef();
        this.mediatorProngRef = React.createRef();
        this.prongsContainerRef = React.createRef();
    }
    componentDidUpdate() {
        if (this.props.currentProng) {
            // get deltaX for left to middle
            let dXLeft = this.mediatorProngRef.current.offsetLeft - this.consulterProngRef.current.offsetLeft;
            let dXRight = this.mediatorProngRef.current.offsetLeft - this.commentatorProngRef.current.offsetLeft;
            let prongTarget;
            let sideTargets = [];
            if (this.props.currentProng === "Commentator") {
                this.commentatorProngRef.current.style.zIndex=100;
                this.mediatorProngRef.current.style.zIndex=99;
                this.consulterProngRef.current.style.zIndex=98;
                prongTarget = this.commentatorProngRef.current;
                sideTargets = [this.consulterProngRef.current, this.mediatorProngRef.current];
            }
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
    }
    render = () => {
        return <div className="thesis-component" style={{
            height: this.props.currentProng ? "100vh" : "auto"
        }}>
            <div className="caption" ref={this.captionRef}><span className="emphasis">Both</span> characters provide the same function in <span className="emphasis">both</span> plays.</div>
            <div className="prongs-container" ref={this.prongsContainerRef}>
                <div className="prong" ref={this.consulterProngRef} onClick={() => this.prongChosen("Consulter")}>The <span className="emphasis">Consulter</span></div>
                <div className="prong" ref={this.mediatorProngRef} onClick={() => this.prongChosen("Mediator")}>The <span className="emphasis">Mediator</span></div>
                <div className="prong" ref={this.commentatorProngRef} onClick={() => this.prongChosen("Commentator")}>The <span className="emphasis">Commentator</span></div>
            </div>
            <Transition in={this.props.currentProng === "Commentator"} timeout={4000}>
                {(state) => {
                    console.log(state);
                    return <CommentatorSplashPage state={state}/>
                }}
            </Transition>

        </div>
    }
    prongChosen(prong) {
        this.props.onChooseProng(prong);
    }
}

const CommentatorSplashPage = ({state}) => {
    let classNameExtension = ""
    if (state === "exited") {
        classNameExtension = " hidden"
    }
    else if (state === "entering") {
        classNameExtension = " entering"
    }
    else if (state === "entered") {
        classNameExtension=" entering entered";
    }
    return <div className="commentator-splash-page">
        {console.log(state)}
        <div className={"comic-relief" + classNameExtension}>Comic Relief</div>
        <div className={"humor" + classNameExtension}>Humor</div>
        <div className={"always-something-say" + classNameExtension}>Always has something to say</div>
        <div className={"voices-opinion" + classNameExtension}>Voices opinion no matter what</div>
        <div className={"peanut-gallery" + classNameExtension}>The Peanut Gallery</div>
        <div className={"usually-contradicts" + classNameExtension}>Usually contradicts the authority</div>
        <div className={"never-ending-commentary" + classNameExtension}>Never ending commentary</div>
        <div className={"no-authority" + classNameExtension}>No Authority</div>
        <div className={"often-unheard" + classNameExtension}>Often go unheard</div>
    </div>
}

export default ThesisPage;