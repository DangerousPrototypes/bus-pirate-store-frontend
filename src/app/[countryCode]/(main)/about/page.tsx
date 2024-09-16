export default function Page() {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">About Us</h1>
      <p className="text-lg leading-relaxed text-gray-700 mb-12 text-center">
        Welcome to the Bus Pirate Shop by Where Labs LLC, maker of the Bus Pirate and accessories.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">Shipping</h2>
          <p className="text-gray-700 mb-4">
            We strive to ship orders within 24 hours, except weekends, holidays, or when items are on back order.
          </p>
          <p className="text-gray-700 mb-4">
            Orders ship from our office in Shenzhen, China. Delivery times vary by method.
          </p>
          <p className="text-gray-700">
            Some shipping methods allow you to pre-pay VAT for various destinations (such as the EU). You are responsible for any import duties and/or VAT when using a shipping method without pre-paid tax.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">Privacy</h2>
          <p className="text-gray-700 mb-4">
            We only share your data as required to process your order:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
            <li>With the payment provider (Stripe or Paypal) to process payments</li>
            <li>With your selected shipping provider to ship your order</li>
            <li>With law enforcement when legally required</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We do not share your data with any other third parties.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 pb-2 border-gray-200">Spam</h2>
          <p className="text-gray-700">
            We only send you email updates about your active orders. We don't send spam, and we don't sell your email address to anyone.
          </p>
        </div>
      </div>
    </section>
  );
}
