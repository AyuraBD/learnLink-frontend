import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Route } from "@/types"
import { adminRoutes } from "@/app/routes/adminRoutes"
import { Roles } from "@/constants/roles"
import { studentRoutes } from "@/app/routes/studentRoutes"
import { tutorRoutes } from "@/app/routes/tutorRoutes"
import Link from "next/link"

export function AppSidebar({user, ...props }: {user:{role:string} & React.ComponentProps<typeof Sidebar>} ) {
  let routes:Route[] = [];
  switch(user?.role){
    case Roles.admin:
      routes = adminRoutes;
      break;
    case Roles.student:
      routes = studentRoutes;
      break;
    case Roles.tutor:
      routes = tutorRoutes;
      default:
        routes:[];
        break;
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
