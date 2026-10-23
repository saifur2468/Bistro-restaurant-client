
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import {
  FaWallet,
  FaStore,
  FaPhoneAlt,
  FaCar,
  FaStar,
  FaBookmark,
  FaCoins,
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const COLORS = ["#8B5CF6", "#14B8A6", "#F59E0B"];

const UserHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: stats = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user-stats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/user-stats/${encodeURIComponent(user.email)}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="m-5 rounded-lg border border-red-300 bg-red-50 p-5 text-red-600">
        <h2 className="text-xl font-bold">
          Failed to load your dashboard
        </h2>
        <p className="mt-2">{error?.message}</p>
      </div>
    );
  }

  // Use data from the existing user-stats API
  const orderCount = Number(stats.orderCount) || 0;
  const reviewCount = Number(stats.reviewCount) || 0;
  const bookingCount = Number(stats.bookingCount) || 0;
  const totalSpent = Number(stats.totalSpent) || 0;

  const chartData = [
    { name: "Orders", value: orderCount },
    { name: "Reviews", value: reviewCount },
    { name: "Bookings", value: bookingCount },
  ];

  const hasActivity = chartData.some((item) => item.value > 0);

  const statCards = [
    {
      title: "Orders",
      value: orderCount,
      icon: <FaWallet />,
      gradient: "from-purple-500 to-purple-200",
    },
    {
      title: "Total Spent",
      value: `$${totalSpent.toFixed(2)}`,
      icon: <FaStore />,
      gradient: "from-yellow-600 to-yellow-200",
    },
    {
      title: "Bookings",
      value: bookingCount,
      icon: <FaPhoneAlt />,
      gradient: "from-pink-500 to-pink-200",
    },
  ];

  return (
    <div className="w-full min-w-0 px-3 py-6 sm:px-6">
      {/* Welcome Heading */}
      <h2 className="mb-8 text-2xl font-serif uppercase sm:text-3xl">
        Hi, Welcome {user?.displayName || "Back"}!
      </h2>

      {/* Statistics Cards */}
      <div className="mb-10 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-3">
        {statCards.map((card) => (
          <div
            key={card.title}
            className={`flex min-w-0 items-center justify-center gap-4 rounded-lg bg-gradient-to-r ${card.gradient} p-6 shadow-md sm:p-8`}
          >
            <div className="shrink-0 text-4xl">{card.icon}</div>
            <div className="min-w-0 text-center">
              <p className="break-words text-2xl font-bold sm:text-3xl">
                {card.value}
              </p>
              <p className="text-xl">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="mb-10 grid min-w-0 grid-cols-1 gap-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm xl:grid-cols-2 sm:p-6">
        {/* Bar Chart */}
        <section className="min-w-0">
          <h3 className="mb-6 text-center text-lg font-bold text-gray-700">
            Your Activity Statistics
          </h3>

          {hasActivity ? (
            <div className="h-[350px] w-full min-w-0">
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
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    name="Total"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={65}
                    label={{ position: "top" }}
                  >
                    {chartData.map((item, index) => (
                      <Cell
                        key={item.name}
                        fill={COLORS[index]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex h-[350px] items-center justify-center rounded-lg bg-gray-50 p-4 text-center text-gray-500">
              No activity data available yet.
            </div>
          )}
        </section>

        {/* Pie Chart */}
        <section className="min-w-0">
          <h3 className="mb-6 text-center text-lg font-bold text-gray-700">
            Activity Distribution
          </h3>

          {hasActivity ? (
            <div className="h-[350px] w-full min-w-0">
              <ResponsiveContainer
                width="100%"
                height="100%"
                debounce={100}
              >
                <PieChart>
                  <Pie
                    data={chartData.filter((item) => item.value > 0)}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    outerRadius={100}
                    paddingAngle={3}
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {chartData
                      .filter((item) => item.value > 0)
                      .map((item) => (
                        <Cell
                          key={item.name}
                          fill={
                            COLORS[
                              chartData.findIndex(
                                (entry) => entry.name === item.name
                              )
                            ]
                          }
                        />
                      ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex h-[350px] items-center justify-center rounded-lg bg-gray-50 p-4 text-center text-gray-500">
              No activity data available yet.
            </div>
          )}
        </section>
      </div>

      {/* Profile and Activities */}
      <div className="grid min-w-0 grid-cols-1 overflow-hidden rounded-xl border shadow-sm md:grid-cols-2">
        {/* Profile */}
        <div className="flex min-w-0 flex-col items-center justify-center border-b-4 border-yellow-500 bg-orange-100 px-5 py-12 md:border-b-0 md:border-r-4 md:px-8">
          <div className="mb-4 h-36 w-36 overflow-hidden rounded-full border-4 border-yellow-600 bg-white sm:h-40 sm:w-40">
            <img
              src={
                user?.photoURL ||
                "https://placehold.co/200x200?text=Profile"
              }
              alt="User profile"
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="break-words text-center text-2xl font-serif uppercase sm:text-3xl">
            {user?.displayName || "User"}
          </h3>

          <p className="mt-2 break-all text-center text-gray-600">
            {user?.email}
          </p>
        </div>

        {/* Activities */}
        <div className="min-w-0 bg-yellow-100 px-5 py-10 sm:px-8 sm:py-12">
          <h3 className="mb-6 text-2xl font-serif uppercase sm:text-3xl">
            Your Activities
          </h3>

          <ul className="space-y-5 text-base font-semibold uppercase sm:text-lg">
            <li className="flex items-center gap-3 text-blue-500">
              <FaCar className="shrink-0" />
              <span>Orders: {orderCount}</span>
            </li>

            <li className="flex items-center gap-3 text-teal-600">
              <FaStar className="shrink-0" />
              <span>Reviews: {reviewCount}</span>
            </li>

            <li className="flex items-center gap-3 text-yellow-700">
              <FaBookmark className="shrink-0" />
              <span>Bookings: {bookingCount}</span>
            </li>

            <li className="flex items-center gap-3 text-orange-600">
              <FaCoins className="shrink-0" />
              <span>Total Spent: ${totalSpent.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
