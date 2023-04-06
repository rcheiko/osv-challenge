import { getChallengeList } from "../utils/Challenge";
import { ButtonAction } from "./button";

export function DeleteChallengeCard({ index, setItems }: { index: number, setItems: Function }) {

  const deleteItem = (index: number) => () => {
    const items = getChallengeList();
    items.splice(index, 1);
    localStorage.setItem("challengeList", JSON.stringify(items));
    setItems(items);
  };

  return (
    <div onClick={deleteItem(index)}>
      <ButtonAction action="Supprimer" />
    </div>
  );
}
