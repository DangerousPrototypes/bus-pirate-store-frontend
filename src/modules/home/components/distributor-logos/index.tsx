"use client"
import Image from "next/image"

const distributorLogos = [
  { name: "Distributor 1", logo: "/brand/160x44.png", link: "https://distributor1.com" },
  { name: "Distributor 2", logo: "/brand/160x44.png", link: "https://distributor2.com" },
  { name: "Distributor 3", logo: "/brand/160x44.png", link: "https://distributor3.com" },
  { name: "Distributor 4", logo: "/brand/160x44.png", link: "https://distributor4.com" },
  { name: "Distributor 5", logo: "/brand/160x44.png", link: "https://distributor5.com" },
  { name: "Distributor 6", logo: "/brand/160x44.png", link: "https://distributor6.com" },
  { name: "Distributor 7", logo: "/brand/160x44.png", link: "https://distributor7.com" },
  { name: "Distributor 8", logo: "/brand/160x44.png", link: "https://distributor8.com" },
  { name: "Distributor 9", logo: "/brand/160x44.png", link: "https://distributor9.com" },
  { name: "Distributor 10", logo: "/brand/160x44.png", link: "https://distributor10.com" },
]

export default function DistributorLogos() {
  return (
    <div className="content-container py-12">
      <h2 className="text-center text-2xl font-medium mb-8">Our Distributors</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {distributorLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={logo.logo}
              alt={logo.name}
              width={160}
              height={44}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
