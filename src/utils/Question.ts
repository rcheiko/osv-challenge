export const Question = [
    {
        label: "😴 Combien de temps tu as dormis ?",
        afterInput: "heures",
        id: "timeSlept"
    },
    {
        label: "🍺 Quelle quantité d'eau tu as bu ?",
        afterInput: "Centilitre",
        id: "quantityWater"
    },
    {
        label: "🍪 Tu as  grignotté combien de fois ?",
        afterInput: "fois",
        id: "timeEat"
    },
    {
        label: "🍃 J'ai médité combien de minutes ?",
        afterInput: "Minutes",
        id: "timeMeditated"
    },
    {
        label: "🙄 Je me sens comment ce soir ?",
        afterInput: "/10",
        id: "feelingTonight"
    }
] as const;

export interface questionType {
    label: string;
    afterInput: "heures" | "Centilitre" | "fois" | "Minutes" | "/10";
    id: "timeSlept" | "quantityWater" | "timeEat" | "timeMeditated" | "feelingTonight";
}