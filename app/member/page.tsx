"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import FooterNavigation from "@/components/FooterNavigation";
import VideoFeed from "@/components/VideoFeed.tsx";

interface AlertData {
  id: number;
  title: string;
  description: string;
  priority: string;
  time: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const MemberPage = () => {
  const [notifications, setNotifications] = useState<AlertData[]>([]);

  useEffect(() => {
    const loadAlerts = () => {
      const storedAlerts = JSON.parse(
        localStorage.getItem("fallAlerts") || "[]"
      );
      setNotifications(storedAlerts);
    };

    loadAlerts();

    window.addEventListener("storage", loadAlerts);

    return () => {
      window.removeEventListener("storage", loadAlerts);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F1]">
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md animate-[fadeInDown_0.5s_ease-out]">
        <Header />
      </div>

      <main className="flex flex-col mt-[64px] mb-[60px]">
        {/* Fixed Video Feed Section */}
        <div className="sticky top-[64px] z-40 bg-[#F5F5F1] pt-4 px-4 animate-[fadeIn_0.8s_ease-out]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="text-xl font-semibold p-4 bg-[#6B4423] text-white">
                กล้องวงจรปิด
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <VideoFeed />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Notifications Section */}
        <div className="flex-1 px-4 mt-8 animate-[fadeIn_1s_ease-out]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-[#6B4423]">
              การแจ้งเตือน
            </h2>
            {notifications.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500 animate-[fadeIn_1.2s_ease-out]">
                ไม่มีการแจ้งเตือนในขณะนี้
              </div>
            ) : (
              <div className="space-y-4">
                {notifications.map((alert, index) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg shadow-md ${alert.bgColor} ${alert.borderColor} border-l-4 animate-[slideInUp_0.5s_ease-out]`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`font-bold ${alert.textColor}`}>
                      {alert.title}
                    </div>
                    <div className={alert.textColor}>{alert.description}</div>
                    <div className="text-sm text-gray-500 mt-2">{alert.time}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 animate-[fadeInDown_0.5s_ease-out]">
        <FooterNavigation />
      </div>
    </div>
  );
};

export default MemberPage;