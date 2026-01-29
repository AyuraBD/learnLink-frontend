import { Route } from "@/types";

export const adminRoutes: Route[] = [
        {
          title: "Admin Manager",
          items: [
            {
              title:"Profile",
              url: "/dashboard/profile",
            },
            {
              title:"Analytics",
              url: "/dashboard/analytics",
            },
            {
              title:"Users",
              url: "/dashboard/users",
            },
            {
              title:"Category",
              url: "/dashboard/category",
            }
          ],
        },
      ];