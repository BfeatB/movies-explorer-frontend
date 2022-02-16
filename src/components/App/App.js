import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../Header/Header"
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import AuthNav from "../Main/AuthNav/AuthNav";
import Nav from "../Nav/Nav";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route
            path="/"
            element={
            <>
              <Header mod="grey">
                <AuthNav></AuthNav>
              </Header>
              <Main></Main>
              <Footer></Footer>
            </>}
          />
      <Route path="/movies"
      element={<>
              <Header>
                <Nav></Nav>
              </Header>
              <Movies></Movies>
              <Footer></Footer>
      </>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
