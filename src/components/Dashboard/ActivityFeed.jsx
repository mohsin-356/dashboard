import React from 'react';
import { Bell, Clock, CreditCard, Settings, ShoppingCart, User } from 'lucide-react';

const activities = [
    {
        id: 1,
        type: "user",
        icon: User,
        title: "New user registered",
        description: "John Smith created an account",
        time: "2 minutes ago",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
        id: 2,
        type: "order",
        icon: ShoppingCart,
        title: "New order received",
        description: "Order #3847 for $2,399",
        time: "5 minutes ago",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
        id: 3,
        type: "payment",
        icon: CreditCard,
        title: "Payment processed",
        description: "Payment of $1,199 completed",
        time: "12 minutes ago",
        color: "text-purple-500",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
        id: 4,
        type: "system",
        icon: Settings,
        title: "System update",
        description: "Database backup completed",
        time: "1 hour ago",
        color: "text-orange-500",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
        id: 5,
        type: "notification",
        icon: Bell,
        title: "Low stock alert",
        description: "iPhone 15 Pro stock is low",
        time: "2 hours ago",
        color: "text-red-500",
        bgColor: "bg-red-100 dark:bg-red-900/30",
    },
];
console.log(activities);

const ActivityFeed = () => {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Activity Feed
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Recent System Activities
                    </p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                </button>
            </div>
            <div className="p-6">
                <div className='space-y-6'>
                    <div className='flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
                        <div className={`p-2 rounded-lg`}></div>
                        <div className='flex-1 min-w-0'>
                            <h4 className='text-slate-600 dark:text-slate-400'>Activity Title</h4>
                            <p className='text-sm text-slate-600 dark:text-slate-400 truncate'>Activity Description</p>
                            <div className='flex items-center-safe space-w-1 mt-1'>
                                <Clock className='w-3 h-3 text-slate-400' />
                                <span className='text-xs text-slate-500 dark:text-slate-400'>Activity Time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActivityFeed