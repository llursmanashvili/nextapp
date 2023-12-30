import "@styles/global.css";
export const metadata = {
  title: "Promptdaigi",
  description: "Discover || share  api ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
