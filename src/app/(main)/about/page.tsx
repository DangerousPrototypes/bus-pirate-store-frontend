export default function Page() {
  return (
    <section className="max-w-6xl mx-auto p-8 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-black">About Us</h1>
      <p className="text-lg leading-relaxed text-black mb-12">
        Welcome to the Bus Pirate Shop by Where Labs LLC, maker of the Bus
        Pirate and accessories.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">Shipping</h2>
          <p className="text-black mb-4">
            We strive to ship orders within 24 hours, except weekends, holidays,
            or when items are on back order.
          </p>
          <p className="text-black mb-4">
            Orders ship from our office in Shenzhen, China. Delivery times vary
            by method.
          </p>
          <p className="text-black">
            Some shipping methods allow you to pre-pay VAT for various
            destinations (such as the EU). The logistics provider charges a 2% fee on the prepaid VAT amount.
            You are responsible for any import duties and/or VAT when using a shipping method without pre-paid tax.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">Privacy</h2>
          <p className="text-black mb-4">
            We only share your data as required to process your order:
          </p>
          <ul className="list-disc list-inside text-black space-y-2 pl-4">
            <li>
              With the payment provider (Stripe or Paypal) to process payments
            </li>
            <li>With your selected shipping provider to ship your order</li>
            <li>With law enforcement when legally required</li>
          </ul>
          <p className="text-black mt-4">
            We do not share your data with any other third parties.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">Spam</h2>
          <p className="text-black">
            We only send you email updates about your active orders. We
            don&apos;t send spam, and we don&apos;t sell your email address to
            anyone.
          </p>
        </div>
      </div>
    </section>
  )
}
