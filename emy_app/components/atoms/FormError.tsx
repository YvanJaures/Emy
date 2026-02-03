
type Props = { message?: string };

/**
 * Ce composant FormError sert à afficher un message d’erreur de formulaire, seulement quand il y en a un
 * @param message
 * 
 */
function FormError({ message }: Props) {
  if (!message) return null;
  return (
    <p className="text-center text-xs font-semibold text-red-600">{message}</p>
  );
}

export default FormError;