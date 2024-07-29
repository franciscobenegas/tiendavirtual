import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid } from "@/components";
import { IoSearchCircle } from "react-icons/io5";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function SearchPage({ params, searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page,
    });

  // const onBuscar = () => {
  //   console.log("Boton ");
  // };

  // console.log(products);
  // console.log(totalPages);

  return (
    <main className=" flex justify-center items-center flex-col gap-5 mb-10">
      <section className="bg-white  w-11/12">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
              <a
                href="#"
                className="block font-medium text-gray-500  hover:underline"
              >
                Jackets & Coats
              </a>
              <a
                href="#"
                className="block font-medium text-gray-500  hover:underline"
              >
                Hoodies
              </a>
              <a
                href="#"
                className="block font-medium text-blue-600  hover:underline"
              >
                T-shirts & Vests
              </a>
              <a
                href="#"
                className="block font-medium text-gray-500   hover:underline"
              >
                Shirts
              </a>
              <a
                href="#"
                className="block font-medium text-gray-500   hover:underline"
              >
                Blazers & Suits
              </a>
              <a
                href="#"
                className="block font-medium text-gray-500   hover:underline"
              >
                Jeans
              </a>
              <a
                href="#"
                className="block font-medium text-gray-500   hover:underline"
              >
                Trousers
              </a>
              <a
                href="#"
                className="block font-medium text-gray-500   hover:underline"
              >
                Orden
              </a>
              <a
                href="#"
                className="block font-medium text-gray-500   hover:underline"
              >
                Underwear
              </a>
            </div>

            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p className="text-gray-500  ">{products.length} Items</p>

                <div className="pt-2 relative mx-auto text-gray-600">
                  <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Buscar"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4"
                    // onClick={onBuscar}
                  >
                    <IoSearchCircle
                      size={40}
                      className="absolute -top-3 -left-6 cursor-pointer  hover:size-12 hover:-left-7 hover:-top-4 transition"
                    />
                  </button>
                </div>

                <div className="flex items-center">
                  <p className="text-gray-500  ">Orden</p>
                  <select className="font-medium text-gray-700 bg-transparent  focus:outline-none">
                    <option value="#">Recomendado</option>
                    <option value="#">Cantidad</option>
                    <option value="#">Precio</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <div className="flex flex-col items-center justify-center w-full">
                  <ProductGrid products={products} />

                  <Pagination totalPages={totalPages} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
