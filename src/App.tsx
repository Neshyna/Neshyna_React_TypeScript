import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// lessons
// import Lesson06 from './lessons/lesson06/lesson06';
// import Lesson07 from './lessons/lesson07/lesson07';
// import Lesson08 from "./lessons/lesson08/Lesson08";
// import Lesson09 from "./lessons/lesson09/Lesson09";
// import Lesson10 from "./lessons/lesson10/Lesson10";
// import Lesson11 from "./lessons/lesson11/Lesson11";
// import Lesson12 from "./lessons/lesson12/Lesson12";
//---Lesson 13
import Layout from "components/Layouts/Layouts";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import User from "pages/Users/components/User/User";
import Clients from "pages/Clients/Clients";
import Google from "pages/Clients/Components/Google/Google";
import Amazon from "pages/Clients/Components/Amazon/Amazon";
import SpaceX from "pages/Clients/Components/SpaceX/SpaceX";

// hw
// import HW8 from "./hw/hw8/hw8";
// import HW9 from "./hw/hw9/HW9";
// import HW10 from "./hw/hw10/HW10";
// import HW12 from "./hw/hw12/HW12";

// consult

function App() {
  return (
    <BrowserRouter>
      {/*   //BrowserRouter - компонент из react-router-dom, который позволяет нам работать с маршрутами
    // по всему приложению */}
      <GlobalStyles />
      <Layout>
        {/* Routes - собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент, 
         который нужно отрисовать по этому маршруту в Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user" element={<User />} />
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/clients/components/Amazon" element={<Amazon/>}/>
          <Route path="/clients/components/Google" element={<Google/>}/>
          <Route path="/clients/components/SpaceX" element={<SpaceX/>}/>
        </Routes>
      </Layout>
      {/* Topic: TypeScript - Introduction */}
      {/* <Lesson06/> */}
      {/* Topic: TypeScript - Object types, enum */}
      {/* <Lesson07 /> */}
      {/* Topic: Styling components */}
      {/* <Lesson08 /> 
      <HW8/>*/}
      {/* Topic: Control components, useEffect */}
      {/* <Lesson09 /> */}
      {/* <HW9/> */}
      {/* --Topic: useEffect, axios */}
      {/* <Lesson10 /> */}
      {/* <HW10/> */}
      {/* <Lesson11 /> */}
      {/* --Topic: formik, yup */}
      {/* <Lesson12 /> */}
      {/* <HW12/> */}
    </BrowserRouter>
  );
}
export default App;
