import Footer from "@/components/layouts/Footer"
import {Navbar} from "../../components/layouts/Navbar"
import { userService } from "@/services/user.service"
const CommonLayout = async ({children}: {children: React.ReactNode}) => {
  const userData = await userService.getSession();
  const user = userData?.data?.user;
  return (
    <div>
      <Navbar user={user}></Navbar>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default CommonLayout