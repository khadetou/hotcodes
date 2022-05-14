import { useState } from "react";
import { Users } from "@/icons/index";
import Sidebar from "@/screens/dashboard/sidebar";
import DashboardScreen from "@/screens/dashboard";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </section>
  );
};

export default Dashboard;
