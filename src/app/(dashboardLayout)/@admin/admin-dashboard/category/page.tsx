import AddCategoryForm from "@/components/modules/admin/category/AddCategoryForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categoryService } from "@/services/category.service"
import { Category } from "@/types";

const CategoryPage = async() => {
  const {data} = await categoryService.getCategories();
  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Add Category Form */}
        <div className="lg:col-span-1">
          <AddCategoryForm />
        </div>

        {/* Categories List */}
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold mb-6">All Categories</h1>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {data.result.map((category: Category) => (
              <Card
                key={category.id}
                className="hover:shadow-md transition cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-xl">
                    {category.subject}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {category.name}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {category.description ??
                      "Explore expert tutors in this subject."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoryPage