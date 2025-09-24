import { Header } from "./app/layout/header";
// import { Route, Contact } from 'lucide-react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
function App() {
  return (
    <>
      {/* <Header /> */}
      {createBrowserRouter(
        createRoutesFromElements(<Route path="/" element={<Header />}></Route>),
      )}
    </>
  );
}

export default App;
