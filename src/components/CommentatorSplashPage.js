import React from "react";
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
    }

    componentDidUpdate() {
        if (this.props.state === "entered") {
            this.comicReliefRef.current.style.transform = "translate(-500px, 0)";
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
        return <div className="commentator-splash-page">
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
}

export default CommentatorSplashPage;