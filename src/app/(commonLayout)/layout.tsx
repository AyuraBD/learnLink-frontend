import {Navbar} from "../../components/layouts/Navbar"
const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}

export default CommonLayout