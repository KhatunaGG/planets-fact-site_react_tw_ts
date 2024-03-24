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
import { IData } from './interfaces'
import { IBtnData } from './interfaces'


type GlobalStateType = {
  data: IData[];
  getName: (name: string) => void;
  planetName: string;
  getOverview: (pageName: string, btnName: string) => void;
  overview: boolean;
  activeBtn: string;
  btnsData: IBtnData[];
  setSideBar: (value: boolean) => void;
  sideBar: boolean;
  toggleSidebar: () => void;


 
}

export const GlobalState = createContext<GlobalStateType | null>(null);


function App() {
  const [planetName, setPlanetName] = useState('');
  const [overview, setOverview] = useState(false)
  const [activeBtn, setActiveBtn] = useState('')
  const [sideBar, setSideBar] = useState(false)
  



  const getName = (name: string) => {
    setPlanetName(name)
    setSideBar(!sideBar)
    
  }



  const getOverview = (pageName: string, btnName: string) => {
    setOverview(!overview)
    if (pageName === planetName) {
      setActiveBtn(btnName)
    }
  }


  const toggleSidebar = () => {
    setSideBar(!sideBar)
    setPlanetName('')
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
        planetName,
        getOverview,
        overview,
        activeBtn,
        btnsData,
        setSideBar,
        sideBar,
        toggleSidebar,


       
      }}>
        <RouterProvider router={router}></RouterProvider>
      </GlobalState.Provider>
    </div>
  )
}

export default App
