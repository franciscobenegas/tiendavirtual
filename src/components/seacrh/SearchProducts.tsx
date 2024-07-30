"use client";
import { IoSearchCircle } from "react-icons/io5";

export const SearchProducts = () => {
  const onBuscar = () => {
    console.log("Boton de buscar");
  };

  return (
    <div className="flex flex-wrap items-center justify-between text-sm tracking-widest uppercase ">
      <p className="text-gray-500  ">50 Items</p>

      <div className="pt-2 relative mx-auto text-gray-600 mb-2">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5  pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Buscar"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4"
          onClick={() => onBuscar()}
        >
          <IoSearchCircle
            size={40}
            className="absolute -top-3 -left-6 cursor-pointer  hover:size-12 hover:-left-7 hover:-top-4 transition"
          />
        </button>
      </div>

      <div className="flex items-center">
        <p className="text-gray-500  ">Ordenar: </p>
        <select className="font-medium text-gray-700 bg-transparent  focus:outline-none">
          <option value="#">Recomendado</option>
          <option value="#">Cantidad</option>
          <option value="#">Precio</option>
        </select>
      </div>
    </div>
  );
};
