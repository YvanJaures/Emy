export default function Sidebar() {
  return (
    <div className="w-52 border-r p-5">

      <h2 className="underline underline-offset-4 mb-6">
        PARAMÈTRES
      </h2>

      <ul className="space-y-4">

        <li className="text-blue-400 font-medium cursor-pointer underline underline-offset-4">
          Profil
        </li>

        <li className="text-gray-600 hover:text-black cursor-pointer">
          Mes équipes
        </li>

        <li className="text-gray-600 hover:text-black cursor-pointer">
          Activités
        </li>

      </ul>

    </div>
  );
}