import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConditionsGenerales = () => {
  return (
    <div className="min-h-screen font-asap">
      <Header />
      
      <main className="container mx-auto px-4 py-20 mt-16">
        <h1 className="text-4xl font-bold text-courier-dark mb-12">Conditions Générales</h1>

        {/* Responsabilité du client */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">Responsabilité du client</h2>
          <p className="mb-4">Le/la mandataire est chargé.e de transmettre toutes les informations nécessaires au bon déroulement de la prestation :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Nom/compagnie, adresse, numéro de téléphone, personne de contact, et tout autre renseignement requis (code, numéro de boîte aux lettres…) du mandataire et du destinataire.</li>
            <li>Tout besoin spécifique lié à la manutention et distribution du colis.</li>
          </ul>
        </section>

        {/* Distribution et réception */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">Distribution et réception</h2>
          <p className="mb-4">Outre cas spécifique, une signature est exigée à la réception de la marchandise.</p>
          <p className="mb-4">Tout colis déposé sans signature à la demande du destinataire ou du mandataire n'est plus sous la responsabilité de Rocket Courrier.</p>
        </section>

        {/* Emballage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">Emballage</h2>
          <p className="mb-4">Il est de la responsabilité du client d'emballer le colis de manière à permettre son transport sans encombre.</p>
        </section>

        {/* Temps d'attente */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">Temps d'attente</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Les 5 premières minutes d'attente sont comprises dans la prestation.</li>
            <li>Au-delà, chaque tranche de 5 minutes sera facturée 5.- CHF.</li>
          </ul>
        </section>

        {/* Engagement Rocket Courrier */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-courier-dark mb-6">Engagement Rocket Courrier</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-courier-dark mb-3">Engagement</h3>
            <p className="mb-4">Rocket Courrier s'engage à accomplir les prestations dans les termes convenus avec professionnalisme, soin et confidentialité.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-courier-dark mb-3">Délais de livraison</h3>
            <p className="mb-4">En cas de dépassement de plus de 10 minutes des délais de livraison (hors cas de force majeure), le mandataire peut demander une révision du prix.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-courier-dark mb-3">Détérioration ou vol</h3>
            <p className="mb-4">Rocket Courrier couvre un dédommagement jusqu'à <strong>CHF 500.-</strong> en cas de vol ou détérioration entre la prise en charge et la remise.</p>
            
            <p className="font-bold mb-2">Exceptions :</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Dommages dus à un emballage inadéquat.</li>
              <li>Marchandises déjà abîmées avant la prise en charge.</li>
              <li>Dommages liés aux aléas naturels (pluie, neige, température), malgré les précautions prises.</li>
              <li>Colis non remis en main propre sur demande du client.</li>
            </ul>
            
            <p className="mb-4">Les détériorations doivent être signalées à <strong>info@rocket-courrier.ch</strong> dans les <strong>8 jours</strong>.</p>
          </div>
        </section>

        {/* Prix et Paiement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-courier-dark mb-6">Prix et Modalités de paiement</h2>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Les prix sur le site sont à titre indicatif.</li>
            <li>Le prix final est fixé à la confirmation, mais peut être revu si les informations changent.</li>
          </ul>

          <h3 className="text-xl font-bold text-courier-dark mb-3">Modalité de paiement</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Clients réguliers</strong> : factures mensuelles, paiement sous <strong>30 jours</strong>.</li>
            <li><strong>Clients occasionnels</strong> : paiement le jour même.</li>
          </ul>

          <p className="font-bold mb-2">Retards de paiement :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>1er rappel</strong> : sans frais</li>
            <li><strong>2e rappel</strong> : +5.- CHF</li>
            <li><strong>3e rappel</strong> : +20.- CHF</li>
          </ul>
        </section>

        {/* Droit applicable */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">Droit applicable / For juridique</h2>
          <p className="mb-4">Le droit suisse s'applique. Le for juridique est à <strong>Genève</strong>.</p>
          
          <h3 className="text-xl font-bold text-courier-dark mb-3">Organe de conciliation</h3>
          <p className="mb-4">
            En cas de litige, l'<strong>organe de conciliation PostCom</strong> peut être consulté :<br/>
            <a 
              href="https://www.ombud-postcom.ch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-courier-dark hover:text-courier-accent underline"
            >
              www.ombud-postcom.ch
            </a>
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">Contact</h2>
          <p className="mb-2">Pour toute question :</p>
          <p className="mb-1">📞 022 300 14 14</p>
          <p className="mb-4">✉️ info@rocket-courrier.ch</p>
        </section>

        <p className="text-center text-courier-dark italic">
          Merci de faire confiance à Rocket Courrier — votre partenaire logistique de proximité.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionsGenerales;
