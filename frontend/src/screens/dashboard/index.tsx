import { useState } from "react";

import Sidebar from "@/screens/dashboard/sidebar";

import Header from "@/screens/dashboard/header";

const DashboardScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>
    </section>
  );
};

export default DashboardScreen;
