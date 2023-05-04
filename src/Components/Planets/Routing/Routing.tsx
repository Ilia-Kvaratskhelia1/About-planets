import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from '../../Header/Header'
import Mercury from '../Mercury'
import Venus from '../Venus'
import Earth from '../Earth'
import Mars from '../Mars'
import Jupiter from '../Jupiter'
import Saturn from '../Saturn'
import Uranus from '../Uranus'
import Neptun from '../Neptun'

function Routing() {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/about-planets" element={<Header />}>
          <Route index element={<Mercury />}/>
          <Route path="venus" element={<Venus />}/>
          <Route path="earth" element={<Earth />}/>
          <Route path="mars" element={<Mars />}/>
          <Route path="jupiter" element={<Jupiter />}/>
          <Route path="saturn" element={<Saturn />}/>
          <Route path="uranus" element={<Uranus/>}/>
          <Route path="neptun" element={<Neptun />}/>
          </Route>
        )
      )
  return (

  <RouterProvider router={router}/>
  )
}

export default Routing