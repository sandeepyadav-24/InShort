import { atom } from "recoil";
const RecentSearchState = atom({
  key: "RecentSearchState",
  default: [
    "Budget 2024",
    "Virat Kohli ",
    "Bollywood latest song ",
    "Arijit Singh ",
  ],
});
export default RecentSearchState;
