import Navbar from "./Navbar";
import { useRecoilValue } from "recoil";
import RecentSearchState from "../Atom/RecentSearchState";
import { useState } from "react";
//

const SearchPage = () => {
  const recentArray = useRecoilValue(RecentSearchState);
  const [query, setQuery] = useState("");

  const keyHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(query);
    }
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mx-20 my-32 text-center">
        <h1 className="text-8xl font-bold mx-20 py-10 text-[#666A6E]">
          InShort
        </h1>
        <input
          type="text"
          placeholder="Search Articles Here..."
          className="px-5 py-3 w-2/4 shadow-2xl rounded-full my-10 .placeholder-black"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyPress={keyHandle}
        />
        <h1 className="my-3 text-[#696969]">Recent Searches</h1>

        {recentArray.map((e) => {
          return <span className="mx-2 text-[#9BA3AF]">{e}</span>;
        })}
      </div>
    </div>
  );
};
export default SearchPage;
