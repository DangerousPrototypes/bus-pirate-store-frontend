import React from "react"

const DistributorLogoGrid = () => {
  const distributors = [
    {
      name: "DirtyPCBs",
      url: "https://dirtypcbs.com/store/designer/browse/ian",
      logo: "/dirtypcbs.png",
    },
    {
      name: "blinkinlabs",
      url: "https://shop.blinkinlabs.com/collections/development-tools",
      logo: "/blinkinlabs.png",
    },
    {
      name: "electrokit",
      url: "https://www.electrokit.com/search.php?keyword=bus+pirate&search=",
      logo: "/electrokit.png",
    },
    {
      name: "lab401",
      url: "https://lab401.com/search?q=bus+pirate",
      logo: "/lab401.png",
    },
    {
      name: "adafruit",
      url: "https://www.adafruit.com/search?q=bus+pirate",
      logo: "/adafruit.png",
    },
    {
      name:"aliexpress",
      url:"https://a.aliexpress.com/_Ejx2Bvr",
      logo:"/aliexpress.png"
    },
    {
      name: "pihut",
      url: "https://thepihut.com/search?type=product&q=bus+pirate",
      logo: "/pihut.png",
    },
    {
      name: "hackerwarehouse",
      url: "https://hackerwarehouse.com/?s=bus+pirate&post_type=product",
      logo: "/hackerwarehouse.png",
    }
  ]

  return (
    <>
      <div className="py-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-ui-fg-base">
          Distributors
        </h2>
        <div className="grid grid-cols-5 gap-6  w-full">
          {distributors
            .sort(() => Math.random() - 0.5)
            .map((distributor, index) => (
              <a
                key={index}
                href={distributor.url}
                className="flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  src={distributor.logo}
                  alt={distributor.name}
                  width={"100%"}
                  className="rounded"
                />
              </a>
            ))}
        </div>
      </div>
    </>
  )
}

export default DistributorLogoGrid
