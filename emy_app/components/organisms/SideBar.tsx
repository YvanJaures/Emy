/**
 * Interface définissant les propriétés du composant Sidebar
 */
interface SidebarProps {
  /** Fonction pour changer la vue active */
  setActiveView: (view: string) => void;
  /** Vue actuellement active */
  activeView: string;
}

/**
 * Composant Sidebar - Barre latérale de navigation
 *
 * Ce composant affiche une barre latérale avec des options de navigation
 * pour les paramètres utilisateur. Il permet de changer la vue active
 * entre le profil, les équipes et les activités.
 *
 * @param props - Les propriétés du composant
 * @param props.setActiveView - Fonction pour définir la vue active
 * @param props.activeView - La vue actuellement sélectionnée
 * @returns Le composant Sidebar rendu
 */
export default function Sidebar({ setActiveView, activeView }: SidebarProps) {
  return (
    <div className="w-full md:w-52 p-4 md:p-5 bg-white dark:bg-gray-900 shadow-xl gap-5">

      <h2 className="mb-4 md:mb-6 text-xl md:text-2xl text-gray-900 dark:text-gray-100">
        PARAMÈTRES
      </h2>

      <ul className="flex flex-row md:flex-col gap-4 md:space-y-4 overflow-x-auto md:overflow-visible">

        <li
          onClick={() => setActiveView("profil")}
          className={`cursor-pointer whitespace-nowrap underline underline-offset-4 ${
            activeView === "profil"
              ? "text-blue-500 font-medium"
              : "hover:text-black dark:text-gray-300 dark:hover:text-gray-100"
          }`}
        >
          Profil
        </li>

        <li
          onClick={() => setActiveView("equipes")}
          className={`cursor-pointer whitespace-nowrap underline underline-offset-4 ${
            activeView === "equipes"
              ? "text-blue-500 font-medium"
              : "hover:text-black dark:text-gray-300 dark:hover:text-gray-100"
          }`}
        >
          Mes équipes
        </li>

        <li
          onClick={() => setActiveView("activites")}
          className={`cursor-pointer whitespace-nowrap underline underline-offset-4 ${
            activeView === "activites"
              ? "text-blue-500 font-medium"
              : "hover:text-black dark:text-gray-300 dark:hover:text-gray-100"
          }`}
        >
          Activités
        </li>

      </ul>
    </div>
  );
}