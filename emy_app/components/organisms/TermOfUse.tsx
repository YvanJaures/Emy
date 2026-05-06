"use client"
import { useRouter } from 'next/navigation';

export default function TermsOfUse({className}:{className?:string}) {
  const router = useRouter();

    const sections = [
    { num: '01', title: 'Acceptation', content: "En accédant à EMY ou en créant un compte, vous acceptez pleinement les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application." },
    { num: '02', title: 'Description du service', content: "EMY est une plateforme communautaire permettant aux utilisateurs de créer, rejoindre et interagir au sein de communautés locales et thématiques. L'application propose des fonctionnalités de géolocalisation, de messagerie et de gestion de groupes." },
    { num: '03', title: 'Création de compte', content: "Pour utiliser EMY, vous devez créer un compte avec des informations exactes et à jour. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité effectuée depuis votre compte. Vous devez avoir au moins 13 ans pour vous inscrire." },
    { num: '04', title: 'Comportement des utilisateurs', content: "En utilisant EMY, vous vous engagez à ne pas publier de contenu illégal, haineux ou diffamatoire, à ne pas harceler ou menacer d'autres membres, à ne pas usurper l'identité d'une autre personne, et à ne pas utiliser l'application à des fins commerciales non autorisées." },
    { num: '05', title: 'Données de localisation', content: "EMY utilise vos données de localisation pour vous proposer des communautés proches de vous. Ces données sont traitées conformément à notre Politique de confidentialité. Vous pouvez désactiver la géolocalisation à tout moment dans les paramètres de votre appareil." },
    { num: '06', title: 'Contenu des utilisateurs', content: "Vous conservez la propriété de tout contenu que vous publiez sur EMY. En le publiant, vous accordez à EMY une licence non exclusive et gratuite pour l'afficher et le distribuer au sein de la plateforme. EMY se réserve le droit de supprimer tout contenu qui violerait les présentes conditions." },
    { num: '07', title: 'Suspension et résiliation', content: "EMY se réserve le droit de suspendre ou supprimer tout compte qui ne respecterait pas les présentes conditions, et ce sans préavis. Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application." },
    { num: '08', title: 'Limitation de responsabilité', content: `EMY est fourni "tel quel" sans garantie d'aucune sorte. Nous ne pouvons être tenus responsables des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le service.` },
    { num: '09', title: 'Modifications des conditions', content: "EMY se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront notifiés de tout changement important. La poursuite de l'utilisation de l'application après modification vaut acceptation des nouvelles conditions." },
    { num: '10', title: 'Contact', content: "Pour toute question relative aux présentes conditions, vous pouvez nous contacter." },
    ];

  return (
    <div className={className+" max-w-2xl mx-auto px-4 py-6"}>

      <button
        onClick={() => router.back()}
        className={`${ className? 'hidden':''} flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 
                   dark:text-gray-400 dark:hover:text-white mb-8 transition-colors hover:cursor-pointer`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Retour
      </button>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
        <p className="text-xs text-gray-400 mb-1">Dernière mise à jour : mai 2026</p>
        <h1 className="text-xl font-medium text-gray-900 dark:text-white mb-8">
          Conditions d'utilisation
        </h1>

        <div className="flex flex-col gap-6">
          {sections.map((s, i) => (
            <div key={i}>
              {i > 0 && <div className="border-t border-gray-100 dark:border-gray-800 mb-6" />}
              <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                {s.num} — {s.title}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}