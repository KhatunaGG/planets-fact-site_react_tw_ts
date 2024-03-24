import { useContext } from "react";
import { GlobalState } from "../App";
import Buttons from "./Buttons";
import Info from "./Info";
import {motion} from 'framer-motion'


const variants = {
    initial: {opacity: 0, x: 300, scale: 0.5},
    animate: {opacity: 1, x: 0, scale: 1, transition: {duration: 2}}
}


const Planet = () => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { data, planetName, getOverview, activeBtn, btnsData } = context;

    const newData = data.filter((item) => item.name === planetName)




    return (
        <>
            {newData.map((item, i) => (
                <div key={i} className="px-6 flex flex-col justify-center gap-[28px] lg:px-[165px] ">
                    <div className=' flex flex-row justify-center items-center border-t border-b border-[#38384F] px-6 md:pt-[18px] md:hidden lg:hidden'>
                        {btnsData.map((btn, i) => {
                            return (
                                <Buttons
                                    key={i}
                                    id={btn.id}
                                    btnName={btn.name}
                                    getOverview={getOverview}
                                    pageName={item.name}
                                    activeBtn={activeBtn}
                                    statuse={'mobile'}
                                />
                            );
                        })}
                    </div>

                    <div className="block-up flex flex-col items-center justify-center lg:flex-row  lg:justify-between">
                        <motion.div
                            variants={variants} animate='animate' initial='initial'
                        // initial={{opacity: 0, x: 300, scale: 0.5}}
                        // animate={{opacity: 1, x: 0, scale: 1}}
                        // transition={{duration: 2}}
                        
                        className="img-wrapper  pt-[95px] pb-[98px] lg:flex lg:items-center lg:justify-center lg:w-[50%] ">
                            {activeBtn === 'OVERVIEW' ? (
                                <img className="w-[111px] h-[111px] lg:w-[290px] lg:h-[290px]" src={item.images.planet} alt="" />
                            ) : activeBtn === 'INTERNAL STRUCTURE' || activeBtn === 'STRUCTURE' ? (
                                <img className="w-[111px] h-[111px] lg:w-[290px] lg:h-[290px]" src={item.images.internal} alt="" />
                            ) : activeBtn === 'SURFACE GEOLOGY' || activeBtn === 'GEOLOGY' ? (
                                <div className="relative ">
                                    <img className="w-[111px] h-[111px] lg:w-[290px] lg:h-[290px]" src={item.images.planet} alt="" />
                                    <img className="top-[36%] legt-[2%] absolute z-10 lg:top-[65%] lg:left-[22%] lg:w-[163px] lg:h-[198x]" src={item.images.geology} alt="" />
                                </div>
                            ) : (
                                <img className="w-[111px] h-[111px] lg:w-[290px] lg:h-[290px]" src={item.images.planet} alt="" />
                            )
                            }
                        </motion.div>
                        <div className="PlanetBtn md:flex md:flex-row md:items-center md:justify-between md:gap-[69px] lg:flex-col lg:gap-[39px]">
                            <div className="planetText text-center md:w-[50%] md:text-left lg:w-[350px]">
                                <h1 className="uppercase text-[40px] mb-4 lg:text-[80px]">{item.name}</h1>

                                <p className="text-[12px] lg:text-sm ">
                                    {activeBtn === 'OVERVIEW' ? item.overview.content
                                        : activeBtn === 'INTERNAL STRUCTURE' || activeBtn === 'STRUCTURE' ? item.structure.content
                                            : activeBtn === 'SURFACE GEOLOGY' || activeBtn === 'GEOLOGY' ? item.geology.content
                                                : item.overview.content}
                                </p>

                                <div className="mt-[45px] text-[#838391] flex flex-row items-center justify-center gap-1 md:justify-start md:mt-8 lg:mt-[24px]">
                                    <span className="text-sm leading-[2.08] font-thin mt-[2px]">Source:</span>
                                    <a className="text-xs leading-[2.08] font-bold underline" target="_blank"
                                        href={activeBtn === 'OVERVIEW' ? item.overview.source
                                            : activeBtn === 'INTERNAL STRUCTURE' || activeBtn === 'STRUCTURE' ? item.structure.source
                                                : activeBtn === 'SURFACE GEOLOGY' || activeBtn === 'GEOLOGY' ? item.geology.source
                                                    : item.overview.source}
                                    >Wikipedia</a>

                                    <svg className="mb-[4px]" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 
                                    1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 
                                    1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 
                                    0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 
                                    0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 
                                    0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5" /></svg>
                                </div>
                            </div>

                            <div className="hidden md:flex md:flex-col md:items-center md:justify-between md:gap-4 md:w-[50%] lg:w-[350px]">
                                {btnsData.map((btn, i) => {
                                    return (
                                        <Buttons
                                            key={i}
                                            id={btn.id}
                                            btnName={btn.name}
                                            getOverview={getOverview}
                                            pageName={item.name}
                                            activeBtn={activeBtn}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <Info
                        rotation={item.rotation}
                        revolution={item.revolution}
                        radius={item.radius}
                        temperature={item.temperature}
                        title1='ROTATION TIME'
                        title2='REVOLUTION TIME'
                        title3='radius'
                        title4='AVERAGE TEMP.'
                    />
                </div>
            ))}
        </>
    )
}

export default Planet

