
import { Link, Outlet } from 'react-router-dom'
import { GlobalState } from '../App';
import { useContext } from 'react';

const Root = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { data, getName, planetName } = context;


  return (
    <div>
      <div className="header w-full border-b border-[#38384F] lg:flex lg:flex-row lg:justify-between lg:items-center" >
        <div className='flex flex-row justify-between items-center px-6 py-4 lg:pt-4 lg:pl-8 lg:pr-10'>
          <h2 className='uppercase text-[28px] tracking-[-1.05px] md:w-full md:text-center md:pb-[25px] lg:pb-0'>The Planets</h2>
          <div className='md:hidden lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
          </div>
        </div>



        <div className='list-none  border-t border-[#38384F] flex flex-row justify-between items-center pt-[18px] px-6 md:hidden lg:hidden'>
          <div
          
          className='uppercase text-[9px] font-bold tracking-[1.93px] flex flex-col'>
            <span className='uppercase text-[9px] font-bold tracking-[1.93px]  pb-[14px]'>Overview</span>
            <span className='w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>
          <div className='uppercase text-[9px] font-bold tracking-[1.93px] flex flex-col'>
            <span className='uppercase text-[9px] font-bold tracking-[1.93px]  pb-[14px]'>Structure</span>
            <span className='w-full h-[4px] bg-[var(--Mercury)] hidden'></span>
          </div>
          <div className='uppercase text-[9px] font-bold tracking-[1.93px] flex flex-col'>
            <span className='uppercase text-[9px] font-bold tracking-[1.93px] pb-[14px]'>Surface</span>
            <span className='w-full h-[4px] bg-[var(--Mercury)] hidden'></span>
          </div>

        </div>



        <div className='hidden md:px-[51px] list-none text-[11px] tracking-[1px] leading-[2.27] md:flex flex-row justify-between items-center lg:gap-[33px] lg:visible'>
          {data.map((item, i) => (
            <Link key={i} to={`/${item.name}`}>
              <div
                onClick={() => getName(item.name)}
                className=' flex flex-col '>
                <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  
                lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>{item.name}</button>
                {planetName === item.name && (
                  <span className={`p-${item.name.toLowerCase()} w-full h-[4px] `}></span>
                )}
              </div>
            </Link>
          ))}

        </div>








        {/* <div className='hidden md:px-[51px] list-none text-[11px] tracking-[1px] leading-[2.27] md:flex flex-row justify-between items-center lg:gap-[33px] lg:visible'>

          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>mercury</button>
            <span className='w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>

          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>venus</button>
            <span className='hidden w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>

          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>earth</button>
            <span className='hidden w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>

          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>mars</button>
            <span className='hidden w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>

          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>jupiter</button>
            <span className='hidden  w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>


          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>saturn</button>
            <span className='hidden w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>




          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>uranus</button>
            <span className='hidden w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>


          <div className=' flex flex-col '>
            <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93px]  lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>neptune</button>
            <span className='hidden w-full h-[4px] bg-[var(--Mercury)]'></span>
          </div>

        </div> */}












      </div>




      <div className='w-full'>
        <Outlet />
      </div>

    </div>
  )
}

export default Root