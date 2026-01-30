import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { UserPlus, Calendar, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up", description: "Create your tutor profile quickly and easily." },
  { icon: Calendar, title: "Set Availability", description: "Choose your teaching hours and subjects." },
  { icon: MessageCircle, title: "Get Booked", description: "Students find you and request sessions." },
  { icon: CheckCircle, title: "Get Paid", description: "Receive secure payments after sessions are completed." },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Card key={step.title} className="p-6 hover:shadow-lg transition">
              <CardContent className="flex flex-col items-center">
                <step.icon className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle className="text-lg text-center">{`Step ${idx + 1}: ${step.title}`}</CardTitle>
                <p className="text-sm text-center text-gray-600 mt-2">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
