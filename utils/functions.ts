import markers from "@/public/assets/data/markers.json";
import { EventsType, PlacesType, QuestsType } from "@/types/types";

export const filter = (tag: PlacesType | QuestsType | EventsType) =>
  markers.filter((marker) => {
    if (marker.tags.places?.includes(tag))
      return marker.tags.places.includes(tag);
    if (marker.tags.events?.includes(tag))
      return marker.tags.events.includes(tag);
    if (marker.tags.quests?.includes(tag))
      return marker.tags.quests.includes(tag);
  });
