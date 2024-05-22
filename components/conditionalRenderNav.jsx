'use client'
import Navbar from "./nav"
import Footer from "./footer";
import { usePathname } from "next/navigation";
// import Footer from "@/components/footer";
import Nav from "@/components/adminComponents/adminNav";

export default function ConditionalRenderNav({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (!isAdminRoute) {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        {children}
        <Footer />
      </>
    );
  }
}
