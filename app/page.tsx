export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Left side: Title */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-4xl font-semibold text-gray-500 whitespace-nowrap">
            String Vault
          </h1>
        </div>

        {/* Right side: Description */}
        <div className="space-y-4 text-lg">
          <p>
            A website I created to keep pictures of all my guitars in one place.
          </p>
          <p>
            Using your Google account to sign up, you can upload pictures of
            your gear, track serial numbers, and input model and brand
            information from your profile.
          </p>
          <p>
            Press the &apos;Search&apos; button at the top of the page to view
            your gear as well as others. You can search for models, brands, and
            types (electric / acoustic / extended range) using the search bar or
            filter by these options with the drop-down selectors.
          </p>
        </div>
      </div>
    </div>
  );
}
