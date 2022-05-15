import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import WelcomeBanner from "../WelcomeBanner";

const BlogScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}

              <button className="btn bg-pink-500 hover:bg-pink-600 !w-full max-w-[109px] h-[38px] rounded-md flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Add Fund</span>
              </button>
            </div>
            <div className="grid grid-cols-12 gap-6"></div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default BlogScreen;
