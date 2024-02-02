import {  Clock3, Calendar, List } from "lucide-react";
import { type NavItem } from "@/types";

import { Person } from "@/types";

export const people: Person[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];


export const NavItems: NavItem[] = [
  {
    title: "Zeiterfassung",
    icon: Clock3,
    href: "/",
    color: "text-slate-400",
  },
  {
    title: "Nach Tagen",
    icon: Calendar,
    href: "/calendar",
    color: "text-slate-400",
  },
  {
    title: "Nach Aufgaben",
    icon: List,
    href: "/list",
    color: "text-slate-400"
  }
];