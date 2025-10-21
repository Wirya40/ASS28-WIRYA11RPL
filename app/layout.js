// app/layout.js
import "antd/dist/reset.css"; // ✅ Reset Ant Design styles
import "./globals.css";

export const metadata = {
  title: "Students & Posts",
  description: "Next.js App Router with Ant Design Tabs and Data Fetching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#f5f5f5" }}>
        {children}
      </body>
    </html>
  );
}
