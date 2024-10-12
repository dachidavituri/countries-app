import { Country } from "@/info";
type CountriesReducerAction =
  | { type: "upvote"; payload: { id: number } }
  | { type: "sort"; payload: { sortType: "asc" | "desc" } }
  | { type: "create"; payload: { country: Country } }
  | { type: "delete"; payload: { id: number } }
  | { type: "restore"; payload: { id: number } };

export const reducer = (state: Country[], action: CountriesReducerAction) => {
  switch (action.type) {
    case "upvote":
      return state.map((country) =>
        country.id === action.payload.id
          ? { ...country, like: country.like + 1 }
          : country
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
        id: state.length + 1,
      };
      console.log(newCountry);
      return [...state, newCountry];
    }

    case "delete":
      return state.map((country) =>
        country.id == action.payload.id
          ? { ...country, isDeleted: true }
          : country
      );
    case "restore":
      return state.map((country) =>
        country.id == action.payload.id
          ? { ...country, isDeleted: false }
          : country
      );
    default:
      return state;
  }
};
