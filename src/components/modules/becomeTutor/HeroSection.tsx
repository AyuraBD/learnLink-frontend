import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import BecomeTutorForm from "./BecomeTutorForm";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-6">
            Become a Tutor with LearnLink
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Share your knowledge, set your own schedule, and help students achieve their goals. Join our network of expert tutors today!
          </p>
        </div>

        {/* Illustration */}
        <div className="flex-1">
          <BecomeTutorForm></BecomeTutorForm>
        </div>
      </div>
    </section>
  );
}
