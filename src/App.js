import SideBar from "./components/SideBar"

export default function App() {
  return (
    <div className="flex flex-col h-screen">
        <div className="fixed w-2/12">
          <SideBar/>
        </div>
        <div className="w-10/12">

        </div>
    </div>
  )
}