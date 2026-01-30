import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 md:ml-64 bg-[#F9FAFB] min-h-screen">
                <main className="p-16">
                  {children}
                </main>
            </div>
        </div>
      </body>
    </html>
  );
}
