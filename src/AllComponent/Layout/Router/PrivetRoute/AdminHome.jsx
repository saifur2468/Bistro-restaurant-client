import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaWallet, FaUsers, FaBook, FaTruck } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="w-full px-6 py-10">
            <h2 className="text-3xl font-serif uppercase mb-8 italic">Hi, Welcome Back!</h2>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-purple-500 to-purple-100 p-8 rounded-lg text-white shadow-md">
                    <FaWallet className="text-4xl" />
                    <div className="text-center">
                        <p className="text-3xl font-bold">${stats.revenue || 0}</p>
                        <p className="text-xl">Revenue</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-500 to-yellow-100 p-8 rounded-lg text-white shadow-md">
                    <FaUsers className="text-4xl" />
                    <div className="text-center">
                        <p className="text-3xl font-bold">{stats.users || 0}</p>
                        <p className="text-xl">Customers</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-pink-500 to-pink-100 p-8 rounded-lg text-white shadow-md">
                    <FaBook className="text-4xl" />
                    <div className="text-center">
                        <p className="text-3xl font-bold">{stats.menuItems || 0}</p>
                        <p className="text-xl">Products</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-blue-400 to-blue-100 p-8 rounded-lg text-white shadow-md">
                    <FaTruck className="text-4xl" />
                    <div className="text-center">
                        <p className="text-3xl font-bold">{stats.orders || 0}</p>
                        <p className="text-xl">Orders</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-sm border">
                {/* Bar Chart */}
                <div className="w-full lg:w-1/2 h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={stats.chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {stats.chartData?.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="w-full lg:w-1/2 h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={stats.chartData}
                                cx="50%" cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="revenue"
                            >
                                {stats.chartData?.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

// Custom shape for Bar Chart (Triangle)
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    const getPath = (x, y, width, height) => `M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default AdminHome;