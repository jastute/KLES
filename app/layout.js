import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalRenderNav from "../components/conditionalRenderNav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KLES",
  description: "Kenyan Labor Export System (KLES): A comprehensive platform for managing labor export applications, ensuring efficient worker deployment and rights protection from Kenya to Diaspora.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalRenderNav>
        {children}
        </ConditionalRenderNav>
        </body>
    </html>
  );
}
