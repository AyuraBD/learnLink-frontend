"use client";

import { updateUserStatus } from "@/actions/user.action";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { User } from "@/types"
import { toast } from "sonner";

const UserTable = ({user}:{user:User}) => {
  return (
      <TableRow key={user.id}>
        <TableCell className="font-medium">
          {user.name}
        </TableCell>

        <TableCell>{user.email}</TableCell>

        <TableCell>
          <Badge variant="outline">
            {user.role}
          </Badge>
        </TableCell>

        <TableCell>
          <Badge
            variant={
              user.status === "ACTIVE"
                ? "default"
                : "destructive"
            }
          >
            {user.status}
          </Badge>
        </TableCell>

        <TableCell className="text-sm text-muted-foreground">
          {user.createdAt}
        </TableCell>

        <TableCell className="text-right space-x-2">
          <Button size="sm" variant={user.status === "BAN" ? "outline" : "destructive"}
          onClick={async() =>{
            const toastId = toast.loading("Updating user status...");
            try{
              const res = await updateUserStatus(user.id, {
                status: user.status === "BAN" ? "ACTIVE" : "BAN",
              });
              if(res.error){
                toast.error("Couldn't update status", {id:toastId})
              }
              toast.success("User status updated successfully", {id:toastId})
              
            }catch(err){
              toast.error("Internal server error", {id:toastId})
            }
            }
          }
          >
            {user.status === "BAN" ? "Unban" : "Ban"}
          </Button>
        </TableCell>
      </TableRow>
  )
}

export default UserTable