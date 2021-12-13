import { createGlobalStyle } from "styled-components"
import MainPage from "./pages/MainPage"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`


function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  )
}

export default App