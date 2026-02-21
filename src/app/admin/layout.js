
import AdminSidebar from "./_components/admin-sidebar"

export const metadata = {
  title: "Admin Dashboard | Equipment Daily Report",
  description: "Celebrating the wedding of Praise & Victor on June 20, 2026. Access the full schedule for the ceremony and reception, find gift registry information, and kindly submit your RSVP here.",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen overflow-hidden bg-[#F8F6F1]">
        <AdminSidebar />
        {children}
      </div>
    </div>
  );
}
