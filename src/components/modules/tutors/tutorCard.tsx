"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";
import { Tutor } from "@/types";


export default function TutorCard({ tutor }: {tutor: Tutor}) {
  
  const averageRating =
    tutor.reviews.length > 0
      ? tutor.reviews.reduce((sum, r) => sum + r.rating, 0) / tutor.reviews.length
      : 0;

  return (
    <Card className="max-w-sm py-0 gap-2 justify-around rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="pb-0 py-4 text-center">
        <CardDescription className="text-sm font-semibold">{tutor.category.name}</CardDescription>
        <CardTitle className="text-4xl text-gray-500">{tutor.category.subject}</CardTitle>
      </CardHeader>

      <CardContent className="py-4">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100">
              <img
                src={tutor.user.image || "/avatar-placeholder.png"}
                alt={tutor.user.name}
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {tutor.user.name}
              </h3>
              <p className="text-sm text-gray-500">
                Professional Tutor
              </p>
            </div>
          </div>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="secondary">Hourly: BDT{tutor.hourlyRate}</Badge>
          <Badge variant="secondary">Experience: {tutor.experience} yrs</Badge>
          <Badge variant="secondary">{tutor.availability}</Badge>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Star className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium">{averageRating.toFixed(1)}</span>
          <span className="text-sm text-gray-500">({tutor._count.reviews} reviews)</span>
        </div>

        <Link
          href={`/tutors/${tutor.id}`}
          className="mt-4 inline-block w-full text-center rounded-lg bg-blue-600 text-white py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          View Profile
        </Link>
      </CardContent>
    </Card>
  );
}
