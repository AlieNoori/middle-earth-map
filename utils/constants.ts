import { Icon } from "leaflet";
import { EventsType, PlacesType } from "@/types/types";
import {
  battleIcon,
  darkIcon,
  deathIcon,
  dwarfIcon,
  elfIcon,
  encounterIcon,
  hobbitIcon,
  humanIcon,
} from "@/utils/MapIcon";

export const MAP_HEIGHT = 4334;
export const DIVIDER = 4;

export const places: { tag: PlacesType; icon: Icon; name: string }[] = [
  { tag: "human", icon: humanIcon, name: "Humans" },
  { tag: "dwarven", icon: dwarfIcon, name: "Dwarves" },
  { tag: "elven", icon: elfIcon, name: "Elves" },
  { tag: "hobbit", icon: hobbitIcon, name: "Hobbits" },
  { tag: "dark", icon: darkIcon, name: "Evil" },
];

export const events: { tag: EventsType; icon: Icon; name: string }[] = [
  { tag: "battle", icon: battleIcon, name: "Battles" },
  { tag: "encounter", icon: encounterIcon, name: "Encounter" },
  { tag: "death", icon: deathIcon, name: "Deaths" },
];

export const quests = ["ring", "erebor"];
