type Props = { message?: string };

function FormError({ message }: Props) {
  if (!message) return null;
  return (
    <p className="text-center text-xs font-semibold text-red-600">{message}</p>
  );
}

export default FormError;