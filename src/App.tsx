import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
            <TooltipComponent content='Settings' >
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ backgroundColor: "blue", borderRadius: "50%" }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              sidebar
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>sidebar w-0</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
              activeMenu ? ${activeMenu ? "md:ml-72" : " flex-2"}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element='' />
              {/* Pages */}
              <Route path='/oders' element='' />
              <Route path='/employees' element='' />
              <Route path='/customers' element='' />
              {/* Apps */}
              <Route path='/kanban' element='' />
              <Route path='/editor' element='' />
              <Route path='/calander' element='' />
              <Route path='/color-picker' element='' />
              {/* Charts */}
              <Route path='/line' element='' />
              <Route path='/area' element='' />
              <Route path='/bar' element='' />
              <Route path='/pie' element='' />
              <Route path='/financial' element='' />
              <Route path='/color-mapping' element='' />
              <Route path='/pyramid' element='' />
              <Route path='/stacked' element='' />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
