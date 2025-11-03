import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNav } from './components/app-nav'
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Outlet } from 'react-router-dom'

export default function App() {
    return (
        <ThemeProvider>
            <Toaster />
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <AppNav />

                    <div className='p-2 flex flex-col gap-3'>
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}
