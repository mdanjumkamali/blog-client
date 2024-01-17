import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="mx-8 md:mx-24 mt-6">
      <Navbar />
      <main className="flex gap-4 mt-8">
        <Sidebar />
        <Main />
      </main>
    </div>
  );
}
