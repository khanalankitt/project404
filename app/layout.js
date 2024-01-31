import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./styles/globals.css"
import Nav from "./(components)/nav/page";
export const metadata = {
  title: "Ankit Khanal",
  description: "Ankit Khanal - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/icon.png"
      />
      <meta property="og:image" content="/me.jpg" />
      </head>
      <body className={inter.className}>
      <Nav/>
        {children}
      </body>
    </html>
  );
}
