import "./globals.css";


export const metadata = {
  title: "PPA Assignment",
  description: "Created by Sarwar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
