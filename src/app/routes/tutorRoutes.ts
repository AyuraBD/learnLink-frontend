import { Route } from "@/types";

export const tutorRoutes: Route[] = [
        {
          title: "Tutor Manager",
          items: [
            {
              title:"Profile",
              url: "/dashboard/profile",
            },
            {
              title:"Tutor Profile",
              url: "/dashboard/tutor-profile",
            },
            {
              title:"Bookings",
              url: "/dashboard/bookings"
            },
            {
              title:"reviews",
              url: "/dashboard/reviews",
            },
          ],
        },
      ];