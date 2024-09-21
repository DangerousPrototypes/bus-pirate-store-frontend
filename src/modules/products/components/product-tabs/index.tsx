"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Accordion from "./accordion"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {

  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Distributors", // Replaced "Shipping & Returns"
      component: <DistributorsTab product={product} />, // New Distributors Tab
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </div>
  )
}

const DistributorsTab = ({ product }: any) => {
  // Assuming the product.meta field is a JSON string and needs to be parsed
  let distributors = [];

  try {
    // Parse the distributors metadata if it exists and is a valid JSON string
    if (product.metadata?.distributors) {
      distributors = JSON.parse(product.metadata.distributors);
    }
  } catch (error) {
    console.error("Failed to parse distributors metadata:", error);
  }

  if (!distributors?.length) {
    return <p>No distributors available for this product.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
      {distributors.map(
        (
          logo: { url: string | undefined; image: string | StaticImport; name?: string },
          index: number | null | undefined
        ) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={logo.image}
              alt={logo.name || "Distributor"}
              width={160}
              height={44}
              className="object-contain"
            />
          </a>
        )
      )}
    </div>
  );
};


export default ProductTabs
