import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";
import Home from "./components/home";

import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:3000/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });

      setUser(data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
        <ToastContainer
          rtl={true}
          style={{ fontFamily: "Estedad-FD-Regular !important" }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
