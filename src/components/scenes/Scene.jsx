import { Box } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import CameraControls from "./camera/CameraControls"

function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 10, 0],
        fov: 60,
        near: 1,
        far: 100,
      }}
      gl={{
        antialias: true,
      }}
      colorManagement={false}
      dpr={2}
    >
      <Box />
      <CameraControls />
    </Canvas>
  )
}

export default Scene
