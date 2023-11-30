import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Editor from "./pages/editor.pages";
import UserAuthForm from "./pages/userAuthForm.page";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/editor" element={<Editor />} />
        <Route path="/signin" element={<UserAuthForm type="Sign-in"/>} />.
        <Route path="/signup" element={<UserAuthForm type="Sign-up"/>} />
      </Route>
    </Routes>
  );
};

export default App;
