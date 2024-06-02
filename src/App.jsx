import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'


let router = createBrowserRouter([
  {path:'/', element:<Layout/>,children:[
    {index:true,element:<Home/>}
  ]}
])

function App(){
  return(
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App