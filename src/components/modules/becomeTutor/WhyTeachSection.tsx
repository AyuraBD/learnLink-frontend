import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { User, Clock, DollarSign, LifeBuoy } from "lucide-react";

const benefits = [
  { icon: User, title: "Flexible Schedule", description: "Teach whenever you want, fit sessions around your life." },
  { icon: DollarSign, title: "Competitive Pay", description: "Earn per session with transparent rates." },
  { icon: Clock, title: "Easy Onboarding", description: "Sign up and start teaching in minutes." },
  { icon: LifeBuoy, title: "Support & Resources", description: "Get help and resources to grow as a tutor." },
];

export default function WhyTeachSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Teach With LearnLink?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6 hover:shadow-lg transition cursor-pointer">
              <CardContent className="flex flex-col items-center">
                <benefit.icon className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle className="text-lg text-center">{benefit.title}</CardTitle>
                <p className="text-sm text-center text-gray-600 mt-2">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
