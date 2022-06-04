import { useTypedSelector } from "@/hooks/useTypeSelector";
import {
  BlogIcon,
  DashboardIcon,
  MessageIcon,
  OrderIcon,
  UserIcon,
  Users,
} from "@/icons/index";

const { user } = useTypedSelector((state) => state.authReducer);

export const Ecommerce = {
  title: "E-commerce",
  Icon: "EcommerceIcon",
  list: [
    {
      title: " Customers",
      link: "/ecommerce/customers",
    },
    {
      title: " Orders",
      link: "/ecommerce/orders",
    },
    {
      title: "Invoices",
      link: "/ecommerce/invoices",
    },
    {
      title: "Shop",
      link: "/ecommerce/shop",
    },
    {
      title: "Shop2",
      link: "/ecommerce/shop2",
    },
    {
      title: "Single Product",
      link: "/ecommerce/single",
    },
    {
      title: "Cart",
      link: "/ecommerce/cart",
    },
    {
      title: "Cart2",
      link: "/ecommerce/cart2",
    },
    {
      title: "Pay",
      link: "/ecommerce/pay",
    },
  ],
};
export const Team = {
  title: "Team",
  Icon: "TeamIcon",
  list: [
    {
      title: " Team - Tabs",
      link: "/team/tabs",
    },
    {
      title: "Team - Tiles",
      link: "/team/tiles",
    },
    {
      title: "Profile",
      link: "/team/profile",
    },
  ],
};
export const Settings = {
  title: "Settings",
  Icon: "SettingsIcon",
  list: [
    {
      title: "  My Account",
      link: "/settings/account",
    },
    {
      title: "My Notification",
      link: "/settings/notification",
    },
    {
      title: "Connected Apps",
      link: "/settings/apps",
    },
    {
      title: "Plans",
      link: "/settings/plans",
    },
    {
      title: "Billing & Invoice",
      link: "/settings/billing",
    },
    {
      title: "Give Feedback",
      link: "/settings/feedback",
    },
  ],
};
export const Utility = {
  title: "Utility",
  Icon: "UtilityIcon",
  list: [
    {
      title: "Changlog",
      link: "/utility/changelog",
    },
    {
      title: "Roadmap",
      link: "/utility/roadmap",
    },
    {
      title: "FAQs",
      link: "/utility/faqs",
    },
    {
      title: "Empty state",
      link: "/utility/empty",
    },
    {
      title: "404",
      link: "/utility/notfound",
    },
  ],
};

export const SidebarItems = [
  {
    title: "Dashboard",
    pathName: "dashboard",
    link: "/dashboard",
    Icon: DashboardIcon,
  },
  {
    title: "Blog",
    pathName: "blog",
    link: "/dashboard/blog",
    Icon: BlogIcon,
  },
  {
    title: "Orders",
    pathName: "orders",
    link: "/dashboard/orders",
    Icon: OrderIcon,
  },
  ...(user && user!.roles.includes("admin")
    ? [
        {
          title: "Users",
          pathName: "users",
          link: "/dashboard/users",
          Icon: Users,
        },
      ]
    : []),
  {
    title: "Profile",
    pathName: "profile",
    link: "/dashboard/profile",
    Icon: UserIcon,
  },
  {
    title: "Messages",
    pathName: "messages",
    link: "/dashboard/messages",
    Icon: MessageIcon,
  },
];
