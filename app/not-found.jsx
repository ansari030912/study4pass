import Link from "next/link";

export default async function NotFound() {
  return (
    <section class="py-24 md:py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="py-24 px-10 md:px-18 bg-white text-center max-w-5xl mx-auto rounded-3xl">
          <h2 class="mb-6 font-heading text-7xl font-bold text-center">404</h2>
          <p class="mb-16 text-2xl md:text-3xl text-gray-500 font-medium">
            That page isn’t doesn’t exist or we can’t find it.
          </p>
          <div class="flex justify-center">
            <Link
              href="/"
              class="inline-flex justify-center items-center text-center h-18 py-8 px-10 font-semibold text-white hover:text-white focus:text-white bg-black hover:bg-gray-800 focus:bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-200 transition duration-200"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
