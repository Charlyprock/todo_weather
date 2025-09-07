import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"


import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function App() {
    return (
        <ThemeProvider>
            <Toaster />
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Event has been created", {
                                    description: "Sunday, December 03, 2023 at 9:00 AM",
                                    action: {
                                        label: "Undo",
                                        onClick: () => console.log("Undo"),
                                    },
                                })
                            }
                        >
                            Show Toast
                        </Button>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>October 2024</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>
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
