import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { text } from "stream/consumers";

interface Props {
  gender?: string;
}

export const ItemsLateral = ({ gender }: Props) => {
  console.log("ItemGender: ", gender);

  return (
    <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 mt-0 md:mt-24">
      <Link
        href="/search"
        className={clsx(" block font-medium  hover:underline ", {
          "text-blue-600": gender === undefined,
        })}
      >
        Todos
      </Link>

      <Link
        href="/search?gender=men"
        className={clsx("block font-medium  hover:underline", {
          "text-blue-600": gender === "men",
        })}
      >
        Hombre
      </Link>

      <Link
        href="/search?gender=women"
        className={clsx("block font-medium  hover:underline", {
          "text-blue-600": gender === "women",
        })}
      >
        Mujeres
      </Link>

      <Link
        href="/search?gender=kid"
        className={clsx("block font-medium  hover:underline", {
          "text-blue-600": gender === "kid",
        })}
      >
        Niños
      </Link>
    </div>
  );
};
