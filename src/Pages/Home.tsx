import { useContext } from "react";
import { GlobalState } from "../App";
import { motion } from 'framer-motion'



const sliderVariants = {
  initial: { x: 0 },
  animate: { x: '-220%', transition: { repeat: Infinity, repeaType: 'mirror', duration: 20 } }
}


const Home = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { data, planetName  } = context;
  console.log(planetName)


  return (
    <motion.div
      variants={sliderVariants} initial='initial' animate='animate'
      className="home hidden px-12 w-full h-screen  md:flex flex-row gap-[55px] items-baseline justify-between md:px-0  lg:w-[50%] lg:pt-[5%]">
      <div className="hidden md:flex flex-row gap-10 whitespace-nowrap">

        {data.map((item, i) => {
          return (
            <div key={i} className="homeItem w-[300px] opacity-20 flex flex-col items-center justify-center gap-4">
              <img className=""
                src={item.images.planet} alt="" />
              <h1 className="uppercase text-[40px]">{item.name}</h1>
            </div>
          )
        })}
      </div>
    </motion.div>
  );
}

export default Home;

