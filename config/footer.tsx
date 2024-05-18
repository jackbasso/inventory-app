import Logo from "@/components/global/Logo";
import { Headset, Mail, MapPin } from "lucide-react";

export const footer = {
  logo: <Logo />,
  summary:
    "Lorem Ipsum is simply dummy text of the printing. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  contacts: [
    {
      label: "+1 825 734-2008",
      icon: Headset,
    },
    {
      label: "office@baso.com",
      icon: Mail,
    },
    {
      label: "6610 91 Ave, Calgary, AB",
      icon: MapPin,
    },
  ],
  navigation: [
    {
      title: "Getting Started",
      links: [
        {
          title: "Introduction",
          path: "/introduction",
        },
        {
          title: "Documentation",
          path: "/docs",
        },
        {
          title: "Usage",
          path: "/usage",
        },
        {
          title: "Global",
          path: "/global",
        },
        {
          title: "API",
          path: "/api-docs",
        },
        {
          title: "Elements",
          path: "/elements",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          title: "About Us",
          path: "/about-us",
        },
        {
          title: "Careers",
          path: "/careers",
        },
        {
          title: "Community",
          path: "/community",
        },
        {
          title: "Contact Us",
          path: "/contact-us",
        },
        {
          title: "Blogs",
          path: "/api-docs",
        },
      ],
    },
  ],
};
