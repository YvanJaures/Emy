export default function Sidebar() {
  return (
    <div className="w-52 p-5 bg-white dark:bg-gray-900 shadow-xl gap-5 ">

      <h2 className="mb-6 text-2xl text-gray-900 dark:text-gray-100">
        PARAMÈTRES
      </h2>

      <ul className="space-y-4">

        <li className="text-blue-500 font-medium cursor-pointer underline underline-offset-4">
          Profil
        </li>

        <li className="cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-gray-100 underline underline-offset-4">
          Mes équipes
        </li>

        <li className="cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-gray-100 underline underline-offset-4">
          Activités
        </li>

      </ul>

    </div>
  );
}