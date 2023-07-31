import Sidebar from "@/components/sidebar";

export default function RootLayout({children}: {children:React.ReactNode}) {
    return (
        <main className=" h-screen flex bg-primary/10 ">
            <Sidebar />
            <section className="p-2 flex-1">
                {children}
            </section>
        </main>
    )
}