"use client";
import { useState } from "react";
import ResumeSideBar from "../Components/ResumeSideBar";
import Tabs from "../Components/Tabs";
import TabsProvider from "../Context/TabsContext";
export default function Resume() {
  const [activeTab,setActiveTab] = useState(0)
  return (
      <main className="flex justify-center items-start h-full ">
          <div className="container h-full">
            <div className="grid md:grid-cols-[auto_1fr] grid-cols-1 gap-5 items-start">
                <TabsProvider value={{activeTab,setActiveTab}}>
                  <ResumeSideBar/>
                  <Tabs/>
                </TabsProvider>
            </div>
          </div>
      </main> 
  );
}
