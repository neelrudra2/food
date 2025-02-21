import Image from "next/image";

export default function PaymentPage() {
  return (
    <div
      className="flex items-center justify-center h-screen text-center bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="User Account"
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">Payment Page</h1>
        <p className="text-lg text-gray-600 mb-4">
          This page is currently under maintenance. We'll be back soon!
        </p>
        <p className="text-gray-500">Thank you for your patience.</p>
      </div>
    </div>
  );
}
