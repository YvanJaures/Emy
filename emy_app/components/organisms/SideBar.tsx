export default function Sidebar() {
  return (
    <div className="w-52 p-5 bg-white shadow-xl gap-5 rounded-xl">

      <h2 className="underline underline-offset-4 mb-6 ">
        PARAMÈTRES
      </h2>

      <ul className="space-y-4">

        <li className="text-blue-500 font-medium cursor-pointer underline underline-offset-4">
          Profil
        </li>

        <li className="hover:text-black cursor-pointer">
          Mes équipes
        </li>

        <li className="hover:text-black cursor-pointer">
          Activités
        </li>

      </ul>

    </div>
  );
}