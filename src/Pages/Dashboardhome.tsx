import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiArrowUpRightFill, PiArrowDownLeftFill } from "react-icons/pi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import img from "../assets/profile.png"
import img2 from "../assets/Bitmap.png"
import img3 from "../assets/edwards.png"
import img4 from "../assets/larissa.png"
import img5 from "../assets/derrick.png"
import img6 from "../assets/bit.png"
import img7 from "../assets/bits.png"
import img8 from "../assets/bitss.png"
import img9 from "../assets/mar.png"
import img10 from "../assets/rec.png"
import img11 from "../assets/mask.png"


const Dashboardhome = () => {
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
  return (
    <div className="w-[82%] bg-white absolute right-0 h-[100vh] rounded-tl-[30px] rounded-bl-[30px] pt-[13px] pb-[10px] pl-[27px] pr-[27px] flex-col">
        <div className="flex w-[100%] items-center justify-between">
          <h3 className="text-[19px] font-[500] ml-[12px]">Overview</h3>
          
          <div className="flex items-center">
            <div className="flex items-center w-[270px] h-[30px] bg-[#4f41bc1a] rounded-full overflow-hidden">
              <input type="text" placeholder="Search" className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"/>
              <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
                <IoSearchSharp />
              </div>
            </div>
            
            <div className="text-primary ml-[40px] text-[22px] relative cursor-pointer">
              <FaBell />
              <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95] absolute right-[0px] top-[3px]"></div>
            </div>
            
            <div className="flex items-center ml-[40px] cursor-pointer">
              <div className="w-[35px] h-[35px] rounded-full">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
              </div>
              <p className="ml-[7px] text-[14px] text-[#54657E]">Danielle Campbell</p>
              <div className="text-[#54657E] ml-[15px]">
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[100%] flex flex-col mt-[10px]">
          <h4 className="text-[14px] font-[600] ml-[12px]">Top Sales Representative</h4>
          
          <div className="w-[100%] flex items-center h-[40px] mt-[10px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img2} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px]">Nicholas Patrick</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[85px]">$ 2540.58</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px]">150 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px]">105 Premium</p>
            <p className="text-[14px] text-[#F7941D] w-[85px]">+Gold</p>
            
            <div className="text-primary cursor-pointer w-[85px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>
          
          <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img3} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px]">Cordell Edwards</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[85px]">$ 1567.80</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px]">95 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px]">60 Premium</p>
            <p className="text-[14px] text-[#43BE83] w-[85px]">+Silver</p>
            
            <div className="text-primary cursor-pointer w-[85px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>
          
          <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img5} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px]">Derrick Spencer</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[85px]">$ 1640.26</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px]">120 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px]">75 Premium</p>
            <p className="text-[14px] text-[#43BE83] w-[85px]">+Silver</p>
            
            <div className="text-primary cursor-pointer w-[85px] flex justify-end">
              <HiOutlineDotsVertical />
            </div>
          </div>
          
          <div className="w-[100%] flex items-center h-[40px] border border-[#EBE8FF] rounded-lg pl-[40px] pr-[40px] justify-between mb-[10px]">
            <div className="flex items-center w-[205px]">
              <img src={img4} alt="" className="h-[27px]"/>
              <p className="text-[#797D8C] text-[14px] ml-[22px]">Larissa Burton</p>
            </div>
            
            <p className="text-[14px] font-[700] w-[85px]">$ 2340.58</p>
            
            <p className="text-[14px] text-[#797D8C] w-[85px]">120 Products</p>
            <p className="text-[14px] text-[#797D8C] w-[85px]">99 Premium</p>
            <p className="text-[14px] text-[#F7941D] w-[85px]">+Gold</p>
            
            <div className="text-primary cursor-pointer w-[85px] justify-end flex">
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-[5px]">
          <div className="w-[225px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
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
          
          <div className="w-[225px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
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
          
          <div className="w-[225px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
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
          
          <div className="w-[225px] p-[15px] relative border border-[#D3CBFB] rounded-lg">
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
        
        <div className="w-[100%] flex justify-between mt-[15px]">
          <div className="w-[60%] border p-[12px] border-[#D3CBFB] rounded-lg flex flex-col">
            <div className="w-[100%] flex justify-between">
              <h3 className="text-[14px] font-[600]">Claims Over the Years</h3>
              
              <div className="items-center flex">
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95]"></div>
                  <p className="text-[#EA8F95] text-[14px] font-[500] ml-[7px]">Approved</p>
                </div>
                <div className="flex items-center ml-[17px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#5041BC]"></div>
                  <p className="text-[#5041BC] text-[14px] font-[500] ml-[7px]">Submitted</p>
                </div>
              </div>
            </div>
            <LineChart className="ml-[-40px]"
                width={605} 
                height={150}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                }}
            >
                <CartesianGrid stroke="transparent" />
                <XAxis dataKey='name' axisLine={{ stroke: '#CED6DE', strokeWidth: 2 }} className="text-[#5041BC] text-[11px]" />
                <YAxis className="text-[#5041BC] text-[11px]" axisLine={{ stroke: '#CED6DE', strokeWidth: 2 }} tickFormatter={(tick) => Math.round(tick).toString().slice(0, 2)}/>
                <Tooltip />
                <Line type="monotone" dataKey="c2" stroke="#E26169" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="c3" stroke="#5041BC" strokeWidth={3} dot={false} />
            </LineChart>
          </div>
          
        <div style={{
            backgroundImage: `url(${img11})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }} className="w-[38%] rounded-lg overflow-hidden relative">
            <div className="w-[100%] h-[100%] p-[16px] bg-[#4f41bcde] flex flex-col">
              <p className="text-white text-[13px]">Sales team target</p>
              <div className="w-[100%] flex items-center justify-between">
                <h3 className="text-[23px] text-[#fff] font-[700]">82%</h3>
                <div className="flex items-center">
                  <img src={img6} alt="" className="h-[50px] z-30"/>
                  <img src={img7} alt="" className="h-[50px] ml-[-22px] z-20"/>
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
                <img src={img10} alt="" className="absolute right-[3px] h-[60px]"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboardhome