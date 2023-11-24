import { useGLTF,useAnimations } from "@react-three/drei";
import React, { useRef,useEffect } from "react";

import WarPlaneScene from "../assets/3d/war_plane.glb";

const WarPlane = ({isRotating,...props}) => {
    const ref = useRef();
    const {scene,animations} = useGLTF(WarPlaneScene);
    const { actions } = useAnimations(animations, ref);


    useEffect(() => {
        actions['Take 001'].play();
        // actions['Take 002'].play();
    },[actions,isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default WarPlane
