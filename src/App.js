import React from "react";
import { 
 createBrowserRouter, 
 createRoutesFromElements,
  Route, 
  RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout"
import HelpLayout from "./layout/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact, {contactAction} from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CareerLayout from "./layout/CareerLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {careerDetailsLoader} from "./pages/careers/CareerDetails";
import CareeresError from "./pages/careers/CareeresError";



const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    <Route path='help' element={<HelpLayout />} >
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} action={contactAction} />
    </Route>

    <Route path="careers" element={<CareerLayout />} errorElement={<CareeresError />}>
      <Route 
      index 
      element={<Careers />} 
      loader={careersLoader}
      //whenever we visit this route, react runs the loader function to fetch the data ahead of time
      />
      <Route 
      path=":id"
      element={<CareerDetails />}
      loader={careerDetailsLoader}
      
      />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
  )
)



function App() {
  return (
          <RouterProvider router={route} />
        
  );
}

export default App;
