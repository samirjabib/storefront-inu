export default function BannerGridDesktop() {
  return (
    <div className="grid grid-cols-1 w-full gap-4 pb-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm min-h-80" />
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm min-h-80" />
      </div>
      <div className="flex flex-row w-full gap-2 md:gap-4 min-h-64">
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm col-span-2 w-1/3" />
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm col-span-2 w-2/3" />
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm col-span-3 w-1/3" />
      </div>
    </div>
  );
}
