import { guitars } from "./guitars";
import GuitarCard from "../components/GuitarCard";

export default function Home() {
  return (
    <div className="container mx-auto px-3 pb-16 pt-4">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {/* Left side: Title */}
        <div className="mb-8 lg:mb-0">
          <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
            String Vault
          </h1>
        </div>

        {/* Right side: Description */}
        <div className="space-y-8 text-base">
          <p>
            A website I built to organize and showcase pictures of my entire
            guitar collection, as well as other people&apos;s collections.
          </p>
          <p className="text-base">
            Click the &apos;Search&apos; button at the top of the page to see
            more gear. You can search by brand, model, or country using the
            search bar, or filter your results with the drop-down selectors.
          </p>
          <p className="text-base">
            Sign up to upload pictures of your gear, track serial numbers, keep
            track of how much you paid, have a record of the guitars that you
            own, and view your entire collection on your profile.
          </p>

          <p className="text-base">
            Here are some pieces from my collection. Click them to view a larger
            image.
          </p>

          {/* Gallery Section */}
          <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {guitars.map((guitar) => (
              <GuitarCard key={guitar.serialNumber} guitar={guitar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
