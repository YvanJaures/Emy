"use client"
import { useRouter } from 'next/navigation';

export default function TermsOfUse({className}:{className?:string}) {
  const router = useRouter();

    const sections = [
    { num: '01', title: 'Authentification', content: "EMY utilise un système d'authentification sécurisé avec chiffrement des mots de passe. Les sessions sont gérées à durée limitée. Toute tentative de connexion échouée répétée entraîne un blocage temporaire du compte." },
    { num: '02', title: 'Chiffrement des données', content: "Toutes les communications entre votre appareil et nos serveurs sont chiffrées via le protocole TLS 1.3. Les données sensibles stockées en base de données sont chiffrées au repos. Aucune information confidentielle n'est transmise en clair." },
    { num: '03', title: 'Données personnelles', content: "EMY collecte uniquement les données nécessaires au fonctionnement du service. Nous ne vendons ni ne partageons vos données personnelles avec des tiers à des fins commerciales. Vous pouvez demander la suppression de vos données à tout moment via les paramètres de votre compte." },
    { num: '04', title: 'Données de localisation', content: "Vos données de localisation sont utilisées uniquement pour vous proposer des communautés proches. Elles ne sont jamais partagées publiquement sans votre consentement explicite. Vous pouvez révoquer l'accès à votre localisation à tout moment depuis les paramètres de votre appareil." },
    { num: '05', title: 'Accès aux données', content: "L'accès aux données des utilisateurs est strictement limité aux membres de l'équipe EMY qui en ont besoin pour assurer le bon fonctionnement du service. Tout accès est journalisé et audité régulièrement. Aucun employé ne peut accéder à vos données sans justification documentée." },
    { num: '06', title: 'Signalement de vulnérabilités', content: "Si vous découvrez une faille de sécurité dans EMY, nous vous encourageons à nous la signaler de manière responsable. Nous nous engageons à traiter chaque signalement sérieusement et à vous répondre dans un délai de 72 heures." },
    { num: '07', title: 'Conservation des données', content: "Vos données sont conservées aussi longtemps que votre compte est actif. En cas de suppression de compte, vos données personnelles sont effacées dans un délai de 30 jours, à l'exception des données légalement requises pour une conservation plus longue." },
    { num: '08', title: 'Cookies et traceurs', content: "EMY utilise uniquement des cookies essentiels au fonctionnement de l'application. Nous n'utilisons pas de cookies publicitaires ou de traceurs tiers. Vous pouvez gérer vos préférences de cookies depuis les paramètres de l'application." },
    { num: '09', title: 'Incidents de sécurité', content: "En cas de violation de données susceptible d'affecter vos informations personnelles, EMY s'engage à vous notifier dans les 72 heures suivant la découverte de l'incident, conformément aux exigences du RGPD et des lois canadiennes sur la protection des données." },
    { num: '10', title: 'Mises à jour de sécurité', content: "EMY effectue des audits de sécurité réguliers et applique les correctifs de sécurité dans les meilleurs délais. Nous vous recommandons de toujours utiliser la dernière version de l'application pour bénéficier des dernières protections." },
    { num: '11', title: 'Contact sécurité', content: "Pour toute question relative à la sécurité de vos données ou pour signaler un incident, contactez notre équipe dédiée." },
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
          Politiques de sécurité
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