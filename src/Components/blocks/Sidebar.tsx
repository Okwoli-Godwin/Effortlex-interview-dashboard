import img from "../../assets/ovals.png"
import img2 from "../../assets/Oval.png"
import img3 from "../../assets/Medico.png"
import img4 from "../../assets/rocket.png"
import { useNavigate, useLocation } from "react-router-dom"
import { BsFillGridFill } from "react-icons/bs";
import { RiHeartPulseFill } from "react-icons/ri";
import { BsBookmarkDashFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

const Sidebar = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const active = location?.pathname;
  return (
    <div className="w-[20%] h-[100vh] bg-primary flex flex-col pt-[40px] pl-[10px] pr-[20px]">
        <div className="flex items-center pl-[18px]">
            <img src={img} alt=""className="h-[35px]" />
            <img src={img2} alt="" className="h-[45px] ml-[-13px]"/>
            <img src={img3} alt="" className="h-[23px] ml-[-35px]"/>
        </div>
        
        <div className="w-[73%] h-[1px] bg-[#969696] ml-[13px] mt-[20px]"></div>
        
        <div onClick={() => {navigate("/");}}
			    className={`w-[75%] mt-[30px] ml-[13px] min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] rounded-lg cursor-pointer 
          ${active === "/" ? "bg-white text-primary" : "text-[#fff]"}`}>
			<div className='text-[20px]  font-bold'>
				<BsFillGridFill />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Wallet</div>
		  </div>
        
        <div className="w-[79%] ml-[13px] flex-col">
          <div onClick={() => {navigate("/claims");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/claims" ? "bg-white text-primary" : "text-white"}`}>
              <div className='text-[17px]  font-bold'>
                <IoDocumentText />
              </div>
              <div className='font-medium  text-[15px] ml-[20px] '>Claims</div>
		    </div>
        </div>

      <div className="w-[79%] ml-[13px] flex-col">
          <div onClick={() => {navigate("/biller");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/biller" ? "bg-white text-primary" : "text-white"}`}>
              <div className='text-[17px]  font-bold'>
                <BsBookmarkDashFill />
              </div>
              <div className='font-medium  text-[15px] ml-[20px] '>Biller Queue</div>
		    </div>
      </div>
      
      <div className="w-[79%] ml-[13px] flex-col">
          <div onClick={() => {navigate("/subscription");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/subscription" ? "bg-white text-primary" : "text-white"}`}>
              <div className='text-[17px]  font-bold'>
                <IoMdStar />
              </div>
              <div className='font-medium  text-[15px] ml-[20px] '>Subscription</div>
		    </div>
      </div>
      
      <div className="w-[79%] ml-[13px] flex-col">
          <div onClick={() => {navigate("/health");}} className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${active === "/health" ? "bg-white text-primary" : "text-white"}`}>
              <div className='text-[17px]  font-bold'>
                <RiHeartPulseFill />
              </div>
              <div className='font-medium  text-[15px] ml-[20px] '>Health</div>
		    </div>
      </div>
      
      <div className="w-[160px] bg-white ml-[20px] pl-[25px] pr-[25px] pt-[20px] pb-[20px] mt-[45px] flex flex-col items-center justify-center rounded-lg">
        <div className="w-[100%]">
          <img src={img4} alt="" className="h-[70px]"/>
        </div>
        <h3 className="text-[13px] font-[500] mt-[5px]">Want to upgrade</h3>
        <button className="w-[100%] bg-secondaryAscent rounded-full h-[35px] flex justify-center items-center text-[#fff] text-[13px] mt-[13px]">
          Upgrade now
        </button>
      </div>
    </div>
  )
}

export default Sidebar