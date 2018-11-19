import React from "react";
import ScrollButton from "./ScrollButton";

class EvidencePage extends React.Component {
    constructor(props) {
        super(props);
        this.pageRefs = [];
        let count = props.subprongs.length * 3 + 1;
        for (let i = 0; i < count; i++) {
            this.pageRefs.push(React.createRef());
        }
        this.state = {
            count: count,
            currentPage: 0
        }
    }

    transitionPage(index) {
        let {count, currentPage} = this.state;
        console.log((currentPage + 1) + " " + count);
        this.setState({
            currentPage: currentPage+1 < count ? currentPage + 1 : currentPage
        })
    }

    componentDidUpdate() {
        let counter = 0;
        for (let i = this.state.currentPage; i >= 0; i--) {
            this.pageRefs[i].current.style.zIndex=100 - counter++;
        }
        for (let i = this.state.count; i > this.state.count; i--) {
            this.pageRefs[i].current.style.zIndex=100-counter++;
        }
    }

    render() {
        let {subprongs} = this.props;
        console.log(this.props.state);
        return <div className={"evidence-page " + this.props.state}>
            <div className="evidence-landing" ref={this.pageRefs[0]}>
                <div className="evidence-title">Evidence</div>
                <ScrollButton onClick={() => this.transitionPage(0)}/>
            </div>
            {
                subprongs.map((subprong, i) => {
                    return <div key={i}>
                        <div className="subprong-container evidence-container" ref={this.pageRefs[i * 3 + 1]}>
                            <div className="subprong-title">{subprong.title}</div>
                            <ScrollButton onClick={() => this.transitionPage(i*3 + 1)} dark/>
                        </div>
                        <div className="quote-container blue evidence-container" ref={this.pageRefs[i * 3 + 2]}>
                            <div className="quote-symbol">“</div>
                            <div className="quote-lines">
                            <div className="inline-quote">
                                    <div className="rectangle"></div>
                                    <div className="quote-content">{subprong.quoteOedipus}</div>
                                </div>
                                <div className="quote-author">{subprong.quoteOedipusAuthor}</div>
                            </div>
                            <ScrollButton onClick={() => this.transitionPage(i * 3 + 2)}/>
                        </div>
                        <div className="quote-container red evidence-container" ref={this.pageRefs[i * 3 + 3]}>
                            <div className="quote-symbol">“</div>
                            <div className="quote-lines">
                                <div className="inline-quote">
                                    <div className="rectangle"></div>
                                    <div className="quote-content">{subprong.quoteLear}</div>
                                </div>
                                <div className="quote-author">{subprong.quoteLearAuthor}</div>
                            </div>
                            <ScrollButton onClick={() => this.transitionPage(i * 3 + 3)}/>
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default EvidencePage;