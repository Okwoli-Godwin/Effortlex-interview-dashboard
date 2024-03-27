import {useState} from "react"
import img from "../assets/ovals.png"
import img2 from "../assets/Oval.png"
import img3 from "../assets/profile.png"
import img4 from "../assets/Bitmap.png"
import img5 from "../assets/edwards.png"
import img6 from "../assets/derrick.png"
import img7 from "../assets/larissa.png"
import img8 from "../assets/bitss.png"
import img9 from "../assets/mar.png"
import img10 from "../assets/rec.png"
import img11 from "../assets/mask.png"
import img12 from "../assets/bit.png"
import img13 from "../assets/bits.png"
import img14 from "../assets/rocket.png"
import { IoSearchSharp, IoDocumentText } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdStar } from "react-icons/io";
import { PiArrowUpRightFill, PiArrowDownLeftFill } from "react-icons/pi";
import { BsFillGridFill, BsBookmarkDashFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiHeartPulseFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'



const Mobilehome = () => {
    const [show, setShow] = useState(false)
    const [drop, setDrop] = useState(false)
    const [drop2, setDrop2] = useState(false)
    const [drop3, setDrop3] = useState(false)
    const [drop4, setDrop4] = useState(false)

    const OpenDrop4 = () => {
        setDrop4(!drop4)
        setDrop(false)
        setDrop2(false)
        setDrop3(false)
    }
    const OpenDrop3 = () => {
        setDrop3(!drop3)
        setDrop(false)
        setDrop2(false)
        setDrop4(false)
    }
    const OpenDrop2 = () => {
        setDrop2(!drop2)
        setDrop(false)
        setDrop3(false)
        setDrop4(false)
    }
    const OpenDrop = () => {
        setDrop(!drop)
        setDrop2(false)
        setDrop3(false)
        setDrop4(false)
    }
    const Toggle = () => {
        setShow(!show)
    }
      const data = [
  {
    name: "2015",
    cl: 6000,
    c2: 7000,
    c3: 4200,
  },
  {
    name: "2016",
    cl: 2000,
    c2: 8600,
    c3: 7210,
  },
  {
    name: "2017",
    cl: 1400,
    c2: 3000,
    c3: 4290,
  },
  {
    name: "2018",
    cl: 3120,
    c2: 8400,
    c3: 6000,
  },
  {
    name: "2019",
    cl: 2200,
    c2: 2340,
    c3: 2210,
  },
  {
    name: "2020",
    cl: 4480,
    c2: 8220,
    c3: 9710,
  },
]
    const location = useLocation();
    const navigate = useNavigate();
    const active = location?.pathname;
  return (
    <div className="w-[100%] flex flex-col">
        <div className="flex w-[100%] p-[20px] fixed sm:fixed justify-between z-[80] sm:flex-col sm:h-[130px] h-[70px] border-b border-[#F1F1F1] bg-white">
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
        
        <div className="w-[100%] flex flex-col p-[20px] mt-[90px] sm:mt-[140px]">
            <h2 className="text-[22px] font-[600] sm:text-[20px]">Hello Danielle</h2>
            <p className="text-[15px]">daniellecampbell@gmail.com</p>
        </div>
        <div className="h-[1px] w-full bg-[#F1F1F1] mt-[20px]"></div>
        
        <div className="w-[100%] flex flex-col p-[20px] relative">
            <h4 className="text-[15px] font-[600]">Top Sales Representative</h4>
            
            <div className="w-[100%] flex items-center h-[40px] mt-[10px] border border-[#EBE8FF] rounded-lg pl-[10px] pr-[10px] justify-between mb-[15px]">
            <div className="flex items-center w-[165px]">
              <img src={img4} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px] sm:ml-[5px]">Nicholas Patrick</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[70px] sm:ml-[-25px] sm:text-[13px] sm:mt-[3px]">$ 2540.58</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">150 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">105 Premium</p>
            <p className="text-[14px] text-[#F7941D] w-[50px]">+Gold</p>
            
            <div onClick={OpenDrop} className="text-primary cursor-pointer w-[35px] sm:w-[15px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
            
            {drop ? (
                <div className="absolute hidden sm:flex w-[150px] h-[80px] bg-primary top-[90px] right-[24px] p-[8px] rounded-lg flex-col">
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex">150 Products</p>
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex mt-[10px]">105 Premium</p>
            </div>
            ) : null}
          </div>
          
          <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[10px] pr-[10px] justify-between mb-[15px]">
            <div className="flex items-center w-[165px]">
              <img src={img5} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px] sm:ml-[5px]">Cordell Edwards</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[70px] sm:ml-[-25px] sm:text-[13px] sm:mt-[3px]">$ 1567.80</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">95 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">60 Premium</p>
            <p className="text-[14px] text-[#43BE83] w-[50px]">+Silver</p>
            
            <div onClick={OpenDrop2} className="text-primary cursor-pointer w-[35px] sm:w-[15px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
            {drop2 ? (
                <div className="absolute hidden sm:flex w-[150px] h-[80px] bg-primary top-[145px] right-[24px] p-[8px] rounded-lg flex-col">
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex">95 Products</p>
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex mt-[10px]">60 Premium</p>
            </div>
            ) : null}
          </div>
          
          <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[10px] pr-[10px] justify-between mb-[15px]">
            <div className="flex items-center w-[165px]">
              <img src={img6} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px] sm:ml-[5px]">Derrick Spencer</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[70px] sm:ml-[-25px] sm:text-[13px] sm:mt-[3px]">$ 1640.26</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">120 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">75 Premium</p>
            <p className="text-[14px] text-[#43BE83] w-[50px]">+Silver</p>
            
            <div onClick={OpenDrop3} className="text-primary cursor-pointer w-[35px] sm:w-[15px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
            {drop3 ? (
                <div className="absolute hidden sm:flex w-[150px] h-[80px] bg-primary top-[200px] right-[24px] p-[8px] rounded-lg flex-col">
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex">120 Products</p>
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex mt-[10px]">75 Premium</p>
            </div>
            ) : null}
          </div>
          
          <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[10px] pr-[10px] justify-between mb-[15px]">
            <div className="flex items-center w-[165px]">
              <img src={img7} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px] sm:ml-[5px]">Larissa Burton</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[70px] sm:ml-[-25px] sm:text-[13px] sm:mt-[3px]">$ 2340.58</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">120 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px] sm:hidden">99 Premium</p>
            <p className="text-[14px] text-[#F7941D] w-[50px]">+Gold</p>
            
            <div onClick={OpenDrop4} className="text-primary cursor-pointer w-[35px] sm:w-[15px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
            {drop4 ? (
                <div className="absolute hidden sm:flex w-[150px] h-[80px] bg-primary top-[257px] right-[24px] p-[8px] rounded-lg flex-col z-[80]">
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex">120 Products</p>
                <p className="text-[14px] text-[#fff] w-[100%] sm:flex mt-[10px]">99 Premium</p>
            </div>
            ) : null}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-[5px] md:flex-wrap sm:flex-wrap pr-[20px] pl-[20px]">
          <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[12px] text-[#797D8C]">Product sold</p>
            <h3 className="font-[700] text-[19px]">25.1k</h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                  <PiArrowUpRightFill />
                </div>
                <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">+15%</p>
              </div>
              <p className="text-primary underline text-[12px] cursor-pointer">View Report</p>
            </div>
            <div className="absolute right-[17px] top-[20px]">
              <svg width="21" height="20" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.243 10.6571L0.707609 8.12251C0.316825 7.73185 0.316776 7.09835 0.7075 6.70762C1.09822 6.3169 1.73173 6.31695 2.12239 6.70773L4.657 9.24312H19.899C20.0549 9.24311 20.2086 9.27954 20.3479 9.34949C20.4872 9.41944 20.6082 9.52099 20.7012 9.64602C20.7943 9.77105 20.8569 9.91611 20.8839 10.0696C20.9109 10.2231 20.9017 10.3808 20.857 10.5301L18.457 18.5301C18.3953 18.7362 18.2687 18.9169 18.0961 19.0453C17.9235 19.1738 17.7141 19.2431 17.499 19.2431H5.243V21.2431H15.243C15.7953 21.2431 16.243 21.6908 16.243 22.2431C16.243 22.7954 15.7953 23.2431 15.243 23.2431H4.243C3.97778 23.2431 3.72343 23.1378 3.53589 22.9502C3.34836 22.7627 3.243 22.5083 3.243 22.2431V10.6571ZM5.243 11.2431V17.2431H16.755L18.555 11.2431H5.243ZM4.743 27.2431C4.34518 27.2431 3.96364 27.0851 3.68234 26.8038C3.40104 26.5225 3.243 26.1409 3.243 25.7431C3.243 25.3453 3.40104 24.9638 3.68234 24.6825C3.96364 24.4012 4.34518 24.2431 4.743 24.2431C5.14082 24.2431 5.52236 24.4012 5.80366 24.6825C6.08496 24.9638 6.243 25.3453 6.243 25.7431C6.243 26.1409 6.08496 26.5225 5.80366 26.8038C5.52236 27.0851 5.14082 27.2431 4.743 27.2431ZM16.743 27.2431C16.3452 27.2431 15.9636 27.0851 15.6823 26.8038C15.401 26.5225 15.243 26.1409 15.243 25.7431C15.243 25.3453 15.401 24.9638 15.6823 24.6825C15.9636 24.4012 16.3452 24.2431 16.743 24.2431C17.1408 24.2431 17.5224 24.4012 17.8037 24.6825C18.085 24.9638 18.243 25.3453 18.243 25.7431C18.243 26.1409 18.085 26.5225 17.8037 26.8038C17.5224 27.0851 17.1408 27.2431 16.743 27.2431Z" fill="#04103B"/>
              <path d="M9.87847 3.47717L12.3556 1.00006L14.8327 3.47717" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.348 1.00761V7.70357" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[12px] text-[#797D8C]">Total Profit</p>
            <h3 className="font-[700] text-[19px]">$2,435k</h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#FFD9D7] rounded-full flex justify-center items-center text-[13px] text-[#EA8F95]">
                  <PiArrowDownLeftFill />
                </div>
                <p className="text-[13px] text-[#EA8F95] font-[500] ml-[5px]">+15%</p>
              </div>
              <p className="text-primary underline text-[12px] cursor-pointer">View Report</p>
            </div>
            <div className="absolute right-[17px] top-[22px]">
              <svg width="18" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L15.5 2.5L16 6" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1V17H17" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 13.5L7.5 8.5L11 10L15 3.5" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[12px] text-[#797D8C]">Total No. of Claim</p>
            <h3 className="font-[700] text-[19px]">3.5M</h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                  <PiArrowUpRightFill />
                </div>
                <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">+15%</p>
              </div>
              <p className="text-primary underline text-[12px] cursor-pointer">View Report</p>
            </div>
            <div className="absolute right-[17px] top-[22px]">
              <svg width="17" height="15" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7483 3C15.7483 1.89543 14.8529 1 13.7483 1H3C1.89543 1 1 1.89543 1 3V18.667C1 19.7716 1.89543 20.667 3 20.667H13.7483C14.8529 20.667 15.7483 19.7716 15.7483 18.667V3Z" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12885 5.04236H8.15164" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12885 9.51221H12.1744" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12885 14.8759H12.1744" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="w-[247px] md:w-[49%] sm:w-[100%] md:mb-[12px] sm:mb-[12px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
            <p className="text-[12px] text-[#797D8C]">New Customer</p>
            <h3 className="font-[700] text-[19px]">43.5k</h3>
            <div className="w-[100%] flex items-center justify-between mt-[5px]">
              <div className="flex items-center">
                <div className="w-[19px] h-[19px] bg-[#B5FFCE] rounded-full flex justify-center items-center text-[13px] text-[#43BE83]">
                  <PiArrowUpRightFill />
                </div>
                <p className="text-[13px] text-[#43BE83] font-[500] ml-[5px]">+10%</p>
              </div>
              <p className="text-primary underline text-[12px] cursor-pointer">View Report</p>
            </div>
            <div className="absolute right-[17px] top-[18px]">
              <svg width="45" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22.5" cy="22.5" r="21.5" stroke="white"/>
              <path d="M12 33C12 30.8783 12.8429 28.8434 14.3431 27.3431C15.8434 25.8429 17.8783 25 20 25C22.1217 25 24.1566 25.8429 25.6569 27.3431C27.1571 28.8434 28 30.8783 28 33H12ZM20 24C16.685 24 14 21.315 14 18C14 14.685 16.685 12 20 12C23.315 12 26 14.685 26 18C26 21.315 23.315 24 20 24Z" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M27 13C29.4862 13 31.5 15.4293 31.5 18.4286C31.5 21.4279 29.4862 23.7619 27 23.7619C28.5913 23.7619 30.1174 24.5245 31.2426 25.8819C32.3679 27.2393 33 29.0803 33 31H30.4286" stroke="#04103B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="w-[100%] flex justify-between p-[20px] mt-[10px] sm:flex-wrap">
          <div className="w-[60%] md:w-[55%] sm:w-[100%] border p-[15px] pl-[20px] pr-[20px] border-[#D3CBFB] rounded-lg flex flex-col">
            <div className="w-[100%] flex justify-between">
              <h3 className="text-[14px] font-[600] sm:text-[12px] w-[150px]">Claims Over the Years</h3>
              
              <div className="items-center flex sm:flex-wrap w-[200px] justify-end">
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95]"></div>
                  <p className="text-[#EA8F95] text-[14px] font-[500] ml-[7px] sm:mb-[5px]">Approved</p>
                </div>
                <div className="flex items-center ml-[17px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#5041BC]"></div>
                  <p className="text-[#5041BC] text-[14px] font-[500] ml-[7px]">Submitted</p>
                </div>
              </div>
            </div>

             <div className="w-[100%]">
                <ResponsiveContainer width="100%" height={170}>
                 <LineChart 
                data={data}
                margin={{
                    top: 20,
                    left: -33,
                }}
            >
                <defs>
                   <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="20" stdDeviation="25" floodColor="rgba(69, 51, 201, 0.3)" floodOpacity="0.8"/>
                      <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="rgba(69, 51, 201, 0.5)" floodOpacity="0.6"/>
                  </filter>
                </defs>
                <CartesianGrid stroke="transparent" />
                <XAxis dataKey='name' axisLine={{ stroke: '#CED6DE', strokeWidth: 2 }} className="text-[#5041BC] text-[11px]" />
                <YAxis className="text-[#5041BC] text-[11px]" axisLine={{ stroke: '#CED6DE', strokeWidth: 2 }} tickFormatter={(tick) => Math.round(tick).toString().slice(0, 2)}/>
                <Tooltip
                  contentStyle={{
                    background: 'linear-gradient(229.42deg, #3D29D0 26.93%, #C25FFF 98.11%)',
                    border: '1px solid #CED6DE', 
                    borderRadius: '15px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    padding: '10px',
                }}
                labelStyle={{
                    color: '#333',
                    fontSize: '12px',
                    fontWeight: 'bold',
                }}
                itemStyle={{
                    color: '#fff',
                    fontSize: '12px',
                }}
                cursor={{ fill: '#000000' }}
                formatter={(value, name, props) => {
                    if (name === 'c2') {
                        return `${props.payload.name}: ${value}`;
                    }
                    return null;
                }}
                />
                <Line type="monotone" dataKey="c2" stroke="#E26169" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="c3" stroke="#5041BC" strokeWidth={3} dot={false} filter="url(#shadow)"/>
            </LineChart>
             </ResponsiveContainer>
             </div>

          </div>
          
        <div style={{
            backgroundImage: `url(${img11})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 10px 15px -3px rgba(69, 51, 201, 0.3), 0 4px 6px -2px rgba(69, 51, 201, 0.5)"
          }} className="w-[38%] sm:w-[100%] sm:mt-[20px] md:w-[42%] rounded-lg overflow-hidden relative">
            <div className="w-[100%] h-[100%] p-[16px] bg-[#4f41bcde] flex flex-col">
              <p className="text-white text-[13px]">Sales team target</p>
              <div className="w-[100%] flex items-center justify-between">
                <h3 className="text-[23px] text-[#fff] font-[700]">82%</h3>
                <div className="flex items-center">
                  <img src={img12} alt="" className="h-[50px] z-30"/>
                  <img src={img13} alt="" className="h-[50px] ml-[-22px] z-20"/>
                  <img src={img8} alt="" className="h-[50px] ml-[-22px] z-10"/>
                  <div className="w-[33px] h-[33px] bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-900 rounded-full mb-[10px] flex justify-center items-center text-[#fff] text-[13px] ml-[-18px]">
                    +4
                  </div>
                  <img src={img9} alt="" className="h-[32px] mb-[9px] ml-[30px] cursor-pointer"/>
                </div>
              </div>
              <p className="text-white text-[13px] mt-[-12px]">Achieved</p>
              
              <div className="w-[100%] flex flex-col mt-[20px] relative">
                <p className="text-white text-[13px]">Cleared Qeue</p>
                <h3 className="text-[23px] text-[#fff] font-[700]">1.4k</h3>
                <div className="flex items-center">
                  <p className="text-[13px] text-white">No. of Bills</p>
                  <div className="w-[19px] h-[19px] bg-[#FFD84D] rounded-full flex justify-center items-center text-[13px] text-primary ml-[10px]">
                  <PiArrowUpRightFill />
                  </div>
                  <p className="text-[13px] text-white ml-[5px]">+15%</p>
                </div>
                <img src={img10} alt="" className="absolute right-[3px] h-[45px] top-[15px]"/>
              </div>
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
    </div>
  )
}
export default Mobilehome
