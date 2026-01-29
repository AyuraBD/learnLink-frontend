"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  "Math",
  "Science",
  "English",
  "Programming",
  "Art",
];

const ratings = [5, 4, 3, 2, 1];

export default function TutorFilters() {
  const [search, setSearch] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div>
      {/* Search */}
      <div className="flex flex-row items-center gap-4 mb-4">
        <Input
          placeholder="Search tutors by subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={() =>
            console.log({ search, selectedCategory, selectedRating, priceRange })
          }
          className="whitespace-nowrap"
        >
          Search
        </Button>
      </div>

      <div className="mb-4 flex flex-row sm:flex-col gap-4">
        {/* Category Filter */}
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-700 mb-1 block">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
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
            {ratings.map((r) => (
              <option key={r} value={r}>
                {r}★ & up
              </option>
            ))}
          </select>
        </div>
      </div>


      {/* Hourly Rate Filter */}
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

      {/* Apply / Reset Buttons */}
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
