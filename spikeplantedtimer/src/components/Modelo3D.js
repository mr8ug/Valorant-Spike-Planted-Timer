import React, { Component, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import {useSpring} from "@react-spring/three"
import modelo from "../static/models/valorant_spike_painted.glb";

function Model(props) {
    const { scene } = useGLTF(modelo);
    

    useSpring({
        scale: props.isRunning ? 3 : 2
    })

    useFrame(({clock}) =>{
        if(props.isRunning){
            scene.rotation.y = (clock.getElapsedTime()**2)/16;
            
        }
        else if(props.isRunning2x){
            
            scene.rotation.y = (clock.getElapsedTime()**2)/8;
            
        }
        else{
            scene.rotation.y = 0;
        }
        
        
    });
    return <primitive object={scene} scale={3} dispose={null} position={[0,-2,1]}/>

        
        
        
}



class Modelo3D extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: this.props.isRunning,
            isRunning2x: this.props.isRunning2x
        };
    }
            
    render() {
        return (
            <Canvas>
                <camera position={[10, 10, 5]} />
                <ambientLight intensity={0.1} />
                <pointLight position={[-2, 5, 2]} />
                <Suspense fallback={null}>
                    <Model isRunning={this.props.isRunning} isRunning2x={this.props.isRunning2x}/>
                </Suspense>
                <OrbitControls />
            </Canvas>
        );
    }
}

export default Modelo3D;