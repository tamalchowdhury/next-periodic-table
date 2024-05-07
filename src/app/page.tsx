import PeriodicTable from "@/components/PeriodicTable";

export default function Home() {
  return (
    <main className="wrapper ">
      <header className="header bg-fuchsia-300 p-3 flex items-center font-bold">
        Periodic Table 
      </header>
      <aside className="sidebar bg-slate-300 p-3">
        Sidebar
      </aside>
      <main className="main bg-slate-50 p-3">
        <PeriodicTable/>
      </main>
    </main>
  )
}
