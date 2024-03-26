import { RouterProvider } from "react-router-dom"
import { Element } from "./routes/PublicRoute"

const App = () => {
  return (
    <RouterProvider router={Element}/>
  )
}

export default App