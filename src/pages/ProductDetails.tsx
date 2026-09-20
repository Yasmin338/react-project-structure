import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { getProduct } from "../lib/api";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id!),
    enabled: Boolean(id),
  });

  if (isPending) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto max-w-4xl py-20 text-center">
          <p className="text-lg text-gray-600">Loading product...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="mb-2 text-xl font-semibold text-red-700">
              Something went wrong
            </h2>

            <p className="text-red-600">
              {error instanceof Error
                ? error.message
                : "Unable to load product."}
            </p>
          </div>

          <Link
            to="/products"
            className="mt-6 inline-block text-blue-600 hover:underline"
          >
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/products"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-white">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full min-h-96 w-full object-cover"
              />
            </div>

            <div>
              <CardHeader>
                <CardTitle className="text-3xl">{product.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="mb-6 text-gray-600">{product.description}</p>

                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium">Price</span>

                    <span className="text-xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium">Rating</span>

                    <span>⭐ {product.rating}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium">Category</span>

                    <span>{product.category}</span>
                  </div>

                  {product.brand && (
                    <div className="flex justify-between border-b pb-3">
                      <span className="font-medium">Brand</span>

                      <span>{product.brand}</span>
                    </div>
                  )}

                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium">Stock</span>

                    <span>{product.stock}</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default ProductDetails;
