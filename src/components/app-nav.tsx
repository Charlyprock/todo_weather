import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarTrigger,
} from "@/components/ui/sidebar"

import ToggleTheme from "@/components/toggel-theme"
import { AllLocation } from "./all-location"

export function AppNav(){
    return ( <>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center justify-between border-b px-4">
            <div className='flex gap-2 items-center'>
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Button hidden
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
                            <BreadcrumbPage>Septembre 2025</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex gap-3 items-center">
                <ToggleTheme/>

                <AllLocation />
            </div>

        </header>
    </>)
}