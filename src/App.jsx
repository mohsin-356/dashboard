import Header from './components/Layouts/Header.jsx'
import Sidebar from './components/Layouts/Sidebar.jsx'
import React, { useState } from 'react'
const App = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>

      <div className='flex h-screen overflow-hidden'>
          <Sidebar 
          collapsed={sideBarCollapsed}
          onToggle={()=>{setSideBarCollapsed(!sideBarCollapsed)}}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          />
          <div className='flex-1 flex flex-col overflow-hidden'>
            <Header />
          </div>
      </div>
    </div>
  )
}

export default App