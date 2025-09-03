import { MoreHorizontal } from 'lucide-react';
import React from 'react'

const recentOrders = [
    {
        id: "#3847",
        customer: "John Smith",
        product: 'MacBook Pro 16"',
        amount: "$2,399",
        status: "completed",
        date: "2024-01-15",
    },
    {
        id: "#3848",
        customer: "Sarah Johnson",
        product: "iPhone 15 Pro",
        amount: "$1,199",
        status: "pending",
        date: "2024-01-15",
    },
    {
        id: "#3849",
        customer: "Mike Wilson",
        product: "AirPods Pro",
        amount: "$249",
        status: "completed",
        date: "2024-01-14",
    },
    {
        id: "#3850",
        customer: "Emily Davis",
        product: "iPad Air",
        amount: "$599",
        status: "cancelled",
        date: "2024-01-14",
    },
];
console.log(recentOrders);

const topProducts = [
    {
        name: 'MacBook Pro 16"',
        sales: 1247,
        revenue: "$2,987,530",
        trend: "up",
        change: "+12%",
    },
    {
        name: "iPhone 15 Pro",
        sales: 2156,
        revenue: "$2,587,044",
        trend: "up",
        change: "+8%",
    },
    {
        name: "AirPods Pro",
        sales: 3421,
        revenue: "$852,229",
        trend: "down",
        change: "-3%",
    },
    {
        name: "iPad Air",
        sales: 987,
        revenue: "$591,213",
        trend: "up",
        change: "+15%",
    }
];
console.log(topProducts);

const TableSection = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";

            case "pending":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

            case "cancelled":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
        }
    };
    console.log(getStatusColor("completed")); // Example usage

    return (
        <div className="space-y-6">
            {/* Recent Order */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                Recent Orders
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Latest customer orders
                            </p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View All
                        </button>
                    </div>
                </div>
                {/* Table Section */}

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Order ID
                                </th> I
                                <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Product
                                </th> I
                                <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Amount
                                </th> I
                                <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Status
                                </th> I
                                <th className="text-left p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    Date
                                </th> I
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentOrders.map((order, index) => {
                                    return (
                                        <tr key={index}
                                        className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors" >
                                            <td className="p-4">
                                                <span className="text-sm font-medium text-blue">
                                                    Order ID
                                                </span>
                                            </td>

                                            <td className="p-4">
                                                <span className="text-sm text-slate-800 dark:text-white">
                                                    Customer
                                                </span>
                                            </td>

                                            <td className="p-4">
                                                <span className="text-sm text-slate-800 dark:text-white">
                                                    Product
                                                </span>
                                            </td>

                                            <td className="p-4">
                                                <span className="text-sm text-slate-800 dark:text-white">
                                                    Amount
                                                </span>
                                            </td>

                                            <td className="p-4">
                                                <span
                                                    className={`text-slate-400 dark:text-white font-medium 
                        text-xs px-3 py-1 rounded-full`}
                                                >
                                                    Order Status
                                                </span>
                                            </td>

                                            <td className="p-4">
                                                <MoreHorizontal className="w-4 h-4 text-slate-800 dark:text-white" />
                                            </td>
                                        </tr>
                                    );
                                })
                            }




                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};
export default TableSection