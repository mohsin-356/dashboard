import React from 'react'

const RevenueChart = () => {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl 
                border border-slate-200/50 dark:border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        Revenue Chart
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Monthly revenue and expenses
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <div className='text-sm text-slate-600 dark:text-slate-400'>
                            <span>Revenue</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full"></div>
                        <div className='text-sm text-slate-600 dark:text-slate-400'>
                            <span>Expenses</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RevenueChart