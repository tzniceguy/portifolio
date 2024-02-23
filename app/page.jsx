import Image from "next/image"

export default function Home() {
  return (
    <main className="p-5 bg-gray-50/90 py-12 lg:py-24">
      <div className="px-4 md:px-6">
        <div className="grid max-w-3xl gap-8 mx-auto items-center space-y-4 lg:gap-16 lg:max-w-5xl lg:grid-colos-2 lg:space-y-0">
          <div className="space-y-4 text-center lg:order-2 lg-space-y-3 xl:space-y-4">
            <div className="space-y-2">
              <h1 className=" text-xl font-semibold"> Hello I am  Tzniceguy,</h1>
              <p className="inline-block text-2xl font-semibold tracking-wide md:text-3xl lg:text-4xl">
                Developer
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-4 text-left sm:max-w-2xl md:gap-6">
              <p className="opacity-0 translate-y-2 animation duration-500 ease-in-out delay-500">A dev in love with Python playing with Javascript</p>
              <p className="opacity-0 translate-y-2 animation duration-500 ease-in-out delay-1000">The incredibly developer in making</p>
            </div>
          </div>

          <div className="mx-auto order-1 lg:order-2">
            <Image
              alt="me"
              className="rounded-xl aspect-[3/2] overflow-hidden shadow-lg object-cover object-center"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

