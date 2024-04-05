import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
