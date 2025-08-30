import React from 'react'

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6
               border border-slate-200/50 dark:border-slate-700/50 
               hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 
               transition-all duration-300 group">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                Stats Title
              </p>
              <p className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
                Stats Value
              </p>
          </div>
          </div>
      </div>
    </div>

  )
}

export default StatsGrid