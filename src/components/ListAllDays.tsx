import { AddChallengeCardType } from "../types/addChallengeCard";
import { Question, questionType } from "../utils/Question";
import { DeleteChallengeCard } from "./DeleteChallenge";

export function ListAllDays({
  items,
  setItems,
}: {
  items: any;
  setItems: Function;
}) {
  return (
    <ul>
      {items.map((elem: AddChallengeCardType, index: number) => (
        <li key={index}>
          <div className="flex flex-wrap justify-center items-center space-x-6 rounded-lg border border-gray-700 py-4 px-8 mb-4">
            <h1>Day {index}</h1>
            <div>
              {Question.map((data: questionType, index: number) => (
                <p key={index}>
                  {data.label} {elem[data.id]} {data.afterInput}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center space-x-2">
              <DeleteChallengeCard index={index} setItems={setItems} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
