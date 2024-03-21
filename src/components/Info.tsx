import { InfoPropsType } from "../interfaces"


const Info = ({ rotation, revolution, radius, title1, title2, title3, title4, temperature }: InfoPropsType) => {
    
    return (
        <div className="planetBtnWrapper flex flex-col justify-center gap-2 mb-[47px] md:flex-row md:gap-[11px] md:justify-between lg:gap-[30px]">
            <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">{title1}</div>
                <div className="flex flex-row items-center justify-center gap-1">
                    <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{rotation}</h2>
                </div>
            </div>
            <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">{title2}</div>
                <div className="flex flex-row items-center justify-center gap-1">
                    <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{revolution}</h2>
                </div>
            </div>
            <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">{title3}</div>
                <div className="flex flex-row items-center justify-center gap-1">
                    <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{radius}</h2>
                </div>
            </div>
            <div className="border border-[#38384F] flex flex-row items-center justify-between px-6 py-[11px] md:flex-col md:w-[25%] ">
                <div className="text-[8px] font-bold leading-[2] uppercase text-[#838391] lg:text-[11px] lg:tracking-[1px] lg:leading-[2.27]  ">{title4}</div>
                <div className="flex flex-row items-center justify-center gap-1">
                    <h2 className="numbers uppercase lg:text-[40px] lg:tracking-[-1.5px] whitespace-nowrap">{temperature}</h2>
                </div>
            </div>
        </div>
    )
}

export default Info