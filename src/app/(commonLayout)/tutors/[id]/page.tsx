import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { tutorsService } from '@/services/tutor.service'
import { CalendarDays, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const TutorDetailPage = async({params,}: {params: Promise<{id:string}>}) => {
  const {id} = await params;
  const {data} = await tutorsService.getTutorById(id as string);
  const tutor = data?.result;
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tutor Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
            {/* Subject & Category */}
            <div className="mb-6">
              <div className='py-5'>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {tutor.category.subject}
                </h1>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  {tutor.category.name}
                </span>
              </div>

              <p className="mt-4 text-gray-600 max-w-3xl">
                {tutor.category.description}
              </p>
            </div>

            {/* Tutor Profile */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={tutor.user.avatar || "/avatar-placeholder.png"}
                  alt={tutor.user.name}
                  fill
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

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
              <span>{tutor.experience}+ years experience</span>
              <span>৳ {tutor.hourlyRate} / hour</span>

              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">
                  {tutor.reviews.length} Reviews
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              {tutor.bio}
            </p>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">
              Student Reviews ({tutor.reviews.length})
            </h2>

            {tutor.reviews.length === 0 ? (
              <p className="text-gray-500">
                No reviews yet. Be the first to review!
              </p>
            ) : (
              <div className="space-y-6">
                {tutor.reviews.map((review: any, i: number) => (
                  <div key={i} className="border-b last:border-none pb-4">
                    <div className="flex gap-1 mb-1">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              Book a Session
            </h3>

            {/* Date */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Select Date
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input type="date" className="pl-9" />
              </div>
            </div>

            {/* Time */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Select Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input type="time" className="pl-9" />
              </div>
            </div>

            <Button className="w-full">
              Book Session
            </Button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              You won’t be charged until the tutor confirms
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorDetailPage

