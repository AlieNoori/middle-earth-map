export type PlacesType = "human" | "dwarven" | "elven" | "hobbit" | "dark";
export type QuestsType = "ring" | "erebor";
export type EventsType = "battle" | "encounter" | "death";

export type MapProps = {
  image: { src: string; width: number; height: number };
};

export type MarkersProps = { type: "events" | "places" };
