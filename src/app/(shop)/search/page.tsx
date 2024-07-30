import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, SearchProducts } from "@/components";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page,
    });

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
              <SearchProducts />

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
