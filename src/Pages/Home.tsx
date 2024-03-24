// import { useContext } from "react";
// import { GlobalState } from "../App";


// const Home = () => {
//   const context = useContext(GlobalState);
//   if (!context) return null;
//   const { data, getName, planetName, sideBar, toggleSidebar } = context;
//   console.log(planetName)


//   return (
//     <div className="home px-12 w-full lg:px-[165px] ">
//       <div className="flex flex-col items-end justify-center">

//         {data.map((item, i) => (

//           <div key={i} className="homeItem flex flex-row gap-4 items-center justify-between py-1 w-[20%] ">
//             <img className="w-[40px] h-[40px] m-1" src={item.images.planet} alt="" />
//             <h2 className={`c-${item.name.toLowerCase()}`}>{item.name}</h2>

//           </div>

//         ))}
//       </div>

//     </div>
//   );
// }

// export default Home;




import { useContext } from "react";
import { GlobalState } from "../App";
import { motion } from 'framer-motion'



const variants = {
  animate: {
    rotate: 360,

  },
  transition: {
    durtion: 2,

  }
}


const Home = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { data, getName, planetName, sideBar, toggleSidebar } = context;
  console.log(planetName)


  return (
    <div className="home px-12 w-full lg:px-[165px] ">
      <div className="hidden home-container h-screen md:flex flex-row items-center justify-center gap-6">


        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, repeatType: 'mirror' }}
            src="/assets/planet-earth.svg" alt="" />
          <h1 className="uppercase">earth</h1>

        </div>



        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <img src="/assets/planet-jupiter.svg" alt="" />
          <h1 className="uppercase">jupiter</h1>
        </div>



        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <img src="/assets/planet-mars.svg" alt="" />
          <h1 className="uppercase">mars</h1>
        </div>



        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <img src="/assets/planet-mercury.svg" alt="" />
          <h1 className="uppercase">mercury</h1>
        </div>



        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <img src="/assets/planet-neptune.svg" alt="" />
          <h1 className="uppercase">neptune</h1>
        </div>


        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <img src="/assets/planet-saturn.svg" alt="" />
          <h1 className="uppercase">saturn</h1>
        </div>


        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <img src="/assets/planet-uranus.svg" alt="" />
          <h1 className="uppercase">uranus</h1>

        </div>


        <div className="homeItem w-[50px] h-[50px] opacity-20 flex flex-col items-center justify-center ">
          <img src="/assets/planet-venus.svg" alt="" />
          <h1 className="uppercase">venus</h1>
        </div>


























      </div>

    </div>
  );
}

export default Home;

