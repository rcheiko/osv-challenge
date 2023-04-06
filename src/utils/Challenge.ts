import { AddChallengeCardType } from "../types/addChallengeCard";

export function addChallenge(data: AddChallengeCardType) {
  const items = getChallengeList();
  items.push(data);
  localStorage.setItem("challengeList", JSON.stringify(items));
}

export function getChallengeList() {
  const challengeList = localStorage.getItem("challengeList");
  const items =
    typeof challengeList === "string" ? JSON.parse(challengeList) : [];
  return Array.isArray(items) ? items : [];
}
