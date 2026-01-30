import UserTable from '@/components/modules/admin/users/userTable'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { userService } from '@/services/user.service'
import { User } from '@/types'

const UsersPage = async() => {
  const {data} = await userService.getUsers();
  const users = data?.result;
  return (
    <div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>All users</h1>
      </div>
      <div className="rounded-xl border bg-white dark:bg-zinc-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user:User) => <UserTable key={user.id} user={user}></UserTable>)}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UsersPage