import React, { Component } from "react";
import background_video from "../static/videos/battlepass.webm";
import spike from "../static/images/spike.png";
import Timer from "react-compound-timer";
import Modelo3D from "./Modelo3D";
class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastChanceToDefuse: false,
            isRunning: false,
            isRunning2x: false,
            isStopped: false,
            isReset: false,
            image: spike
        };
    }

    spikePlantedAnimation() {
        this.setState({ isRunning: true });
        this.setState({isRunning2x: false});
        let spike = document.getElementById("spike-image");
        spike.style.animation = "none";
        spike.style.opacity = "1";

    };

    spikeLastChanceToDefuseAnimation() {
        this.setState({ isRunning: false });
        this.setState({ isRunning2x: true });
        let spike = document.getElementById("spike-image");
        spike.style.animation = "spikeRunningAnimation 7s linear infinite";
        // console.log(spike);
    };

    spikeStoppedAnimation() {
        
        this.setState({ isRunning: false });
        this.setState({ isRunning2x: false });
        let spike = document.getElementById("spike-image");
        spike.style.opacity = "1";
        spike.style.animation = "spikeStoppingAnimation 0.5s ease-in-out";
        spike.style.transition = "all 1s";
        // console.log(spike);
    };

    spikeResetAnimation() {
        
        this.setState({ isRunning: true });
        this.setState({ isRunning2x: false });
        let spike = document.getElementById("spike-image");
        spike.style.opacity = "1";
        spike.style.animation = "spikeStoppingAnimation 0.5s ease-in-out";
        spike.style.transition = "all 1s";
        // console.log(spike);
    };

    spikeDetonatedAnimation(){
        this.setState({ isRunning: false });
        this.setState({ isRunning2x: false });
        let spike = document.getElementById("spike-image");
        spike.style.opacity = "0";
        spike.style.animation="none"
        
    }

    

    render() {


        return (
            <div className="Content">
                <video id="background-video" className="Background-Video" autoPlay preload="auto" loop muted>
                    <source src={background_video} type="video/webm" />
                </video>
                <div className="Card">

                    {/*timer*/}
                    <Timer
                        initialTime={45000}
                        direction="backward"
                        startImmediately={false}
                        timeToUpdate={1}
                        onStart={() => { this.spikePlantedAnimation()  }}
                        onReset={() => { this.spikeResetAnimation(); }}
                        onStop={() => { this.spikeStoppedAnimation(); }}
                        checkpoints = {[
                            {time: 7000, callback: () => {this.setState({lastChanceToDefuse: true}); console.log("7 segundos para explotar"); this.spikeLastChanceToDefuseAnimation();}},
                            {time: 0, callback: () => {this.setState({lastChanceToDefuse: false}); console.log("BOOM"); this.spikeDetonatedAnimation(); }}
                        ]}
                        
                        
                    >

                        {({ start, reset, stop }) => (
                            
                            <React.Fragment>
                                <p>
                                    
                                    <Timer.Seconds />:<Timer.Milliseconds />
                                </p>
                                <div>
                                    <div className="Card-Buttons">
                                        <button onClick={reset} onClickCapture={start}>Spike Planted</button>
                                        {/* <button onClick={reset} onClickCapture={start}>Reset</button> */}
                                        <button onClick={stop} onClickCapture={reset} >Stop & Reset</button>
                                        

                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </Timer>





                    {/* <img id="spike-image" src={this.state.image} alt="Valorant Spike" className="Valorant-Spike"/> */}
                    <div id="spike-image" className="Canvas-Background">
                        <Modelo3D isRunning={this.state.isRunning} isRunning2x={this.state.isRunning2x} />
                    </div>
                    
                    
                    






                </div>





            </div>
        );
    }
}

export default Content;