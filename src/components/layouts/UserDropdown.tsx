import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
const UserDropdown = ({user}:any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full focus:outline-none">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar || ""} alt={user.name} />
            <AvatarFallback className="font-bold border-2 cursor-pointer">
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel className="text-sm">
          {user.name}
          <p className="text-xs text-muted-foreground truncate">
            {user.email}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-red-500 focus:text-red-500 cursor-pointer"
          onClick={() => {
            // call logout action
            console.log("logout");
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown