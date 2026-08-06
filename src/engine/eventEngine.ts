import { events } from "../data/events";

export function getRandomEvent() {
  return events[Math.floor(Math.random() * events.length)];
}