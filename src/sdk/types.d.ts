// Types
// 2024-08-06T09:13:00Z
// v2.0

// Calendar
export type TCalendar = {
  name: string;
  color: string;
  days: TDay[];
  plannedDays?: TDay[];
};
export type TDay = {
  date: string; // Es. "2023-01-01"
  intensity?: number;
};

// Auth
export type TAuthStatus = {
  user: TAuthUser;
};
export type TAuthUser = {
  id: number;
  email: string;
};
