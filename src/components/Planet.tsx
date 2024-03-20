import { useContext } from "react";
import { GlobalState } from "../App";

import Buttons from "./Buttons";




const Planet = () => {

    const context = useContext(GlobalState);
    if (!context) return null;
    const { data, palnetName, getOverview, activeBtn, btnsData } = context;

    const newData = data.filter((item) => item.name === palnetName)




    return (
        <>
            {newData.map((item, i) => (
                <div key={i} className="px-6 flex flex-col justify-center gap-[28px] lg:px-[165px] ">

                    <div className="block-up flex flex-col items-center justify-center lg:flex-row  lg:justify-between">
                        <div className="pt-[95px] pb-[98px] lg:flex lg:items-center lg:justify-center lg:w-[50%] ">
                            <img className="w-[111px] h-[111px] lg:w-[290px] lg:h-[290px]" src={item.images.planet} alt="" />
                        </div>
                        <div className="PlanetBtn md:flex md:flex-row md:items-center md:justify-between md:gap-[69px] lg:flex-col lg:gap-[39px]">
                            <div className="planetText text-center md:w-[50%] md:text-left lg:w-[350px]">
                                <h1 className="uppercase text-[40px] mb-4 lg:text-[80px]">{item.name}</h1>
                                <p className="text-[12px] lg:text-sm ">{item.overview.content}</p>
                                <div className="mt-[45px] text-[#838391] flex flex-row items-center justify-center gap-1 md:justify-start md:mt-8 lg:mt-[24px]">
                                    <span className="text-sm leading-[2.08] font-thin mt-[2px]">Source:</span>
                                    <a className="text-xs leading-[2.08] font-bold underline" href={item.overview.source} target="_blank"> Wikipedia</a>
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



                                {/* <Buttons
                                    getOverview={getOverview}
                                    overview={overview}
                                    pageName={item.name.toLowerCase()}
                                    pageKey={i}
                                    activeBtn={activeBtn}
                                /> */}

                                {/* <div
                                    onClick={() => getOverview()}
                                    className="border w-full border-[#38384F] flex flex-row items-center justify-start gap-2 px-6 py-[10px] bg-[#419EBB]">
                                    <p className="numbers uppercase text-[#838391] text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">01</p>
                                    <button className="uppercase text-white text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">overview</button>
                                </div>

                                <div className="border w-full border-[#38384F] flex flex-row items-center justify-start gap-2 px-6 py-[10px]">
                                    <p className="numbers uppercase text-[#838391] text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">02</p>
                                    <button className="uppercase text-white text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">Internal Structure</button>
                                </div>


                                <div className="border w-full border-[#38384F] flex flex-row items-center justify-start gap-2 px-6 py-[10px]">
                                    <p className="numbers uppercase text-[#838391] text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">03</p>
                                    <button className="uppercase text-white text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">Surface Geology</button>
                                </div> */}


                            </div>
                        </div>


                    </div>

                    <div className="planetBtnWrapper flex flex-col justify-center gap-2 mb-[47px] md:flex-row md:gap-[11px] md:justify-between lg:gap-[30px]">

                        <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                            <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">ROTATION TIME</div>
                            <div className="flex flex-row items-center justify-center gap-1">
                                <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{item.rotation}</h2>
                            </div>
                        </div>

                        <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                            <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">REVOLUTION TIME</div>
                            <div className="flex flex-row items-center justify-center gap-1">
                                <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{item.revolution}</h2>
                            </div>
                        </div>


                        <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                            <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">radius</div>
                            <div className="flex flex-row items-center justify-center gap-1">
                                <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{item.radius}</h2>
                            </div>
                        </div>

                        <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                            <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">AVERAGE TEMP.</div>
                            <div className="flex flex-row items-center justify-center gap-1">
                                <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{item.temperature}</h2>
                            </div>
                        </div>



                    </div>

                </div>
            ))}

        </>


    )
}

export default Planet

