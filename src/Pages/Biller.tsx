import {useState} from "react"
import { BsFillGridFill, BsBookmarkDashFill } from "react-icons/bs";
import { RiHeartPulseFill } from "react-icons/ri";
import { IoDocumentText, IoSearchSharp } from "react-icons/io5";
import { IoMdStar, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import img from "../assets/ovals.png"
import img2 from "../assets/Oval.png"
import img3 from "../assets/profile.png"
import img14 from "../assets/rocket.png"
import { FiMenu } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Biller = () => {
  const location = useLocation();
    const navigate = useNavigate();
  const active = location?.pathname;
  
  const [show, setShow] = useState(false)
  const Toggle = () => {
        setShow(!show)
  }
  return (
    <div className="w-[82%] bg-white absolute right-0 h-[100%] rounded-tl-[30px] md:rounded-tl-none sm:rounded-tl-none rounded-bl-[30px] md:rounded-bl-none sm:rounded-bl-none p-[20px] md:p-0 sm:p-0 sm:w-[100%] md:w-[100%] ">
        <div className="w-[100%] p-[20px] hidden md:flex sm:flex fixed sm:fixed justify-between z-[80] sm:flex-col sm:h-[130px] h-[70px] border-b border-[#F1F1F1] bg-white">
            <div className="w-[100%] flex justify-between sm:items-center">
                 <div className="flex items-center">
            <div onClick={Toggle} className="text-[25px] sm:text-[20px] text-[#54657E] mr-[12px] cursor-pointer"><FiMenu /></div>
            <div className="flex items-center">
            <img src={img} alt="" className="h-[30px] sm:h-[20px]"/>
            <img src={img2} alt="" className="h-[38px] ml-[-10px] sm:h-[28px]"/>
            <h1 className="text-primary font-[800] text-[24px] ml-[-30px] sm:ml-[-25px] sm:text-[16px]">VENTES</h1>
        </div>
        </div>
        <div className="flex items-center">
            <div className="hidden items-center w-[270px] h-[30px] bg-[#4f41bc1a] rounded-full overflow-hidden md:flex">
              <input type="text" placeholder="Search" className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"/>
              <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
                <IoSearchSharp />
              </div>
            </div>
            
            <div className="text-primary ml-[20px] text-[22px] relative cursor-pointer hidden sm:flex md:flex">
              <FaBell />
              <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95] absolute right-[0px] top-[3px]"></div>
            </div>
            
            <div className="flex items-center ml-[20px] cursor-pointer mb-[5px]">
              <div className="w-[35px] h-[35px] rounded-full sm:h-[28px] sm:w-[28px]">
                <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
              </div>
              <p className="ml-[7px] text-[14px] text-[#54657E] sm:hidden">Danielle Campbell</p>
              <div className="text-[#54657E] ml-[15px]">
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>  
            </div>
            <div className="hidden sm:w-[100%] items-center w-[270px] h-[30px] sm:h-[35px] bg-[#4f41bc1a] rounded-full overflow-hidden sm:flex md:hidden">
              <input type="text" placeholder="Search" className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"/>
              <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
                <IoSearchSharp />
              </div>
            </div>
        </div>
        <div className={`fixed left-0 top-[70px] sm:top-[130px] bg-[rgba(0,0,0,0.5)] sm:z-[100] w-[100%] h-[100vh] ${show ? "translate-x-0" : "-translate-x-full"}`}>
            <div className={`w-[30%] sm:w-[55%] flex flex-col p-[15px] h-full bg-[#fff] fixed  duration-500 ease-out left-0 transition-transform transform ${show ? "translate-x-0" : "-translate-x-full"}`}>
                <div onClick={() => {navigate("/");}}
			    className={`w-[100%] mt-[30px] sm:mt-[5px] min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] rounded-lg cursor-pointer 
          ${active === "/" ? "bg-primary text-white" : "text-primary"}`}>
			<div className='text-[20px]  font-bold'>
				<BsFillGridFill />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Wallet</div>
		        </div>
                
                <div className="w-[100%] flex-col">
          <div onClick={() => {navigate("/claims");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/claims" ? "bg-primary text-white" : "text-primary"}`}>
              <div className='text-[20px]  font-bold'>
                <IoDocumentText />
              </div>
              <div className='font-medium  text-[15px] ml-[20px] '>Claims</div>
		    </div>
                </div>
                
                <div className="w-[100%] flex-col">
          <div onClick={() => {navigate("/biller");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/biller" ? "bg-primary text-white" : "text-primary"}`}>
              <div className='text-[20px]  font-bold'>
                <BsBookmarkDashFill />
              </div>
              <div className='font-medium  text-[15px] ml-[20px] '>Biller Queue</div>
		    </div>
                </div>
      
                <div className="w-[100%] flex-col">
                    <div onClick={() => {navigate("/subscription");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/subscription" ? "bg-primary text-white" : "text-primary"}`}>
                        <div className='text-[22px]  font-bold'>
                            <IoMdStar />
                        </div>
                        <div className='font-medium  text-[15px] ml-[20px] '>Subscription</div>
                        </div>
                </div>
      
                <div className="w-[100%] flex-col">
                    <div onClick={() => {navigate("/health");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/health" ? "bg-primary text-white" : "text-primary"}`}>
                        <div className='text-[22px]  font-bold'>
                            <RiHeartPulseFill />
                        </div>
                        <div className='font-medium  text-[15px] ml-[20px] '>Health</div>
                        </div>
                </div>
                
                <div className="w-[160px] bg-primary ml-[20px] sm:ml-[5px] pl-[25px] pr-[25px] pt-[20px] pb-[20px] mt-[45px] sm:mt-[20px] flex flex-col items-center justify-center rounded-lg">
                    <div className="w-[100%]">
                    <img src={img14} alt="" className="h-[70px]"/>
                    </div>
                    <h3 className="text-[13px] font-[500] mt-[5px] text-white">Want to upgrade</h3>
                    <button className="w-[100%] bg-white rounded-full h-[35px] flex justify-center items-center text-primary text-[13px] mt-[13px]">
                    Upgrade now
                    </button>
                </div>
            </div>
         </div>
         
         <div className="md:mt-[100px] sm:mt-[150px] md:p-[20px] sm:p-[20px]">Biller</div>
    </div>
  )
}

export default Biller