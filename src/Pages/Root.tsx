import { Link, Outlet } from 'react-router-dom'
import { GlobalState } from '../App';
import { useContext } from 'react';
import { motion } from 'framer-motion'


const variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const itemsVariants = {
  initial: { y: 1, opacity: 0 },
  animate: { y: 5, opacity: 1 },
};



const Root = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { data, getName, planetName, sideBar, toggleSidebar } = context;


  return (
    <div>
      <div className="header relative w-full border-b border-[#38384F] lg:flex lg:flex-row lg:justify-between lg:items-center" >
        <div className='flex flex-row justify-between items-center px-6 py-4 lg:pt-4 lg:pl-8 lg:pr-10'>
          <Link to={'/'}>
            <h2 className='uppercase text-[28px] tracking-[-1.05px] md:w-full md:text-center md:pb-[25px] lg:pb-0'>The Planets</h2>
          </Link>

          <div
            onClick={() => toggleSidebar()}
            className='md:hidden lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
          </div>
        </div>

        <div className='hidden md:px-[51px] list-none text-[11px] tracking-[1px] leading-[2.27] 
            md:flex flex-row justify-between items-center lg:gap-[33px] lg:visible'>
          {data.map((item, i) => (
            <Link key={i} to={`/${item.name}`}>
              <div
                onClick={() => getName(item.name)}
                className=' flex flex-col '>
                <button className=' uppercase text-[11px] font-bold tracking-[1px] leading-[1.93]  
                lg:pb-[35px] md:pb-[17px] lg:pt-[40px]'>{item.name}</button>
                {planetName !== '' && planetName === item.name ? (
                  <span className={`p-${item.name.toLowerCase()} w-full h-[4px] `}></span>
                ) : <span className={`transparent w-full h-[4px] `}></span>}
              </div>
            </Link>
          ))}
        </div>

        {sideBar && (
          <motion.div
            variants={variants} initial='initial' animate='animate'
            className='layout-mobile w-full h-screen bg-[#070724] absolute top-[%] right-0 z-20 flex flex-col 
            gap-4 md:hidden lg:hidden pt-[40px] '>
            {data.map((item, i) => (
              <Link key={i} to={`/${item.name}`}>
                <motion.div
                  variants={itemsVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex flex-col'>
                  <div
                    onClick={() => getName(item.name)}
                    className='sidebarBtn w-full flex flex-row items-center px-6 pb-4 '>
                    <div className='w-full flex flex-row gap-[25px] items-center'>
                      <span className={`p-${item.name.toLowerCase()} w-6 h-6 rounded-full`}></span>
                      <button className=' uppercase text-[15px] font-bold tracking-[1.36px] leading-[1.66] py-2] '>{item.name}</button>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                        <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" /></svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
      <div className='w-full'>
        <Outlet />
      </div>

    </div>
  )
}

export default Root

