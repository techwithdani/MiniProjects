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
        <div>
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <ul>
              {filteredItems.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
