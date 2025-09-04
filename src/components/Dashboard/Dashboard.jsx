import React from 'react'
import StatsGrid from './StatsGrid.jsx'
import ChartSection from './ChartSection.jsx'
import TableSection from './TableSection.jsx'
import ActivityFeed from './ActivityFeed.jsx'
const Dashboard = () => {
  return (
    <div className='space-y-6'>
      {/* Stats Section */}
      <StatsGrid />
      {/* Chart Section */}
      <ChartSection />
      {/* Table Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>

        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default Dashboard