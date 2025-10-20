import './App.css'


function App() {
  

  return (
   <div className="border w-[600px] h-[600px] bg-gray-400 relative">
    <div className= "w-[500px] h-[500px] bg-amber-200 flex flex-col items-center justify-center" >
      <div className="w-[100px] h-[100px] bg-blue-500">

      </div>
      <div className="w-[100px] h-[100px] bg-red-600 fixed left-[520px] top-[520px]">

      </div>

      <div className="w-[100px] h-[100px]   bg-green-500">

      </div>

      <div className="w-[100px] h-[100px] bg-purple-600 absolute right-[100px] bottom-[100px]">

      </div>

    </div>

   </div>
  )
}

export default App
