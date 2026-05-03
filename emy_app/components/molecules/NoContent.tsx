import { MdInbox } from 'react-icons/md';

export default function EmptyState({
  icon: Icon = MdInbox,
  title = "Aucun contenu",
  description = "Il n'y a rien à afficher pour le moment.",
  action,
}: {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-28 text-center gap-3 animate-fade-in">
      <div className="w-18 h-18 bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
        <Icon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <p className="text-sm text-gray-400 dark:text-gray-500 max-w-sm">
        {description}
      </p>
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}