// components/layouts/Layout.tsx

import { LayoutProps } from "../../interface";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
