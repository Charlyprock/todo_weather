import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNav } from './components/app-nav'
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { useLocalStorage } from './hooks/use-localStorage'

export default function App() {
    const uL = useLocalStorage()
    console.log("ul dans App", uL)
    return (
        <ThemeProvider>
            <Toaster />
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>

                    <AppNav />

                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-5">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="bg-muted/50 aspect-square rounded-xl" />
                            ))}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}
