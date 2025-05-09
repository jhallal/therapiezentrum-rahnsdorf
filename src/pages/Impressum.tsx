import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-in">Impressum</h1>

        <section className="prose prose-lg max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-lg">
                Herausgeber dieser Website:<br />
                <strong>Therapiezentrum Rahnsdorf GbR</strong><br />
                Dr. med. Cornelia Busse<br />
                Fürstenwalder Allee 266<br />
                DEUTSCHLAND
              </p>
              
              <p className="text-lg space-y-1">
                Tel.: <a href="tel:+496458903" className="text-primary hover:text-primary-light transition-colors">+49306458903</a><br />
                Fax: +493064091145<br />
                E-Mail: <a href="mailto:kinderarztpraxis@therapiezentrum-rahnsdorf.de" className="text-primary hover:text-primary-light transition-colors">kinderarztpraxis@therapiezentrum-rahnsdorf.de</a><br />
                Internet: <a href="http://www.therapiezentrum-rahnsdorf.de" rel="nofollow" className="text-primary hover:text-primary-light transition-colors">http://www.therapiezentrum-rahnsdorf.de</a>
              </p>

              <p className="text-lg">Umsatzsteuer-Identifikationsnummer: 97603241680</p>

              <div className="space-y-2">
                <p className="text-lg">
                  Zuständige Aufsichtsbehörde: Kassenärztliche Vereinigung von Berlin<br />
                  Zuständige Kammer: <a href="http://www.aerztekammer-berlin.de" target="_blank" rel="noopener" className="text-primary hover:text-primary-light transition-colors">Landesärztekammer Berlin</a><br />
                  Berufsbezeichnung: Fachärztin für Kinder- und Jugendmedizin (verliehen in der Bundesrepublik Deutschland)<br />
                  Berufsrechtliche Regelungen: Sie finden die aktuell gültige Berufsordnung auf der Homepage der Ärztekammer Berlin (www.aerztekammer-berlin.de)
                </p>
              </div>

              <p className="text-lg">Inhaltlich Verantwortlicher gemäß §10 Absatz 3 MDStV: Dr. Cornelia Busse (Anschrift wie oben)</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Copyright Informationen</h2>
              <p className="text-lg">Das Copyright für die auf dieser Internetpräsenz veröffentlichten Inhalte bleibt allein beim Autor.</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Haftungshinweis</h2>
              <p className="text-lg leading-relaxed">
                Trotz sorgfälltiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind außschließlich deren Betreiber verantwortlich. Diese Internetpräsentation wurde mit äußerster Sorgfalt erstellt.
                Das gilt selbstverständlich auch für Therapieempfehlungen und Angaben über Arzneimittel und deren Dosierungen. Irrtürmer, Zweideutigkeiten oder fehlerhafte Informationen sind nie völlig auszuschließen. Eine Gewähr für die uneingeschränkte Richtigkeit dieser Daten übernimmt der Inhaber dieser Präsentation nicht. Sämtliche Angaben müssen vom jeweiligen Anwender im Einzelfall eigenverantwortlich auf ihre Richtigkeit geprüft werden. Desweiteren können die auf dieser Website veröffentlichten Informationen keinesfalls ein Gespräch mit einem Arzt/ Facharzt/ Therapeuten ihres Vertrauens ersetzen.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Datenschutzerklärung</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Therapiezentrum Rahnsdorf GbR. Eine Nutzung der Internetseiten der Therapiezentrum Rahnsdorf GbR ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">1. Begriffsbestimmungen</h3>
                  <p className="text-lg leading-relaxed">
                    Die Datenschutzerklärung der Therapiezentrum Rahnsdorf GbR beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden.
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-4">
                    <li className="text-lg">
                      <strong>Personenbezogene Daten</strong>
                      <p className="mt-2">Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</p>
                    </li>
                    <li className="text-lg">
                      <strong>Betroffene Person</strong>
                      <p className="mt-2">Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten verarbeitet werden.</p>
                    </li>
                <li>
                  <div className="h4">c)&nbsp;&nbsp;&nbsp; Verarbeitung</div>
                  <p>Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p></li>
                <li>
                  <div className="h4">d)&nbsp;&nbsp;&nbsp; Einschränkung der Verarbeitung</div>
                  <p>Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</p></li>
                <li>
                  <div className="h4">e)&nbsp;&nbsp;&nbsp; Profiling</div>
                  <p>Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</p></li>
                <li>
                  <div className="h4">f)&nbsp;&nbsp;&nbsp;&nbsp; Pseudonymisierung</div>
                  <p>Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.</p></li>
                <li>
                  <div className="h4">g)&nbsp;&nbsp;&nbsp; Verantwortlicher oder für die Verarbeitung Verantwortlicher</div>
                  <p>Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.</p></li>
                <li>
                  <div className="h4">h)&nbsp;&nbsp;&nbsp; Auftragsverarbeiter</div>
                  <p>Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p></li>
                <li>
                  <div className="h4">i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Empfänger</div>
                  <p>Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.</p></li>
                <li>
                  <div className="h4">j)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dritter</div>
                  <p>Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</p></li>
                <li>
                  <div className="h4">k)&nbsp;&nbsp;&nbsp; Einwilligung</div>
                  <p>Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</p></li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h3>
                  <p className="text-lg">
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:
                  </p>
                  <p className="text-lg">
                    Therapiezentrum Rahnsdorf GbR<br />
                    Waldschützpfad 21<br />
                    12589 Berlin<br />
                    Deutschland
                  </p>
                  <p className="text-lg">
                    Tel.: 0306458903<br />
                    E-Mail: cb1204@arcor.de<br />
                    Website: <a href="http://www.therapiezentrum-rahnsdorf.de" rel="nofollow" className="text-primary hover:text-primary-light transition-colors">http://www.therapiezentrum-rahnsdorf.de</a>
                  </p>
                </div>

              <div className="h4">3. Erfassung von allgemeinen Daten und Informationen</div>
              <p>Die Internetseite der Therapiezentrum Rahnsdorf GbR erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.</p>
              <p>Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Therapiezentrum Rahnsdorf GbR keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die Therapiezentrum Rahnsdorf GbR daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.</p>
              <div className="h4">4. Kontaktmöglichkeit über die Internetseite</div>
              <p>Die Internetseite der Therapiezentrum Rahnsdorf GbR enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.</p>
              <div className="h4">5. Kommentarfunktion im Blog auf der Internetseite</div>
              <p>Die Therapiezentrum Rahnsdorf GbR bietet den Nutzern auf einem Blog, der sich auf der Internetseite des für die Verarbeitung Verantwortlichen befindet, die Möglichkeit, individuelle Kommentare zu einzelnen Blog-Beiträgen zu hinterlassen. Ein Blog ist ein auf einer Internetseite geführtes, in der Regel öffentlich einsehbares Portal, in welchem eine oder mehrere Personen, die Blogger oder Web-Blogger genannt werden, Artikel posten oder Gedanken in sogenannten Blogposts niederschreiben können. Die Blogposts können in der Regel von Dritten kommentiert werden.</p>
              <p>Hinterlässt eine betroffene Person einen Kommentar in dem auf dieser Internetseite veröffentlichten Blog, werden neben den von der betroffenen Person hinterlassenen Kommentaren auch Angaben zum Zeitpunkt der Kommentareingabe sowie zu dem von der betroffenen Person gewählten Nutzernamen (Pseudonym) gespeichert und veröffentlicht. Ferner wird die vom Internet-Service-Provider (ISP) der betroffenen Person vergebene IP-Adresse mitprotokolliert. Diese Speicherung der IP-Adresse erfolgt aus Sicherheitsgründen und für den Fall, dass die betroffene Person durch einen abgegebenen Kommentar die Rechte Dritter verletzt oder rechtswidrige Inhalte postet. Die Speicherung dieser personenbezogenen Daten erfolgt daher im eigenen Interesse des für die Verarbeitung Verantwortlichen, damit sich dieser im Falle einer Rechtsverletzung gegebenenfalls exkulpieren könnte. Es erfolgt keine Weitergabe dieser erhobenen personenbezogenen Daten an Dritte, sofern eine solche Weitergabe nicht gesetzlich vorgeschrieben ist oder der Rechtsverteidigung des für die Verarbeitung Verantwortlichen dient.</p>
              <div className="h4">6. Abonnement von Kommentaren im Blog auf der Internetseite</div>
              <p>Die im Blog der Therapiezentrum Rahnsdorf GbR abgegebenen Kommentare können grundsätzlich von Dritten abonniert werden. Insbesondere besteht die Möglichkeit, dass ein Kommentator die seinem Kommentar nachfolgenden Kommentare zu einem bestimmten Blog-Beitrag abonniert.</p>
              <p>Sofern sich eine betroffene Person für die Option entscheidet, Kommentare zu abonnieren, versendet der für die Verarbeitung Verantwortliche eine automatische Bestätigungsmail, um im Double-Opt-In-Verfahren zu überprüfen, ob sich wirklich der Inhaber der angegebenen E-Mail-Adresse für diese Option entschieden hat. Die Option zum Abonnement von Kommentaren kann jederzeit beendet werden.</p>
              <div className="h4">7. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</div>
              <p>Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.</p>
              <p>Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>
              <div className="h4">8. Rechte der betroffenen Person</div>
              <ul>
                <li>
                  <div className="h4">a)&nbsp;&nbsp;&nbsp; Recht auf Bestätigung</div>
                  <p>Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
                <li>
                  <div className="h4">b)&nbsp;&nbsp;&nbsp; Recht auf Auskunft</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:</p>
                  <ul>
                    <li>die Verarbeitungszwecke</li>
                    <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
                    <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen</li>
                    <li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
                    <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
                    <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
                    <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren Informationen über die Herkunft der Daten</li>
                    <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person</li>
                  </ul>
                  <p>Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im Zusammenhang mit der Übermittlung zu erhalten.</p>
                  <p>Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
                <li>
                  <div className="h4">c)&nbsp;&nbsp;&nbsp; Recht auf Berichtigung</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.</p>
                  <p>Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
                <li>
                  <div className="h4">d)&nbsp;&nbsp;&nbsp; Recht auf Löschung (Recht auf Vergessen werden)</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist:</p>
                  <ul>
                    <li>Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige Weise verarbeitet, für welche sie nicht mehr notwendig sind.</li>
                    <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                    <li>Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.</li>
                    <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                    <li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
                    <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.</li>
                  </ul>
                  <p>Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung von personenbezogenen Daten, die bei der Therapiezentrum Rahnsdorf GbR gespeichert sind, veranlassen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Therapiezentrum Rahnsdorf GbR wird veranlassen, dass dem Löschverlangen unverzüglich nachgekommen wird.</p>
                  <p>Wurden die personenbezogenen Daten von der Therapiezentrum Rahnsdorf GbR öffentlich gemacht und ist unser Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der personenbezogenen Daten verpflichtet, so trifft die Therapiezentrum Rahnsdorf GbR unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere für die Datenverarbeitung Verantwortliche, welche die veröffentlichten personenbezogenen Daten verarbeiten, darüber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen für die Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Der Mitarbeiter der Therapiezentrum Rahnsdorf GbR wird im Einzelfall das Notwendige veranlassen.</p></li>
                <li>
                  <div className="h4">e)&nbsp;&nbsp;&nbsp; Recht auf Einschränkung der Verarbeitung</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>
                  <ul>
                    <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.</li>
                    <li>Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen Daten.</li>
                    <li>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                    <li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>
                  </ul>
                  <p>Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die Einschränkung von personenbezogenen Daten, die bei der Therapiezentrum Rahnsdorf GbR gespeichert sind, verlangen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der Therapiezentrum Rahnsdorf GbR wird die Einschränkung der Verarbeitung veranlassen.</p></li>
                <li>
                  <div className="h4">f)&nbsp;&nbsp;&nbsp;&nbsp; Recht auf Datenübertragbarkeit</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen wurde.</p>
                  <p>Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.</p>
                  <p>Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person jederzeit an einen Mitarbeiter der Therapiezentrum Rahnsdorf GbR wenden.</p></li>
                <li>
                  <div className="h4">g)&nbsp;&nbsp;&nbsp; Recht auf Widerspruch</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.</p>
                  <p>Die Therapiezentrum Rahnsdorf GbR verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
                  <p>Verarbeitet die Therapiezentrum Rahnsdorf GbR personenbezogene Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegenüber der Therapiezentrum Rahnsdorf GbR der Verarbeitung für Zwecke der Direktwerbung, so wird die Therapiezentrum Rahnsdorf GbR die personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.</p>
                  <p>Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der Therapiezentrum Rahnsdorf GbR zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.</p>
                  <p>Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt jeden Mitarbeiter der Therapiezentrum Rahnsdorf GbR oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.</p></li>
                <li>
                  <div className="h4">h)&nbsp;&nbsp;&nbsp; Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung (1) nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</p>
                  <p>Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdrücklicher Einwilligung der betroffenen Person, trifft die Therapiezentrum Rahnsdorf GbR angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</p>
                  <p>Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
                <li>
                  <div className="h4">i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</div>
                  <p>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.</p>
                  <p>Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
              </ul>
              <div className="h4">9. Rechtsgrundlage der Verarbeitung</div>
              <p>Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).</p>
              <div className="h4">10. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden</div>
              <p>Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.</p>
              <div className="h4">11. Dauer, für die die personenbezogenen Daten gespeichert werden</div>
              <p>Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.</p>
              <div className="h4">12. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung</div>
              <p>Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden könnte. Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen einzelfallbezogen darüber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.</p>
              <div className="h4">13. Bestehen einer automatisierten Entscheidungsfindung</div>
              <p>Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.</p>
              <p>Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für Datenschutz GmbH, die als <a href="https://dg-datenschutz.de/datenschutz-dienstleistungen/externer-datenschutzbeauftragter/">Externer Datenschutzbeauftragter Fürth</a> tätig ist, in Kooperation mit dem <a href="https://www.wbs-law.de/it-recht/datenschutzrecht/">IT- und Datenschutzrecht Anwalt Christian Solmecke</a> erstellt.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
