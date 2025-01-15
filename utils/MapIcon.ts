import L, { PointExpression } from "leaflet";
import battleImg from "@/public/assets/icons/swords.svg";
import deathImg from "@/public/assets/icons/coffin.svg";
import encounterImg from "@/public/assets/icons/eye.svg";
import hobbitImg from "@/public/assets/icons/hobbit.svg";
import dwarfImg from "@/public/assets/icons/dwarf.svg";
import elfImg from "@/public/assets/icons/elf.svg";
import humanImg from "@/public/assets/icons/castle.svg";
import darkImg from "@/public/assets/icons/evil.svg";

const iconSize: PointExpression = [30, 30];
const iconAnchor: PointExpression = [15, 30];
const popupAnchor: PointExpression = [3, -27];

export const battleIcon = L.icon({
  iconUrl: battleImg.src,

  iconSize: iconSize, // size of the icon
  iconAnchor: iconAnchor, // point of the icon which will correspond to marker's location
  popupAnchor: popupAnchor, // point from which the popup should open relative to the iconAnchor
  //    autoPanPaddingTopLeft: L.Point(1000, 1000)
});

export const deathIcon = L.icon({
  iconUrl: deathImg.src,

  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
});

export const encounterIcon = L.icon({
  iconUrl: encounterImg.src,

  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
});

export const hobbitIcon = L.icon({
  iconUrl: hobbitImg.src,

  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
});

export const dwarfIcon = L.icon({
  iconUrl: dwarfImg.src,

  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
});

export const elfIcon = L.icon({
  iconUrl: elfImg.src,

  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
});

export const humanIcon = L.icon({
  iconUrl: humanImg.src,

  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
});

export const darkIcon = L.icon({
  iconUrl: darkImg.src,

  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
});
