import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Market from "./screens/Market";
import ChangePassword from "./screens/ChangePassword";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import Markets from "./screens/Markets";
import Prediction from "./screens/Prediction";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path="/market"
          element={
            <Page>
              <Market />
            </Page>
          }
        />

        <Route
          path="/change-password"
          element={() => (
            <Page>
              <ChangePassword />
            </Page>
          )}
        />
        <Route
          exact
          path="/sign-in"
          element={
            <Page headerHide footerHide>
              <SignIn />
            </Page>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Page headerHide footerHide>
              <SignUp />
            </Page>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Page headerHide footerHide>
              <ForgotPassword />
            </Page>
          }
        />
        <Route
          path="/markets"
          element={
            <Page headerHide footerHide>
              <Markets />
            </Page>
          }
        />
        <Route
          path="/prediction"
          element={
            <Page headerHide footerHide>
              <Prediction />
            </Page>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
