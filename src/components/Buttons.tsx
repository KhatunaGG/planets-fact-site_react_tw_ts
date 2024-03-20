import { useContext } from "react";
import { GlobalState } from "../App";
import { ButtonsProps } from "../interfaces";


const Buttons = ({ getOverview, activeBtn, btnName, id, pageName }: ButtonsProps) => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { planetName } = context;

    return (
        <div
            onClick={() => getOverview(pageName, btnName)}
            style={{ width: '100%', border: '1px solid #38384F', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyItems: 'start', gap: '8px', padding: '10px 24px' }}
            className={`${activeBtn === btnName && planetName === pageName ? `p-${pageName.toLowerCase()}` : 'transparent'} `}>
            <p className="numbers uppercase text-[#838391] text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">{`0${id}`}</p>
            <button className="uppercase text-white text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">{btnName}</button>
        </div>
    )
}

export default Buttons