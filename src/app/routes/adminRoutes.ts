import { Route } from "@/types";

export const adminRoutes: Route[] = [
        {
          title: "Admin Manager",
          items: [
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