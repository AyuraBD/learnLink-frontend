import { Badge } from "@/components/ui/badge";
import { Category } from "@/types"

const SingleCategory = ({category}:{category:Category}) => {
  return (
    <Badge className="bg-gray-700 px-4 py-2 text-white hover:bg-gray-500 cursor-pointer">
      {category.name}
    </Badge>
  )
}

export default SingleCategory