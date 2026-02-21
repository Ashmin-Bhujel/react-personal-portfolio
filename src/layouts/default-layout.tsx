import { Outlet } from "react-router";

import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navigation";

export default function DefaultLayout() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl gap-4 px-6 py-12 max-lg:flex-col md:px-12 md:py-16 lg:py-0">
      {/* Right side */}
      <div className="top-0 flex max-h-screen flex-col justify-between py-16 lg:sticky lg:flex-1">
        <div>
          <Header />
          <Navigation />
        </div>
        <Footer />
      </div>

      {/* Left side */}
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
}
