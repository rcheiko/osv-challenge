import { useState } from "react";
import { AddChallengeCard } from "../components/AddChallengeCard";
import { DeleteChallengeCard } from "../components/DeleteChallenge";
import Root from "../layout/root";
import { getChallengeList } from "../utils/Challenge";
import { AddChallengeCardType } from "../types/addChallengeCard";

export default function Home() {
  const [items, setItems] = useState(getChallengeList());

  return (
    <>
      <Root>
        <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 bg-gray-300 p-4 mx-auto overflow-hidden">
          <AddChallengeCard setItems={setItems} />
          <ul className="mt-4 space-y-2">
            {items.map((elem: AddChallengeCardType, index) => (
              <li key={index}>
                <div className="flex flex-wrap justify-center items-center space-x-6 rounded-lg border border-gray-700 py-4 px-8 mb-4">
                  <h1>Day {index}</h1>
                  <div>
                    <p>
                      😴 Combien de temps tu as dormis ? {elem.timeSlept}
                      Heures
                    </p>
                    <p>
                      🍺 Quelle quantité d'eau tu as bu ? {elem.quantityWater}
                      Centilitre
                    </p>
                    <p>
                      🍪 Tu as grignotté combien de fois ? {elem.timeEat} Fois
                    </p>
                    <p>
                      🍃 J'ai médité combien de minutes ? {elem.timeMeditated}
                      Minutes
                    </p>
                    <p>
                      🙄 Je me sens comment ce soir ? {elem.feelingTonight}/10
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center space-x-2">
                    <DeleteChallengeCard index={index} setItems={setItems} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Root>
    </>
  );
}
