
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import {
  FaWallet,
  FaUsers,
  FaBook,
  FaTruck,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = [
  "#A855F7",
  "#EAB308",
  "#EC4899",
  "#3B82F6",
];

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  // Existing backend API
  const {
    data: stats = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // Create chart data from the same API statistics
  const chartData = [
    {
      category: "Revenue",
      value: Number(stats.revenue) || 0,
    },
    {
      category: "Customers",
      value: Number(stats.users) || 0,
    },
    {
      category: "Products",
      value: Number(stats.menuItems) || 0,
    },
    {
      category: "Orders",
      value: Number(stats.orders) || 0,
    },
  ];

  // Pie chart excludes revenue because it uses a different unit.
  const pieData = chartData.filter(
    (item) => item.category !== "Revenue"
  );

  const statCards = [
    {
      title: "Revenue",
      value: `$${(Number(stats.revenue) || 0).toFixed(2)}`,
      icon: <FaWallet />,
      gradient: "from-purple-500 to-purple-200",
    },
    {
      title: "Customers",
      value: stats.users ?? 0,
      icon: <FaUsers />,
      gradient: "from-yellow-500 to-yellow-200",
    },
    {
      title: "Products",
      value: stats.menuItems ?? 0,
      icon: <FaBook />,
      gradient: "from-pink-500 to-pink-200",
    },
    {
      title: "Orders",
      value: stats.orders ?? 0,
      icon: <FaTruck />,
      gradient: "from-blue-400 to-blue-200",
    },
  ];

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="m-5 rounded-lg border border-red-300 bg-red-50 p-5 text-red-600">
        <h2 className="text-xl font-bold">
          Failed to load admin statistics
        </h2>
        <p className="mt-2">{error?.message}</p>
        <p className="mt-1 text-sm">
          Please check your backend API and Axios baseURL.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 px-3 py-6 sm:px-6 sm:py-10">
      {/* Page Heading */}
      <h2 className="mb-8 text-2xl font-serif uppercase italic sm:text-3xl">
        Hi, Welcome Back!
      </h2>

      {/* Statistics Cards */}
      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <div
            key={card.title}
            className={`flex min-w-0 items-center justify-center gap-4 rounded-lg bg-gradient-to-r ${card.gradient} p-6 text-white shadow-md sm:p-8`}
          >
            <div className="shrink-0 text-3xl sm:text-4xl">
              {card.icon}
            </div>

            <div className="min-w-0 text-center">
              <p className="break-words text-2xl font-bold sm:text-3xl">
                {card.value}
              </p>

              <p className="text-lg sm:text-xl">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Container */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm xl:grid-cols-2 sm:p-6">
        {/* Bar Chart */}
        <section className="w-full min-w-0">
          <h3 className="mb-6 text-center text-lg font-bold text-gray-700">
            Admin Statistics
          </h3>

          <div className="h-[350px] w-full min-w-0 sm:h-[400px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
              debounce={100}
            >
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 10,
                  left: 0,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="category"
                  tick={{ fontSize: 12 }}
                  interval={0}
                />

                <YAxis
                  allowDecimals={true}
                  width={60}
                />

                <Tooltip
                  formatter={(value, name, item) => [
                    item?.payload?.category === "Revenue"
                      ? `$${Number(value).toFixed(2)}`
                      : value,
                    item?.payload?.category ?? name,
                  ]}
                />

                <Bar
                  dataKey="value"
                  name="Total"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={65}
                  label={{
                    position: "top",
                    formatter: (value) =>
                      Number(value).toLocaleString(),
                  }}
                >
                  {chartData.map((item, index) => (
                    <Cell
                      key={item.category}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Pie Chart */}
        <section className="w-full min-w-0">
          <h3 className="mb-6 text-center text-lg font-bold text-gray-700">
            Customers, Products & Orders
          </h3>

          <div className="h-[350px] w-full min-w-0 sm:h-[400px]">
            {pieData.some((item) => item.value > 0) ? (
              <ResponsiveContainer
                width="100%"
                height="100%"
                debounce={100}
              >
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="category"
                    cx="50%"
                    cy="45%"
                    outerRadius={110}
                    paddingAngle={3}
                    label={({ name, value }) =>
                      `${name}: ${value}`
                    }
                  >
                    {pieData.map((item) => (
                      <Cell
                        key={item.category}
                        fill={
                          COLORS[
                            chartData.findIndex(
                              (stat) =>
                                stat.category === item.category
                            ) % COLORS.length
                          ]
                        }
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg bg-gray-50 text-center text-gray-500">
                No customer, product, or order data available.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
