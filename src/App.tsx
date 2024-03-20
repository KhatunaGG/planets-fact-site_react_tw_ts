import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './Pages/Root'
import Home from './Pages/Home'
import Mercury from './Pages/Mercury'
import data from './data.json'
import { createContext, useState } from 'react'
import Venus from './Pages/Venus'
import Earth from './Pages/Earth'
import Mars from './Pages/Mars'
import Jupiter from './Pages/Jupiter'
import Saturn from './Pages/Saturn'
import Uranus from './Pages/Uranus'
import Neptune from './Pages/Neptune'
import { btnsData } from './btnsData'




export interface IData {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}


export interface IBtnData {
  id: number;
  name: string;
};



type GlobalStateType = {
  data: IData[];
  getName: (name: string) => void;
  palnetName: string;
  getOverview: (pageName: string, btnName: string) => void;
  overview: boolean;
  activeBtn: string;
  btnsData: IBtnData[];
}

export const GlobalState = createContext<GlobalStateType | null>(null);


function App() {
  const [palnetName, setPlanetName] = useState('');
  const [overview, setOverview] = useState(false)
  const [activeBtn, setActiveBtn] = useState('')


  const getName = (name: string) => {
    setPlanetName(name)
  }



  const getOverview = (pageName: string, btnName: string) => {
    setOverview(!overview)

    if (pageName === palnetName) {
      setActiveBtn(btnName)
    }
  }

  const router = createBrowserRouter((
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path={'/mercury'} element={<Mercury />} />
        <Route path={'/venus'} element={<Venus />} />
        <Route path={'/earth'} element={<Earth />} />
        <Route path={'/mars'} element={<Mars />} />
        <Route path={'/jupiter'} element={<Jupiter />} />
        <Route path={'/saturn'} element={<Saturn />} />
        <Route path={'/uranus'} element={<Uranus />} />
        <Route path={'/neptune'} element={<Neptune />} />

      </Route>
    )

  ))


  return (

    <div className='App text-white '>
      <GlobalState.Provider value={{
        data,
        getName,
        palnetName,
        getOverview,
        overview,
        // changeBtn
        activeBtn,
        btnsData
      }}>
        <RouterProvider router={router}></RouterProvider>
      </GlobalState.Provider>
    </div>
  )
}

export default App
