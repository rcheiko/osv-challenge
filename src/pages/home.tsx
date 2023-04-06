import { useState } from "react";
import { AddChallengeCard } from "../components/AddChallengeCard";
import Root from "../layout/root";
import { getChallengeList } from "../utils/Challenge";
import { ListAllDays } from "../components/ListAllDays";

export default function Home() {
  const [items, setItems] = useState(getChallengeList());

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(items)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <>
      <Root>
        <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 bg-gray-300 p-4 mx-auto overflow-hidden">
          <AddChallengeCard setItems={setItems} />
          <ListAllDays items={items} setItems={setItems} />
          <button
            type="button"
            onClick={exportData}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded-lg"
          >
            Export Data
          </button>
        </div>
      </Root>
    </>
  );
}
