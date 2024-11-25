import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Profile from "./pages/Profile";
import About from "./pages/about";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/sign-out" element={<Profile/>}/>
    </Routes>
   </BrowserRouter>
  )
}
