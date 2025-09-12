import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Header />
      <main className="flex-1 bg-black">{children}</main>
      <Footer />
    </div>
  );
}