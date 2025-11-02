import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNav } from './components/app-nav'
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { useLocalStorage } from './hooks/use-localStorage'
import { ChartAreaInteractive } from './components/chart-area-interactive'
import { Statistic01 } from './components/statistic-01'
import { ChartBarLabelCustom } from './components/chart-bar-label-custom'
import { ChartBarMultiple } from './components/chart-bar-multiple'
// import { ChartBarStacked } from './components/chart-bar-stacked'
import { ChartLineInteractive } from './components/chart-line-interactive'
import { ChartLineLabel } from './components/chart-line-label'
import { ChartPieDonutText } from './components/chart-pie-donut-text'

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

                    <div className='p-2 flex flex-col gap-3'>
                        <Statistic01 />
                        <ChartAreaInteractive/>
                        <ChartLineInteractive/>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
                            <ChartPieDonutText/>
                            <ChartBarLabelCustom/>
                            <ChartBarMultiple/>
                            {/* <ChartBarStacked/> */}
                            <ChartLineLabel/>
                        </div>
                        
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}
