import Image from "next/image"

export default function Home() {
  return (
    <main className="p-5 bg-gray-50/90 py-12 lg:py-24">
      <div className="px-4 md:px-6">
        <div className="grid max-w-3xl gap-8 mx-auto items-center space-y-4 lg:gap-16 lg:max-w-5xl lg:grid-colos-2 lg:space-y-0">
          <div className="space-y-4 text-center lg:order-2 lg-space-y-3 xl:space-y-4">
            <div className="space-y-2">
              <h1 className=" text-4xl font-semibold">   Tzniceguy</h1>
              <p className="inline-block text-2xl  tracking-wide md:text-3xl lg:text-4xl">
                Developer / Human
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-4 text-left sm:max-w-2xl md:gap-6">
              <p className="">The maestro in making in love with Python playing with Javascript</p>
            </div>
          </div>

          <div className="mx-auto order-1 lg:order-2">
            <Image
              alt="me"
              className="rounded-xl aspect-[3/2] overflow-hidden shadow-lg object-fill object-center"
              height="400"
              src="/me.jpg"
              width="600"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

