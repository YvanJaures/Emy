export default function Sidebar() {
  return (
    <div className="w-48 border-r p-4">

      <ul className="space-y-4">

        <li className="text-blue-600 font-medium cursor-pointer">
          Profil
        </li>

        <li className="text-gray-600 cursor-pointer hover:text-black">
          Mes équipes
        </li>

        <li className="text-gray-600 cursor-pointer hover:text-black">
          Activités
        </li>

      </ul>

    </div>
  );
}