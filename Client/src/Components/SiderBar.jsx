
import { FaChevronRight, FaRegCalendarAlt, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench} from 'react-icons/fa'

const SiderBar = () => {
  return (
    <div className='bg-[#4E73DF] h-screen '>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
           <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
        </div>
        <div className='flex items-center justify-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <FaTachometerAlt color='white'/>
            <p className='text-white leading-[20px] text-14px] font-bold'>DashBoard</p>

        </div>

        {/* INTERFACE */}
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold  leading-[16px] text-white/[0.4]'>INTERFACE</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white ' >Setting</p>
                </div>
                <FaChevronRight color='white'/>
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaWrench color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white ' >Profile</p>
                </div>
                <FaChevronRight color='white'/>
            </div>

        </div>
        
       
 {/* INTERFACE */}


  {/* ADDONS */}



        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] pb-[5px]'>
            <p className='text-[10px] font-extrabold  leading-[16px] text-white/[0.4]'>ADDONS</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaStickyNote color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white ' >Pages</p>
                </div>
                <FaChevronRight color='white'/>
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegChartBar color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white ' >Charts</p>
                </div>
                <FaChevronRight color='white'/>
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegCalendarAlt color='white'/>
                    <p className='text-[14px] leading-[20px] font-normal text-white ' >Calender</p>
                </div>
              
            </div>

        </div>

          {/* ADDONS */}


         
            
          
          

      
    </div>
  )
}

export default SiderBar
