import Footer from "@/components/layouts/Footer"
import {Navbar} from "../../components/layouts/Navbar"
const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default CommonLayout