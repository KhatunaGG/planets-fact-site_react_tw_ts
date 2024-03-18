

import Planet from "../components/Planet"
import { useContext } from "react";
import { GlobalState } from "../App";



const Mercury = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  // const { data } = context;



  // const ww = data.filter((item) => item.name === (location.pathname.slice(1)))



  return (
    <div>
      <Planet  />
    </div>
  )
}

export default Mercury