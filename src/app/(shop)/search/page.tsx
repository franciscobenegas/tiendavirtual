import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, SearchProducts } from "@/components";
import { ItemsLateral } from "./components/ItemsLateral";
import { Gender } from "@prisma/client";

interface Props {
  searchParams: {
    page?: string;
    gender?: string;
    buscar?: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { gender, buscar } = searchParams;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page,
      gender: gender as Gender,
      buscar,
    });

  const CantReg = products.length;

  return (
    <main className=" flex justify-center items-center flex-col gap-5 mb-10">
      <section className="bg-white  w-11/12">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <ItemsLateral gender={gender} />

            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <SearchProducts CantReg={CantReg} />

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
