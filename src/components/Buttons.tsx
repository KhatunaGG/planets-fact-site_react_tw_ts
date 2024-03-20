import { useContext } from "react";
import { GlobalState } from "../App";

// interface IBtnData {
//     id: number;
//     name: string;
// }

type ButtonsProps = {
    getOverview: (pageName: string, itemname: string) => void;
    pageName: string;
    activeBtn: string;
    btnName: string;
    id: number;
}

const Buttons = ({ getOverview, activeBtn, btnName, id, pageName }: ButtonsProps) => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { palnetName } = context;



    return (
        <div
            onClick={() => getOverview(pageName, btnName)}
            style={{ width: '100%', border: '1px solid #38384F', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyItems: 'start', gap: '8px', padding: '10px 24px' }}
            className={`${activeBtn === btnName && palnetName === pageName ? `p-${pageName.toLowerCase()}` : 'transparent'} `}>
            <p className="numbers uppercase text-[#838391] text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">{`0${id}`}</p>
            <button className="uppercase text-white text-[9px] font-bold tracking-[1.93px] leading-[2.77] lg:text-[12px]">{btnName}</button>
        </div>
    )
}

export default Buttons