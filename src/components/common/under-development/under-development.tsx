export default function UnderDevelopment() {
  return (
    <div className="w-full p-4 bg-yellow-500">
      <div className="bg-black p">
        <p className="text-red-500 font-semibold flex gap-2 justify-center animate-pulse">
          This web is under development by Arrecife
          <span className="text-red-500">&lt;/&gt;</span>
        </p>
      </div>
    </div>
  );
}
