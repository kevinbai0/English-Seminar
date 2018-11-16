import React from "react";
import anime from "animejs";
class CommentatorSplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.comicReliefRef = React.createRef();
        this.humorRef = React.createRef();
        this.alwaysSayRef = React.createRef();
        this.voicesOpinionRef = React.createRef();
        this.peanutRef = React.createRef();
        this.contradictsRef = React.createRef();
        this.commentaryRef = React.createRef();
        this.noAuthorityRef = React.createRef();
        this.unheardRef = React.createRef();
        this.titleRef = React.createRef();
        this.state = {
            animated: false
        }
    }

    componentDidUpdate() {
        if (this.props.state === "entered" && !this.state.animated) {
            let timeline = anime.timeline();
            anime({
                targets: this.titleRef.current,
                opacity: [0,1],
                duration: 100,
                delay: 1000
            })
            timeline.add({
                targets: this.alwaysSayRef.current,
                duration: 4500,
                scale: [0.1, 1],
                translateX: [-window.innerWidth / 2, 0],
                opacity: [0, 1],
                easing: "easeInOutQuad",
                //offset: 500,
                offset: 0,
                duration: 3000
            }).add({
                targets: this.comicReliefRef.current,
                duration: 5000,
                translateX: [-500, 0],
                rotate: [90, 90],
                easing: "easeInOutQuad",
                offset: "-=1000",
                offset: 0
            }).add({
                targets: this.humorRef.current,
                translateX: [window.innerWidth, 0],
                rotateX: [360, 0],
                duration: 3500,
                easing: "easeInOutQuad",
                offset: "-=1000",
                offset: 0
            }).add({
                targets: this.commentaryRef.current,
                translateX: [-2 * window.innerWidth, 0],
                duration: 7000,
                offset: "-=1500",
                easing: "easeInQuad",
                offset: 0
            }).add({
                targets: this.contradictsRef.current,
                translateX: [1000, 0],
                duration: 5000,
                offset: "-=500",
                easing: "easeOutQuad",
                offset: 0
            }).add({
                targets: this.noAuthorityRef.current,
                translateY: [-500, 0],
                rotate: [-90,-90],
                duration: 5000,
                easing: "easeOutQuad",
                offset: "-=500",
                offset: 0
            }).add({
                targets: this.unheardRef.current,
                translateX: [500, 0],
                scale: [0.5, 1],
                easing: "easeInCubic",
                duration: 3000,
                offset: "-=500",
                offset: 0
            }).add({
                targets: this.voicesOpinionRef.current,
                translateY: [500, 0],
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 5000,
                offset: "-=500",
                offset: 0
            }).add({
                targets: this.peanutRef.current,
                translateX: [-500, 0],
                translateY: [150, 0],
                duration: 6000,
                offset: "-=2000",
                easing: "easeInOutQuad",
                offset: 0
            })

            timeline.finished.then(() => {
                this.animationsFinished();
            })
        }
    }
    render = () => {
        let classNameExtension = ""
        if (this.props.state === "exited") {
            classNameExtension = " hidden"
        }
        else if (this.props.state === "entering") {
            classNameExtension = " entering"
        }
        else if (this.props.state === "entered") {
            classNameExtension=" entering entered";
            // reposition elements
        }
        return <div className="commentator-splash-page" ref={this.props.reference}>
            <div className={"commentator" + classNameExtension} ref={this.titleRef}>The <span className="emphasis">Commentator</span></div>
            <div className={"comic-relief" + classNameExtension} ref={this.comicReliefRef}>Comic Relief</div>
            <div className={"humor" + classNameExtension} ref={this.humorRef}>Humor</div>
            <div className={"always-something-say" + classNameExtension} ref={this.alwaysSayRef}>Always has something to say</div>
            <div className={"voices-opinion" + classNameExtension} ref={this.voicesOpinionRef}>Voices opinion no matter what</div>
            <div className={"peanut-gallery" + classNameExtension} ref={this.peanutRef}>The Peanut Gallery</div>
            <div className={"usually-contradicts" + classNameExtension} ref={this.contradictsRef}>Usually contradicts the authority</div>
            <div className={"never-ending-commentary" + classNameExtension} ref={this.commentaryRef}>Never ending commentary</div>
            <div className={"no-authority" + classNameExtension} ref={this.noAuthorityRef}>No Authority</div>
            <div className={"often-unheard" + classNameExtension} ref={this.unheardRef}>Often go unheard</div>
        </div>
    }

    animationsFinished() {
        this.setState({
            animated: true,
        },() => {
            this.props.animationsFinished();
        })
    }
}

export default CommentatorSplashPage;