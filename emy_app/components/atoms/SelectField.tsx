type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

/**
* Ce composant SelectField sert à créer un <select> stylé et réutilisable 
* (un menu déroulant) avec Tailwind, tout en gardant toutes les props normales d’un select HTML.
 */
function SelectField({ className = "", children, ...props }: Props) {
  return (
    <select
      {...props}
      className={[
        "w-full rounded-2xl border bg-white/80 px-4 py-2 text-sm outline-none shadow-inner",
        "border-black/50 focus:border-yellow-400",
        className,
      ].join(" ")}
    >
      {children}
    </select>
  );
};

export default SelectField;