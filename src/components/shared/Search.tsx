export default function Search() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Buscar personagens..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Buscar
      </button>
    </form>
  );
}