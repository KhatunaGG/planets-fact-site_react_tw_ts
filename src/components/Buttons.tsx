import { useContext } from "react";
import { GlobalState } from "../App";
import { ButtonsProps } from "../interfaces";


const Buttons = ({ getOverview, activeBtn, btnName, id, pageName, statuse }: ButtonsProps) => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { planetName } = context;

    return (
        <div
            onClick={() => getOverview(pageName, btnName)}
            className={`${activeBtn === btnName && planetName === pageName ? `p-${pageName.toLowerCase()}` : 'transparent'} w-full  md:border md:border-[#38384F] flex flex-row items-center justify-start gap-2 px-6 py-[10px]`}>
            <p className="hidden md:flex uppercase text-[#838391] text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">{`0${id}`}</p>
            <button className="uppercase h-full  text-white text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">
                {statuse === 'mobile' ? btnName.split(' ').reverse().slice(0, 1) : btnName}
            </button>
        </div>
    )
}

export default Buttons