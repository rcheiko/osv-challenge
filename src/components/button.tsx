type ButtonActionProps = {
  action: "Ajouter" | "Edit" | "Supprimer" | "Enregistrer" | "Annuler";
  disabled?: "true" | "false";
};

export function ButtonAction({
  action,
  disabled = "false",
}: ButtonActionProps) {
  if (disabled === "true")
    return (
      <div className="flex justify-center items-center space-x-4">
        <button className="bg-gray-500 text-white font-bold py-1 px-4 rounded-lg cursor-not-allowed">
          {action}
        </button>
      </div>
    );
  else if (action === "Enregistrer")
    return (
      <div className="flex justify-center items-center space-x-4">
        <button
          type="submit"
          placeholder={action}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-4 rounded-lg"
        >
          {action}
        </button>
      </div>
    );
  else if (action === "Annuler")
    return (
      <div className="flex justify-center items-center space-x-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg">
          {action}
        </button>
      </div>
    );

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg"
      >
        {action}
      </button>
    </div>
  );
}
