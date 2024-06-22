"use client";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Image from "next/image";
import { any } from "zod";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, ProductGridItem, Title } from "@/components";
import { Gender } from "@prisma/client";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default function SearchPage({ searchParams }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productsAll, setProductAll] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [genero, setGenero] = useState("");
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  console.log(page);

  useEffect(() => {
    itemsProduct();
  }, [page]);

  // useEffect(() => {
  //   itemsProductGender();
  // }, [genero]);

  const itemsProduct = async () => {
    const { products, currentPage, totalPages } =
      await getPaginatedProductsWithImages({ page });
    //setProductAll(products);
    setTotalPaginas(totalPages);
    //console.log(products);
  };

  // const itemsProductGender = async () => {
  //   const { products, currentPage, totalPages } =
  //     await getPaginatedProductsWithImages({ page, genero });
  //   //setProductAll(products);
  //   setTotalPaginas(totalPages);
  //   //console.log(products);
  // };

  function handleSearch(e: any) {
    setSearchQuery(e.target.value);
  }

  function handleCheckbox(e: any) {
    const category = e.target.id;
    setGenero(category);
    if (e.target.checked) {
      setSelectedCategories((prevCategories): any => [
        ...prevCategories,
        category,
      ]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    }
  }

  const displayedItems = productsAll
    .filter(
      (product: any) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category as never)
    )
    .filter((product: any) =>
      product.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    )
    .map((product: any) => (
      <ProductGridItem key={product.slug} product={product} />
    ));

  return (
    <main className="mx-auto flex justify-center items-center flex-col gap-2">
      <section className="relative">
        <input
          type="text"
          id="search"
          className="p-2 bg-gray-50 border-gray-300 rounded-md"
          placeholder="Buscar Articulos..."
          onChange={handleSearch}
        />
      </section>
      <section className="flex flex-col md:flex-row mx-auto container max-w-7xl">
        <article className="space-y-6 p-2 w-full max-w-[12rem]">
          <h2 className="text-xl font-semibold">Categorias</h2>
          <aside className="flex sm:flex-col gap-2">
            <div className="flex flex-row items-center hover:bg-slate-200 rounded transition-all">
              <input
                type="checkbox"
                id="men"
                className="mr-1 w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer "
                onChange={handleCheckbox}
              />

              <label htmlFor="men">Hombre</label>
            </div>
            <div className="flex flex-row items-center hover:bg-slate-200 rounded">
              <input
                type="checkbox"
                id="women"
                className="mr-1 w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer"
                onChange={handleCheckbox}
              />
              <label htmlFor="women">Mujeres</label>
            </div>
            <div className="flex flex-row items-center hover:bg-slate-200 rounded">
              <input
                type="checkbox"
                id="kid"
                className="mr-1  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer"
                onChange={handleCheckbox}
              />
              <label htmlFor="kid">Niños</label>
            </div>
          </aside>
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Precios</h2>
            <aside className="flex sm:flex-col gap-2 mt-4 ">
              <div className="flex flex-row items-center hover:bg-slate-200 rounded">
                <input
                  type="checkbox"
                  id="CategoryOne"
                  className="mr-1  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer"
                  onChange={handleCheckbox}
                />
                <label htmlFor="CategoryOne">Mayor a 10.000</label>
              </div>
              <div className="flex flex-row items-center hover:bg-slate-200 rounded">
                <input
                  type="checkbox"
                  id="CategoryOne"
                  className="mr-1  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer"
                  onChange={handleCheckbox}
                />
                <label htmlFor="CategoryOne">Mayor a 20.000</label>
              </div>
              <div className="flex flex-row items-center hover:bg-slate-200 rounded">
                <input
                  type="checkbox"
                  id="CategoryOne"
                  className="mr-1  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer"
                  onChange={handleCheckbox}
                />
                <label htmlFor="CategoryOne">Mayor a 50.000</label>
              </div>
              <div className="flex flex-row items-center hover:bg-slate-200 rounded">
                <input
                  type="checkbox"
                  id="CategoryOne"
                  className="mr-1  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white cursor-pointer"
                  onChange={handleCheckbox}
                />
                <label htmlFor="CategoryOne">Mayor a 100.000</label>
              </div>
            </aside>
          </div>
        </article>

        <div>
          <article className=" mb-20 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-content-center p-2">
            {displayedItems}
          </article>
          <Pagination totalPages={totalPaginas} />
        </div>
      </section>
    </main>
  );
}
