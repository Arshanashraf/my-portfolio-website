import MyLogo from "../assets/Images/logo.png"

function Logo() {
  return (
    <div className="flex ">
      <img className="w-16 mt-1 rounded-full" src={MyLogo} alt="" /><h1 className="mt-3 ml-2 text-white text-3xl font-extrabold cursor-pointer">Arshan<span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Dev</span> </h1>
    </div>
  )
}

export default Logo
