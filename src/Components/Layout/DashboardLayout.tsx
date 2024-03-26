import { Outlet } from "react-router-dom"
import { Sidebar } from "../blocks"

const DashboardLayout = () => {
  return (
    <div className="flex w-[100%]">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default DashboardLayout