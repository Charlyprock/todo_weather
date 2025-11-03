import { ChevronRight, ChartPie, ListTodo, CloudMoon, Trash2, BadgeX, Plus } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

export function Calendars({
  calendars,
}: {
  calendars: {
    name: string
    items: string[]
  }[]
}) {
  return (
    <>
      <SidebarMenu className="px-2">
        <SidebarMenuItem>
          <NavLink to="/">
            {({ isActive }) => (
              <SidebarMenuButton isActive={isActive} className="cursor-pointer">
                <ChartPie /> Daschbord
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <NavLink to="/todo">
            {({ isActive }) => (<>
              <SidebarMenuButton isActive={isActive} className="cursor-pointer">
                <ListTodo /> Mes Taches
              </SidebarMenuButton>
              <SidebarMenuBadge>12</SidebarMenuBadge>
            </>
            )}
          </NavLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <NavLink to="/weather">
            {({ isActive }) => (<>
              <SidebarMenuButton isActive={isActive} className="cursor-pointer">
                <CloudMoon /> La Meteo
              </SidebarMenuButton>
              <SidebarMenuBadge>37*c</SidebarMenuBadge>
            </>
            )}
          </NavLink>
        </SidebarMenuItem>

      </SidebarMenu>

      <SidebarGroup className="py-0">
        <Collapsible
          defaultOpen={false}
          className="group/collapsible"
        >
          <SidebarGroupLabel
            asChild
            className="group/label text-destructive hover:bg-destructive/20 w-full text-sm"
          >
            <CollapsibleTrigger>
              <Trash2 /> <span className="pl-2 font-normal">Mes Suppresions</span>
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>

          <CollapsibleContent className="ml-6">
            <SidebarGroupContent>
              <SidebarMenu>
                {calendars.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton>
                      <BadgeX />
                      {item.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>

              {/* voir plus */}
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Plus /> Voir Plus
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

            </SidebarGroupContent>
          </CollapsibleContent>
        </Collapsible>
      </SidebarGroup>
    </>
  )
}
