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
              title:"Create tutor",
              url: "/dashboard/tutor",
            },
            {
              title:"Bookings",
              url: "/dashboard/bookings"
            }
          ],
        },
      ];