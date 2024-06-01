import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./layout/MainLayout"


function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
