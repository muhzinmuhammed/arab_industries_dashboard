import DashBoard from "./Components/DashBoard"
import SiderBar from "./Components/SiderBar"
import { Outlet } from "react-router-dom"

function App() {
 

  return (
    <div className="flex">
      <div className="basis-[12%] border h-[100vh]">
        <SiderBar/>
      </div>
      <div  className="basis-[88%] border"><DashBoard/>
      <div>
        <Outlet/>
      </div>
      </div>
    

     </div>
  )
}

export default App
