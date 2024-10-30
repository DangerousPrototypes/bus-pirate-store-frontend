import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import { ProductCollectionWithPreviews } from "types/global"
import { cache, Suspense } from "react"
import Carousel from "@modules/home/components/carousel"
import DistributorLogoGrid from "@modules/home/components/distributors-grid"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"

export const metadata: Metadata = {
  title: "Bus Pirate Shop",
  description:
    "Get Bus Pirate products and accessories from the official Bus Pirate Shop",
}

const getCollectionsWithProducts = cache(
  async (): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

type Props = {
  searchParams: {
    page?: string
  }
}
export default async function Home({ searchParams }: Props) {
  const collections = await getCollectionsWithProducts()
  const region = await getRegion()
  const page = Number(searchParams.page) ? Number(searchParams.page) : 1

  if (!collections || !region) {
    return null
  }

  const slides = ["/banner1.png"]

  return (
    <>
      <Carousel autoSlide={true}>
        {slides.map((s, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center"
          >
            {/* eslint-disable @next/next/no-img-element */}
            <img src={s} alt={`Slide ${index}`} width={"100%"} />
          </div>
        ))}
      </Carousel>

      <DistributorLogoGrid />
      <div className="py-12 px-4" id="latest">
        <ul className="flex flex-col gap-x-6">
          <h2 className="text-2xl font-bold mb-6 text-ui-fg-base">
            Latest Products
          </h2>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts sortBy={"created_at"} page={page} grid={"4"} />
          </Suspense>
        </ul>
      </div>
    </>
  )
}
