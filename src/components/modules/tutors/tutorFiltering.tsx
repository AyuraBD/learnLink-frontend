"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

const ratings = [5, 4, 3, 2, 1];
export interface CategoryObj{
  id: string
  createdAt: string
  name: string
  subject: string
  description?: string,
  categoryId:string
}
export type CategoryList = CategoryObj[];

export const TutorFilters = ( {categories}:{categories:CategoryList}) => {
  // const {search:searchValue} = meta;
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  const handleSearch = async()=>{
    const params = new URLSearchParams();
    if(search.trim()){
      params.set("search", search.trim());
    }
    router.push(`?${params.toString()}`);
  }
  return (
    <div>
      <div className="flex flex-row items-center gap-4 mb-4">
        <Input
          placeholder="Search tutors by subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e)=>e.key === "Enter" && handleSearch()}
          className="flex-1"
        />
        <Button
          onClick={handleSearch} className="whitespace-nowrap">
          Search
        </Button>
      </div>

      <div className="mb-4 flex flex-row sm:flex-col gap-4">
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-700 mb-1 block">
            Categories
          </label>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>

            {categories?.map((category: Category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-700 mb-1 block">
            Minimum Rating
          </label>
          <select
            value={selectedRating ?? ""}
            onChange={(e) => setSelectedRating(Number(e.target.value))}
            className="w-full p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Rating</option>
            {ratings.map((rating) => (
              <option key={rating} value={rating}>
                {rating}★
              </option>
            ))}
          </select>
        </div>
      </div>


      <div className="mb-4">
        <label className="text-sm font-semibold text-gray-700 mb-1 block">
          Hourly Rate (BDT)
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            placeholder="Min"
            className="w-1/2 p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            placeholder="Max"
            className="w-1/2 p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Button
          onClick={() =>
            console.log({ search, selectedCategory, selectedRating, priceRange })
          }
        >
          Apply Filters
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setSearch("");
            setSelectedCategory("");
            setSelectedRating(null);
            setPriceRange([0, 5000]);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
