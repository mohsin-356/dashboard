import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react';
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

                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-slate-900
">
                    <table className="table-fixed w-full text-left border-collapse">
                        <thead>
                            <tr className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                <th className="w-[100px] p-4">Order ID</th>
                                <th className="w-[180px] p-4">Customer</th>
                                <th className="w-[200px] p-4">Product</th>
                                <th className="w-[120px] p-4">Amount</th>
                                <th className="w-[150px] p-4">Status</th>
                                <th className="w-[150px] p-4">Date</th>
                                <th className="w-[60px] p-4 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-slate-200/50 dark:border-slate-700/50 
                   hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <td className="p-4 font-medium text-slate-900 dark:text-white">
                                        #{order.id}
                                    </td>
                                    <td className="p-4 text-slate-800 dark:text-white">{order.customer}</td>
                                    <td className="p-4 text-slate-800 dark:text-white">{order.product}</td>
                                    <td className="p-4 text-slate-800 dark:text-white">{order.amount}</td>
                                    <td className="p-4">
                                        <span
                                            className={`font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(
                                                order.status
                                            )}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-800 dark:text-white">{order.date}</td>
                                    <td className="p-4 text-right">
                                        <MoreHorizontal className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Top Products */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl 
                border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                Top Products
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Best performing products
                            </p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View All
                        </button>
                    </div>

                    {/*Dynamic Data*/}

                    {/* Dynamic Data */}
                    <div className="p-6 space-y-4">
                        {
                            topProducts.map((product, index) => {
                                return (
                                    <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <div className="flex-1">
                                            <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                                                {product.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {product.sales} Sales
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-sm font-semibold ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`} >
                                                {product.revenue}
                                            </p>
                                            <div className='flex items-center space-x-1'>
                                                {product.trend === "up" ? (
                                                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                                                ) : (
                                                    <TrendingDown className="w-4 h-4 text-red-500" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};
export default TableSection