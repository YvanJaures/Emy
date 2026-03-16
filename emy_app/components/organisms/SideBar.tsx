export default function Sidebar() {
  return (
    <div className="w-52 p-5 bg-white dark:bg-gray-800 shadow-xl gap-5 rounded-xl">

      <h2 className="underline underline-offset-4 mb-6 text-gray-900 dark:text-gray-100">
        PARAMÈTRES
      </h2>

      <ul className="space-y-4">

        <li className="text-blue-500 font-medium cursor-pointer underline underline-offset-4">
          Profil
        </li>

        <li className="cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-gray-100">
          Mes équipes
        </li>

        <li className="cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-gray-100">
          Activités
        </li>

      </ul>

    </div>
  );
}