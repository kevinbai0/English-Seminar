import React from "react";
import {Transition} from "react-transition-group";
import CommentatorSplashPage from "./CommentatorSplashPage";
import anime from "animejs";
import EvidencePage from "./EvidencePage";
import data from "../js/data";
class CommentatorPage extends React.Component {
    constructor(props) {
        super(props);
        this.commentatorSplashRef = React.createRef();
        this.state = {
            isAnimated: false
        }
    }

    componentDidUpdate() {
        if (this.state.isAnimated) {
            console.log("Is animated");
            anime({
                targets: this.commentatorSplashRef.current,
                translateX: -window.innerWidth / 2,
                opacity: [1,0],
                duration: 4000,
                easing: "easeInOutQuad"
            })
        }
    }
    render() {
        console.log(this.state.isAnimated);
        return <div className="commentator-page">
            {this.props.navigationBar}
            <Transition in={!this.state.isAnimated} timeout={4000}>
                {(state) => {
                    return <CommentatorSplashPage 
                        state={state}
                        shouldAnimate={!this.state.isAnimated}
                        animationsFinished={this.animationsFinished.bind(this)} 
                        reference={this.commentatorSplashRef}
                    />
                }}
            </Transition>
            <Transition in={this.state.isAnimated} timeout={4000}>
                {(state) => <EvidencePage subprongs={data.Commentator} state={state}/>}
            </Transition>
        </div>
    }

    animationsFinished() {
        this.setState({
            isAnimated: true
        })
        console.log("Finished");
    }
}

export default CommentatorPage;