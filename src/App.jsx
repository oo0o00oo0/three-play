import styled from "styled-components"
import Div100vh from "react-div-100vh"
import Scene from "./create/touch-distance-morph/scenes/Scene"
import Scroll from "./create/scroll-dynamics/components/Scroll"
import PressMorphSpringScene from "./create/press-morph-spring/scene/PressMorphSpringScene"
import ScrollX from "./create/x-scroll-dynamics/components/Scroll"

function App() {
  return (
    <AppContainer>
      {/* <Scene /> */}
      {/* <PressMorphSpringScene /> */}
      {/* <Scroll /> */}
      <ScrollX />
    </AppContainer>
  )
}

export default App

const AppContainer = styled(Div100vh)`
  touch-action: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
