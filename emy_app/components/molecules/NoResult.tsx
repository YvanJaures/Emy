import { MdSearchOff } from 'react-icons/md';

interface NoResultProps {
  title?: string;
  description?: string;
}

export function NoResult({
  title = 'Aucun résultat trouvé',
  description = "Aucun élément ne correspond à votre recherche. Essayez d'autres mots-clés ou réinitialisez les filtres."
}: NoResultProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center py-28 px-4 text-center gap-4 animate-fade-in">
      <div className="w-18 h-18 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <MdSearchOff className="w-10 h-10 text-gray-400 dark:text-gray-500" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}