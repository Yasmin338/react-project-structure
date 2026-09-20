import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getProducts } from "../lib/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const PAGE_SIZE = 10;

function Products() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const skip = (page - 1) * PAGE_SIZE;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", search, page],
    queryFn: () => getProducts(search, PAGE_SIZE, skip),
  });

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Products</h1>

          <p className="text-gray-600">Browse products from DummyJSON</p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {isPending && (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-600">Loading products...</p>
          </div>
        )}

        {isError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold text-red-700">
              Something went wrong
            </h2>

            <p className="text-red-600">
              {error instanceof Error
                ? error.message
                : "Unable to load products."}
            </p>
          </div>
        )}

        {!isPending && !isError && data && data.products.length === 0 && (
          <div className="rounded-lg bg-white p-10 text-center shadow">
            <h2 className="text-xl font-semibold text-gray-800">
              No products found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching for another product.
            </p>
          </div>
        )}

        {!isPending && !isError && data && data.products.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-52 w-full object-cover"
                  />

                  <CardHeader>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                      {product.description}
                    </p>

                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-600">
                        ${product.price}
                      </span>

                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                        ⭐ {product.rating}
                      </span>
                    </div>

                    <Link
                      to={`/products/${product.id}`}
                      className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition hover:bg-blue-700"
                    >
                      View Details
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((current) => current - 1)}
                className="rounded-lg border bg-white px-5 py-2 font-medium disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              <span className="rounded-lg bg-gray-900 px-4 py-2 font-medium text-white">
                Page {page} of {totalPages}
              </span>

              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((current) => current + 1)}
                className="rounded-lg border bg-white px-5 py-2 font-medium disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Products;
