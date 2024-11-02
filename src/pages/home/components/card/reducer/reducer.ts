import { Country } from "@/info";
type CountriesReducerAction =
  | { type: "upvote"; payload: { id: string } }
  | { type: "sort"; payload: { sortType: "asc" | "desc" } }
  | { type: "create"; payload: { country: Country } }
  | { type: "delete"; payload: { id: string } }
  | { type: "get_initial_country"; payload: Country[] }
  | { type: "update"; payload: { id: string; updates: Partial<Country> } };

export const reducer = (state: Country[], action: CountriesReducerAction) => {
  switch (action.type) {
    case "get_initial_country":
      return action.payload;
    case "upvote":
      return state.map((country) =>
        country.id === action.payload.id
          ? { ...country, like: country.like + 1 }
          : country,
      );
    case "sort":
      return [...state].sort((a, b) => {
        return action.payload.sortType === "asc"
          ? a.like - b.like
          : b.like - a.like;
      });
    case "create": {
      const newCountry: Country = {
        ...action.payload.country,
        id: (state.length + 1).toString(),
      };
      console.log(newCountry);
      return [...state, newCountry];
    }
    case "update": {
      return state.map((country) =>
        country.id == action.payload.id
          ? { ...country, ...action.payload.updates }
          : country,
      );
    }
    case "delete":
      return state.filter((country) => country.id !== action.payload.id);
    default:
      return state;
  }
};
