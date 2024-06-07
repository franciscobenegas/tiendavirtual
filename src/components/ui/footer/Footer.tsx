import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <div>
        <span className={`${titleFont.className} antialiased font-bold `}>
          Tienda{" "}
        </span>
        <span>| shop </span>
        <span>Copyright ©franciscoBenegas {new Date().getFullYear()}</span>
      </div>

      <Link href="/" className="mx-3 hover:underline">
        Politicas de Privacidad
      </Link>
    </div>
  );
};
