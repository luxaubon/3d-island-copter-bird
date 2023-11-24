import { useGLTF,useAnimations } from "@react-three/drei";
import React, { useRef,useEffect } from "react";
import { useFrame } from "@react-three/fiber";

import PlaneScene from "../assets/3d/plane.glb";

const Plane = ({isRotating,...props}) => {
    const ref = useRef();
    const {scene,animations} = useGLTF(PlaneScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        actions['Take 001'].play();
    },[actions,isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane
