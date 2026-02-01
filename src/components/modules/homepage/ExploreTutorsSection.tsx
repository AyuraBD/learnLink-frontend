import { Button } from "@/components/ui/button"
import { categoryService } from "@/services/category.service"
import { Category, Tutor } from "@/types"
import SingleCategory from "./SingleCategory"
import { tutorsService } from "@/services/tutor.service"
import TutorsCard from "./TutorsCard"
import Link from "next/link"

const ExploreTutorsSection = async() => {
  const {data} = await categoryService.getCategories();
  const {data:tutorsData} = await tutorsService.getTutors();

  const categories = data.result;
  const tutors = tutorsData.result;
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Explore Tutors & Subjects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Discover popular subjects and connect with top-rated tutors trusted by students.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Popular Categories
          </h3>

          <div className="flex flex-wrap gap-3">
            {categories?.map((category:Category) => <SingleCategory key={category.id} category={category}></SingleCategory>)}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Featured Tutors
            </h3>
            <Button variant="link">
              <Link href="/tutors">View all tutors →</Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tutors?.map((tutor:Tutor)=> <TutorsCard key={tutor.id} tutor={tutor}></TutorsCard>)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExploreTutorsSection
