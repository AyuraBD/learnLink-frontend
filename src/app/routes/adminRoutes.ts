import { Route } from "@/types";

export const adminRoutes: Route[] = [
        {
          title: "Admin Manager",
          items: [
            {
              title:"Profile",
              url: "/admin-dashboard/profile",
            },
            {
              title:"Bookings",
              url: "/admin-dashboard/bookings",
            },
            {
              title:"Users",
              url: "/admin-dashboard/users",
            },
            {
              title:"Category",
              url: "/admin-dashboard/category",
            }
          ],
        },
      ];