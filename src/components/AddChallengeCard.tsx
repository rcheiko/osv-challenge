import { useForm } from "react-hook-form";
import { addChallenge, getChallengeList } from "../utils/Challenge";
import { ButtonAction } from "./button";
import { FieldForm } from "./FieldForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function AddChallengeCard({ setItems }: { setItems: Function }) {
  const schema = z.object({
    timeSlept: z.number().positive().max(24),
    quantityWater: z.number().positive(),
    timeEat: z.number().positive(),
    timeMeditated: z.number().positive(),
    feelingTonight: z.number().positive().max(10),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => {
    addChallenge(data);
    setItems(getChallengeList());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit as any)}
      className="space-y-2 my-4 text-lg font-medium"
    >
      <FieldForm
        label="😴 Combien de temps tu as dormis ?"
        afterInput="Heures"
        id="timeSlept"
        error={errors.timeSlept?.message as string}
        {...register("timeSlept", { valueAsNumber: true })}
      />
      <FieldForm
        label="🍺 Quelle quantité d'eau tu as bu ?"
        afterInput="Centilitre"
        id="quantityWater"
        error={errors.quantityWater?.message as string}
        {...register("quantityWater", { valueAsNumber: true })}
      />
      <FieldForm
        label="🍪 Tu as  grignotté combien de fois ?"
        afterInput="Fois"
        id="timeEat"
        error={errors.timeEat?.message as string}
        {...register("timeEat", { valueAsNumber: true })}
      />
      <FieldForm
        label="🍃 J'ai médité combien de minutes ?"
        afterInput="Minutes"
        id="timeMeditated"
        error={errors.timeMeditated?.message as string}
        {...register("timeMeditated", { valueAsNumber: true })}
      />
      <FieldForm
        label="🙄 Je me sens comment ce soir ?"
        afterInput="/10"
        id="feelingTonight"
        error={errors.feelingTonight?.message as string}
        {...register("feelingTonight", { valueAsNumber: true })}
      />

      <div className="pt-4" >
        <ButtonAction action="Enregistrer" />
      </div>
    </form>
  );
}
