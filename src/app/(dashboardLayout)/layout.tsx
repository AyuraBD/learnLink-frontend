import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Roles } from "@/constants/roles"
import { userService } from "@/services/user.service"

export default async function DashboardLayout({admin, student, tutor}:{admin: React.ReactNode, student: React.ReactNode, tutor:React.ReactNode}) {
  const data = await userService.getSession();
  const userInfo = data?.data?.user;
  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          {userInfo.role === Roles.admin && <h1 className="text-xl font-medium">Admin Dashboard</h1>}
          {userInfo.role === Roles.tutor && <h1 className="text-xl font-medium">Tutor Dashboard</h1>}
          {userInfo.role === Roles.student && <h1 className="text-xl font-medium">Student Dashboard</h1>}
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {userInfo.role === Roles.admin && admin}
          {userInfo.role === Roles.tutor && tutor}
          {userInfo.role === Roles.student && student}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
