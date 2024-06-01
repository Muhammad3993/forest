// routing
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
// layout
import MainLayout from "./layout/MainLayout"
// pages
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import ServicesPage from "./pages/ServicesPage"


function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="project" element={<ProjectPage/>}/>
        <Route path="service" element={<ServicesPage/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
