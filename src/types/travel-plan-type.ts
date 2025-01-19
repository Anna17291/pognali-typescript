type Event = {
  country: string;
  description: string;
};

export type TravelPlanType = {
  transport: string[];
  tags: string[];
  travelers: number;
  duration: number;
  isBaby: boolean;
  travelDateStart: string;
  travelDateEnd: string;
  countries: string[];
  events: Event[];
};
