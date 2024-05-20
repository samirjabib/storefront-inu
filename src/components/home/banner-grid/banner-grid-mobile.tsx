export default function BannerGridMobile() {
  return (
    <div className="grid grid-cols-1 w-full gap-2 pb-6">
      <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm min-h-36" />
      <div className="grid grid-cols-5 gap-2 md:gap-4 min-h-64">
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm col-span-2" />

        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm col-span-3" />
      </div>
    </div>
  );
}
