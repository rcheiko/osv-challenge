import { InputHTMLAttributes, forwardRef } from "react";

export const FieldForm = 
  forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement> & {
      label: string,
      afterInput : string,
      id: string,
      error: string

    }>(function BalanceInput(params, ref) {

  const { label, afterInput, id, error, ...rest } = params;

  return (
    <div>
      <label htmlFor={id} className="text-lg font-medium">
        {label}
      </label>
      <div className="flex pt-1">
        <input
          type="number"
          id={id}
          className="border-2 border-gray-300 rounded-md mr-2 w-2/3"
          ref={ref}
          {...rest}
        />
        <label htmlFor={id}>{afterInput}</label>
      </div>
      {error && <p className="font-normal">{error}</p>}
    </div>
  );
})
