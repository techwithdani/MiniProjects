import { useState } from "react";

const SearchFilter = () => {
  const [items] = useState([
    "Football",
    "Basketball",
    "Hockey",
    "Squash",
    "Athletics",
    "Cricket",
    "Volleyball",
    "Boxing",
    "Callisthenics",
  ]);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-dvh bg-gray-800 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-70 h-10 bg-white rounded p-2"
          />
          <div>
            <ul className="flex flex-col gap-3">
              {filteredItems.map((item) => (
                <li className="w-70 h-10 bg-white p-2 rounded">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
