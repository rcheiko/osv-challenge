import { useForm } from "react-hook-form";
import { addChallenge, getChallengeList } from "../utils/Challenge";
import { ButtonAction } from "./button";
import { FieldForm } from "./FieldForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Question, questionType } from "../utils/Question";

export function AddChallengeCard({ setItems }: { setItems: Function }) {
  const schema = z.object({
    timeSlept: z.number().min(0).max(24),
    quantityWater: z.number().min(0),
    timeEat: z.number().min(0),
    timeMeditated: z.number().min(0),
    feelingTonight: z.number().min(0).max(10),
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
      {
        Question.map((elem: questionType, index: number) => (
          <FieldForm key={index}
            label={elem.label}
            afterInput={elem.afterInput}
            id={elem.id}
            error={errors[elem.id]?.message as string}
            {...register(elem.id, { valueAsNumber: true })}
          />
        ))
      }
      {
        Object.keys(errors).length > 0
        ? <div className="pt-4" >
            <ButtonAction action="Enregistrer" disabled="true" />
          </div> 
        : <div className="pt-4" >
            <ButtonAction action="Enregistrer" />
          </div>
      }
    </form>
  );
}
