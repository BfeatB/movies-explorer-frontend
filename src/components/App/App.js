import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../Header/Header"
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import AuthNav from "../Main/AuthNav/AuthNav";
import Nav from "../Navigation/Navigation";

import NotFoundPage from "../NotFoundPage/NotFoundPage";

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
              <Movies isSaved={false}></Movies>
              <Footer></Footer>
      </>}/>

      <Route path="/saved-movies"
      element={<>
              <Header>
                <Nav></Nav>
              </Header>
              <Movies isSaved={true}></Movies>
              <Footer></Footer>
      </>}/>
      <Route path="/profile"
      element={<>
      </>}/>
      <Route path="/signin"
      element={<>
      </>}/>
      <Route path="/signup"
      element={<>
      </>}/>
      <Route path="/error"
      element={<>
              <NotFoundPage></NotFoundPage>
              </>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
