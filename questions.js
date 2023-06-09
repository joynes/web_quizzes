
let questions2 = [
    {
        question: "What is the capital of England?",
        options: ["New York", "London", "Paris", "Tokyo"],
        answer: 1
    },
    {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
        answer: 0
    },
    // add more questions as needed
];

let stages = [
[
    {
        question: "What is the capital of England?",
        options: ["New York", "London", "Paris", "Tokyo"],
        answer: 1
    },
    {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
        answer: 0
    },
    // add more questions as needed
],
  [
    {
        question: "Vilka tre områden samverkar för att forma och styra samhället?",
        options: ["Politik, ekonomi, och kultur", "Politik, religion, och vetenskap", "Ekonomi, vetenskap, och kultur", "Politik, vetenskap, och kultur"],
        answer: 0
    },
    {
        question: "Vad kännetecknar offentlig förvaltning?",
        options: ["Bara rättslig verksamhet", "Bara faktisk verksamhet", "Det inkluderar både rättslig verksamhet och faktisk verksamhet", "Inget av ovanstående"],
        answer: 2
    },
    {
        question: "Vad innebär ministerstyre?",
        options: ["Att en minister personligen utför myndighetens arbete", "Att en politiskt tillsatt person påverkar hantering av ärenden hos myndigheter", "Att alla myndigheter styrs av en enda minister", "Inget av ovanstående"],
        answer: 1
    },
    {
        question: "Hur många kommuner och regioner finns det i Sverige?",
        options: ["200 kommuner och 18 regioner", "220 kommuner och 20 regioner", "290 kommuner och 21 regioner", "300 kommuner och 25 regioner"],
        answer: 2
    },

{
    question: "Vad innebär demokrati?",
    options: ["Styrelseform där makten ligger hos en enda person", "Styrelseform där makten ligger hos en liten grupp", "Styrelseform där makten ligger hos folket", "Styrelseform där makten ligger hos en monark"],
    answer: 2
},
{
    question: "I vilken lag finns formuleringen att all makt utgår ifrån folket?",
    options: ["I brottsbalken", "I förvaltningslagen", "I regeringsformen", "I tryckfrihetsförordningen"],
    answer: 2
},
{
    question: "Hur styrs Sverige?",
    options: ["Genom direktdemokrati", "Genom monarki", "Genom diktatur", "Genom representativ parlamentarism"],
    answer: 3
},
{
    question: "Vad innebär representativ parlamentarism?",
    options: ["Medborgarna deltar direkt i alla politiska beslut", "Medborgarna väljer representanter till ett parlament som tar beslut och styr landet på deras vägnar", "En ensam ledare tar alla beslut", "En monark tar alla beslut"],
    answer: 1
},
{
    question: "Vad är regeringens främsta uppgifter?",
    options: ["Styra landet, förvalta offentliga resurser, upprätthålla lag och ordning, skydda nationens intressen", "Bestämma skattesatser, skapa lagar, upprätthålla ordning och säkerhet", "Lägga fram budgetförslag, förhandla med andra länder, upprätthålla säkerheten", "Skydda medborgarnas rättigheter, bestämma räntan, fördela offentliga medel"],
    answer: 0
},
{
    question: "Vad kännetecknar offentlig förvaltning?",
    options: ["Rättslig verksamhet, faktisk verksamhet", "Kommersiell verksamhet, faktisk verksamhet", "Faktisk verksamhet, politisk verksamhet", "Inget av ovanstående"],
    answer: 0
},
{
    question: "Vad är en norm?",
    options: ["En lag", "En skriven regel", "En oskriven regel eller standard som styr och påverkar beteendet och förväntningarna i ett samhälle eller en grupp", "En politisk ideologi"],
    answer: 2
},
{
    question: "Vilka är Sveriges grundlagar?",
    options: ["Regeringsformen, Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen, Successionsordningen", "Regeringsformen, Strafflagen, Civilrätten, Successionsordningen", "Regeringsformen, Tryckfrihetsförordningen, Konsumenträtten, Successionsordningen", "Regeringsformen, Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen, Äktenskapsbalken"],
    answer: 0
},
{
    question: "Vad är en folkomröstning?",
    options: ["En process där alla röstberättigade medborgare i en nation röstar om ett specifikt ämne eller en fråga", "En process där alla ledamöter av riksdagen röstar om ett specifikt ämne eller en fråga", "En process där regeringen röstar om ett specifikt ämne eller en fråga", "En process där kungen röstar om ett specifikt ämne eller en fråga"],
    answer: 0
},
{
    question: "Vad är välfärd?",
    options: ["Rikedom och ekonomiskt välstånd", "En individ eller ett samhälles hälsa, lycka och förmåga att blomstra", "Politisk stabilitet", "Ett annat namn för regeringen"],
    answer: 1
},
{
    question: "Vad innebär begreppet 'rättsstat'?",
    options: ["Ett samhälle där alla handlingar och beslut är baserade på lag", "Ett samhälle där rättsliga beslut baseras på en ledares vilja", "Ett samhälle där kriminaliteten är låg", "Ett samhälle där det finns många advokater"],
    answer: 0
},
    // add more questions as needed

{
    question: "Vad reglerar successionsordningen?",
    options: ["Svenska tronföljden och kungliga familjens ställning", "Svenska lagar och regler", "Riksdagens arbetsordning", "Stadgar för offentliga myndigheter"],
    answer: 0
},
{
    question: "Vilken av följande rättigheter är grundlagsskyddad i Sverige?",
    options: ["Rätten att bilda och vara medlem i föreningar", "Rätten att resa fritt över landets gränser", "Rätten att rösta i amerikanska presidentval", "Rätten att inneha vapen"],
    answer: 0
},
{
    question: "Hur ändras en grundlag i Sverige?",
    options: ["Genom folkomröstning", "Genom riksdagens beslut", "Genom en domstolsbeslut", "Genom kungens beslut"],
    answer: 1
},
{
    question: "Ge exempel på tre grundlagsskyddade fri- och rättigheter",
    options: ["Rätten att vara fri från tortyr, rätten till en rättvis rättegång, yttrandefrihet", "Rätten att rösta, rätten att resa, rätten att arbeta", "Rätten att äga fastighet, rätten att utöva religion, rätten att få utbildning", "Rätten att äta, rätten att sova, rätten att skratta"],
    answer: 0
},
{
    question: "Vad innebär offentlighetsprincipen?",
    options: ["Allmänheten har rätt att få tillgång till information och handlingar som finns hos offentliga myndigheter", "Offentliga tjänstemän måste alltid bära uniform", "Alla regeringsmöten ska sändas på TV", "Alla dokument måste publiceras på internet"],
    answer: 0
},
{
    question: "Vad betyder meddelarfrihet?",
    options: ["Rätten att sprida information utan censur", "Rätten för anställda inom offentlig verksamhet att lämna uppgifter om missförhållanden utan att bli utsatta för repressalier", "Rätten att säga vad man tycker på sociala medier", "Rätten att kritisera regeringen"],
    answer: 1
},
{
    question: "Vad innebär förbudet mot ministerstyre som vi har i Sverige?",
    options: ["Ministrar får inte ändra beslut som har fattats av riksdagen", "Ministrar får inte direkt påverka eller styra beslut eller hantering av ärenden inom en myndighet", "Ministrar får inte besöka myndigheter", "Ministrar får inte tala offentligt om sina åsikter"],
    answer: 1
},
{
    question: "Vilka principer är utgångspunkten för värdegrunden i offentlig förvaltning i Sverige?",
    options: ["Ärlighet, Öppenhet, Ansvar", "Effektivitet, Noggrannhet, Struktur", "Tolerans, Mångfald, Respekt", "Demokrati, Rättssäkerhet, Effektivitet"],
    answer: 3
},
{
question: "Vem är Sveriges statschef?",
options: ["Statsministern", "Kungen", "Talmannen", "Regeringschefen"],
answer: 1
},
{
question: "Vad innebär Sveriges 'nattväktarstat'?",
options: ["Polisen patrullerar på natten", "Staten har bara ansvar för försvar, polis och rättsväsende", "All offentlig verksamhet stänger vid midnatt", "Staten övervakar medborgare dygnet runt"],
answer: 1
},
{
question: "Vad är en motion i riksdagen?",
options: ["En begäran om riksdagens ställningstagande", "En lagförslag", "En anmälan om misstanke om brott", "En begäran om att riksdagen ska upplösas"],
answer: 0
},
{
question: "Vem väljer Sveriges statsminister?",
options: ["Riksdagen", "Kungen", "Folket direkt i allmänna val", "Regeringen"],
answer: 0
},
{
question: "Vilken är den högsta juridiska instansen i Sverige?",
options: ["Riksdagen", "Regeringen", "Högsta domstolen", "Justitiekanslern"],
answer: 2
},
{
question: "Vad innebär det att Sverige är en konstitutionell monarki?",
options: ["Kungen är landets högsta politiska ledare", "Kungen har bara ceremoniella uppgifter", "Kungen styr landet tillsammans med regeringen", "Kungen kan fatta beslut om lagar och regler"],
answer: 1
},
{
question: "Vad är ett kammarsystem?",
options: ["Ett system där olika lagförslag debatteras", "Ett system där politiker delas upp i olika grupper", "Ett system för att dela upp riksdagen i mindre grupper", "Ett system där riksdagens arbete är uppdelat i två delar eller 'kammare'"],
answer: 3
},
{
question: "Vilket år inträdde Sverige i Europeiska Unionen?",
options: ["1995", "2000", "1991", "1986"],
answer: 0
},
{
question: "Vad innebär begreppet 'Allemansrätten'?",
options: ["Rätt att röra sig fritt i naturen och att tillfälligt uppehålla sig där", "Rätt att äga mark", "Rätt att bygga var som helst i Sverige", "Rätt att använda någon annans mark för kommersiella ändamål"],
answer: 0
},
{
question: "Vad innebär det att en lag är 'grundlagsfäst' i Sverige?",
options: ["Lagen kan inte ändras", "Lagen är inskriven i Sveriges grundlag", "Lagen har stöd av alla partier i riksdagen", "Lagen gäller bara för svenska medborgare"],
answer: 1
},
{
question: "Vad innebär det att Sverige är en 'välfärdsstat'?",
options: ["Alla medborgare får ekonomiskt stöd av staten", "Staten har ett utbrett socialt skyddsnät och erbjuder omfattande offentliga tjänster", "Staten tar hand om alla sjuka och gamla", "Ingen får tjäna mer än en viss summa pengar"],
answer: 1
},

{
    question: "Vad reglerar Successionsordningen?",
    options: ["Den svenska skolordningen", "Den svenska tronföljden och den kungliga familjens ställning", "Svensk kommunallag", "Svenska strafflagen"],
    answer: 1
},
{
    question: "Vilka är tre exempel på grundlagsskyddade fri- och rättigheter?",
    options: ["Informationsfrihet, rättssäkerhet, skydd mot diskriminering", "Rätten att köra bil, rätten att resa, rätten att jobba", "Rätten att vara ledig på helger, rätten till semester, rätten till sjukvård", "Rätten till skolgång, rätten att rösta, rätten till pension"],
    answer: 0
},
{
    question: "Hur ändrar man en grundlag i Sverige?",
    options: ["Genom en folkomröstning", "Genom ett beslut av kungen", "Genom ett beslut av regeringen", "Genom två beslut av riksdagen, med ett allmänt val emellan"],
    answer: 3
},
{
    question: "Vad innebär offentlighetsprincipen?",
    options: ["Att allmänheten har rätt att få tillgång till information och handlingar som finns hos offentliga myndigheter", "Att offentliga byggnader måste vara öppna för allmänheten", "Att alla offentliga sammanträden måste sändas på TV", "Att alla offentliga tjänstemän måste ge intervjuer till pressen"],
    answer: 0
},
{
    question: "I vilken lag regleras meddelarfriheten i Sverige?",
    options: ["I regeringsformen", "I tryckfrihetsförordningen", "I lagen om offentlig upphandling", "I lagen om skydd för den som slår larm om allvarliga missförhållanden"],
    answer: 3
},
{
    question: "Vad innebär förbudet mot ministerstyre?",
    options: ["Att ministrar inte får ta semester", "Att ministrar inte får ge direktiv till myndigheter om hur de ska hantera enskilda ärenden", "Att ministrar inte får prata med pressen", "Att ministrar inte får rösta i riksdagen"],
    answer: 1
},

{
    question: "Vad reglerar Successionsordningen i Sverige?",
    options: ["Den svenska tronföljden och den kungliga familjens ställning", "Sveriges statsministers befogenheter", "Sveriges utrikespolitik", "Sveriges ekonomi"],
    answer: 0
},
{
    question: "Vilken rättighet ger individen frihet att fritt uttrycka åsikter, kritisera makthavare och delta i samhällsdebatten?",
    options: ["Religionsfrihet", "Informationsfrihet", "Yttrandefrihet", "Demonstrationsfrihet"],
    answer: 2
},
{
    question: "Hur initieras en ändring av en grundlag i Sverige?",
    options: ["Genom en folkomröstning", "Genom ett förslag av regeringen, riksdagen eller en medborgarförening", "Genom ett domstolsbeslut", "Genom en kunglig förordning"],
    answer: 1
},
{
    question: "Vad innebär offentlighetsprincipen?",
    options: ["Allmänhetens rätt att få tillgång till information och handlingar som finns hos offentliga myndigheter", "Allmänhetens rätt att offentligt kritisera regeringen", "Myndigheternas rätt att hålla information hemlig", "Allmänhetens rätt att rösta i allmänna val"],
    answer: 0
},
{
    question: "Vad innebär förbudet mot ministerstyre i Sverige?",
    options: ["Det är förbjudet för ministrar att delta i riksdagens arbete", "Det är förbjudet för ministrar att påverka eller styra beslut inom en myndighet", "Det är förbjudet för ministrar att ändra lagar", "Det är förbjudet för ministrar att lämna landet utan tillstånd"],
    answer: 1
},
{
    question: "Vilka principer är utgångspunkten för värdegrunden i offentlig förvaltning?",
    options: ["Laglighet, objektivitet, saklighet, rättssäkerhet, likabehandling, icke-diskriminering, öppenhet, transparens, effektivitet, service", "Konfidentialitet, integritet, ansvar, professionalism, respekt", "Ekonomisk tillväxt, produktivitet, lönsamhet, konkurrens", "Partipolitiska lojaliteter, personligt engagemang, ekonomisk tillväxt"],
    answer: 0
},
{
    question: "Vad innebär kravet på effektivitet och service inom offentlig förvaltning?",
    options: ["Förvaltningen ska anstränga sig att använda sina resurser effektivt och leverera högkvalitativa tjänster till medborgarna", "Förvaltningen ska sätta winst och ekonomisk tillväxt först", "Förvaltningen ska prioritera att ge service till de mest förmögna medborgarna", "Förvaltningen ska sträva efter att anställa så många människor som möjligt"],
    answer: 0
}
   
  ],
  [
{
    "question": "Vad betyder ordet demokrati?",
    "options": ["En form av monarki", "En styrelseform där makten ligger hos folket", "En styrelseform där en enda person har all makt", "En styrelseform där religionen styr"],
    "answer": 1
},
{
    "question": "Vad innebär det att all makt utgår ifrån folket? Och i vilken lag finns den formuleringen?",
    "options": ["Det innebär att det är kungen som har all makt, finns i Sveriges konstitution", "Det innebär att det är medborgarna som är den högsta auktoriteten, finns i den svenska regeringsformen", "Det innebär att det är regeringen som har all makt, finns i den amerikanska konstitutionen", "Det innebär att all makt utgår från riksdagen, finns i Sveriges konstitution"],
    "answer": 1
},
{
    "question": "Varför är demokrati en färskvara?",
    "options": ["Eftersom den måste konsumeras snabbt", "Eftersom demokratiska institutioner måste ständigt förnyas", "Eftersom den blir gammal och otidsenlig", "Eftersom den förlorar sin smak efter ett tag"],
    "answer": 1
},
{
    "question": "Hur styrs Sverige?",
    "options": ["Genom en diktatur", "Genom en monarki", "Genom representativ parlamentarism", "Genom direkt demokrati"],
    "answer": 2
},
{
    "question": "Vad innebär representativ parlamentarism?",
    "options": ["Medborgarna väljer en kung att styra", "Medborgarna väljer representanter till ett parlament som tar beslut på deras vägnar", "Regeringen tar alla beslut utan inblandning av medborgarna", "Medborgarna röstar direkt på alla lagar och beslut"],
    "answer": 1
},

{
    "question": "Vad händer i en demokrati om regeringen inte agerar i enlighet med folkets vilja?",
    "options": ["Regeringen kan avsättas i nästa val", "Regeringen kan bli avsatt omedelbart", "Folket kan inte göra något åt det", "Regeringen måste betala böter"],
    "answer": 0
},
{
    "question": "Var hittar man formuleringen 'All offentlig makt i Sverige utgår från folket'?",
    "options": ["I den svenska regeringsformen, 1 kap. 1§", "I den svenska konstitutionen", "I den amerikanska konstitutionen", "I EU:s grundlag"],
    "answer": 0
},
{
    "question": "Varför behöver demokratiska principer och institutioner utmanas och förnyas regelbundet?",
    "options": ["För att passa in i det moderna samhället", "För att undvika att demokratin eroderar och ersätts av auktoritära eller totalitära system", "För att människor tröttnar på gamla idéer", "För att det är en del av demokratins definition"],
    "answer": 1
},
{
    "question": "Vem väljer medborgarna i en representativ parlamentarism?",
    "options": ["Representanter till en kung", "Representanter till ett parlament", "En president", "En diktator"],
    "answer": 1
},
{
    "question": "Vad gör de valda representanterna i en representativ parlamentarism?",
    "options": ["De utövar all makt utan insyn", "De tar beslut och styr landet på medborgarnas vägnar", "De avgör vilka lagar som ska röstas om av folket", "De styr över alla religiösa institutioner"],
    "answer": 1
},

{
    "question": "Vilken roll spelar medborgarna i en demokrati?",
    "options": ["De spelar ingen roll", "De får utse makten genom att välja sina representanter", "De fungerar endast som rådgivare till regeringen", "De implementerar lagarna"],
    "answer": 1
},
{
    "question": "I vilken lagstiftning sägs det att 'All offentlig makt i Sverige utgår från folket'?",
    "options": ["I den svenska konstitutionen", "I EU:s grundlag", "I den amerikanska konstitutionen", "I den svenska regeringsformen"],
    "answer": 3
},
{
    "question": "Varför kan demokrati betraktas som en färskvara?",
    "options": ["För att den behöver förnyas ständigt", "För att den har ett utgångsdatum", "För att den kan bli omodern", "För att den kan skadas av dåligt väder"],
    "answer": 0
},
{
    "question": "Vilken typ av regeringssystem använder Sverige?",
    "options": ["Direkt demokrati", "Representativ parlamentarism", "Konstitutionell monarki", "Autokrati"],
    "answer": 1
},
{
    "question": "Vad innebär det att leva under en representativ parlamentarism?",
    "options": ["Medborgarna väljer direkt på alla lagar och beslut", "Regeringen tar alla beslut utan inblandning av medborgarna", "Medborgarna väljer representanter till ett parlament som tar beslut på deras vägnar", "All makt ligger hos en kung eller drottning"],
    "answer": 2
},
],
[
{
    "question": "Hur ser rollerna och maktfördelningen ut mellan politiker, tjänstemän, medborgare och massmedia?",
    "options": ["Politiker utnämner tjänstemän, medborgare övervakas av massmedia", "Tjänstemän väljs av medborgare, politiker granskas av massmedia", "Medborgare väljer politiker, tjänstemän är experter, massmedia informerar och granskar", "Massmedia väljer politiker, medborgare styr tjänstemän"],
    "answer": 2
},
{
    "question": "Vilka är regeringens främsta uppgifter?",
    "options": ["Styra landet, förvalta offentliga resurser, upprätthålla lag och ordning, skydda nationens intressen", "Skapa nya lagar, förhandla internationella avtal, sköta lokal förvaltning", "Bestämma räntan, trycka pengar, kontrollera massmedia", "Bekämpa brott, organisera militären, bygga infrastruktur"],
    "answer": 0
},
{
    "question": "Vilka är riksdagens främsta uppgifter?",
    "options": ["Att stifta lagar och besluta om statens utgifter och inkomster i statsbudgeten", "Att styra landet och skydda nationens intressen", "Att övervaka massmedia och bestämma vilka lagar som ska avskaffas", "Att bestämma räntan och trycka pengar"],
    "answer": 0
},
{
    "question": "Vilken roll har vår kung/kungafamilj?",
    "options": ["De är landets politiska ledare och fattar alla beslut", "De har en mestadels ceremoniell och representativ roll", "De styr riksdagen och utnämner premiärministern", "De är ansvariga för att skapa nya lagar och för att styra militären"],
    "answer": 1
},
{
    "question": "Vem delegerar medborgare sin makt till i en demokrati?",
    "options": ["Till tjänstemän", "Till massmedia", "Till folkvalda politiker", "Till kungafamiljen"],
    "answer": 2
},
{
    "question": "Vilken roll har tjänstemän i samhället?",
    "options": ["De är experter och specialister", "De är beslutsfattare på olika nivåer", "De väljs av medborgarna", "De granskar politiker"],
    "answer": 0
},
{
    "question": "Vilket uppdrag har medierna?",
    "options": ["Att informera och granska", "Att fatta politiska beslut", "Att genomföra lagar", "Att representera landet vid officiella ceremonier"],
    "answer": 0
},
{
    "question": "Vad ingår i regeringens uppdrag att skydda nationens intressen?",
    "options": ["Att försvara landets suveränitet och förhandla med andra länder", "Att stifta lagar", "Att besluta om statens utgifter och inkomster", "Att välja politiker på olika nivåer i samhället"],
    "answer": 0
},
{
    "question": "Vilken är kungafamiljens främsta roll?",
    "options": ["Att stifta lagar", "Att styra landet", "Att representera landet vid officiella ceremonier och evenemang", "Att fatta politiska beslut och genomföra dem"],
    "answer": 2
},
{
    "question": "Vilken roll har medborgarna i maktfördelningen?",
    "options": ["Delegerar sin makt till folkvalda politiker", "De granskar politiker", "De tillhandahåller specialiserad kunskap", "De representerar landet vid officiella ceremonier"],
    "answer": 0
},
{
    "question": "Vad är en av de främsta uppgifterna för tjänstemän i samhället?",
    "options": ["De bestämmer statens budget", "De är experter och specialister inom olika områden", "De väljs till olika positioner av medborgarna", "De granskar andra tjänstemän"],
    "answer": 1
},
{
    "question": "Vilken roll spelar massmedia i samhället?",
    "options": ["De fungerar som ett verktyg för regeringen att sprida propaganda", "De tillhandahåller underhållning till medborgarna", "De har ett uppdrag att både informera och granska", "De bestämmer vilka lagar som ska stiftas"],
    "answer": 2
},
{
    "question": "Vilken är en av regeringens huvuduppgifter i förhållande till landets resurser?",
    "options": ["De säljer landets resurser till högstbjudande", "De förvaltar offentliga resurser som budgetering, skatteintag och fördelning av resurser", "De köper resurser från andra länder", "De distribuerar alla landets resurser jämnt mellan medborgarna"],
    "answer": 1
},
{
    "question": "Vad gör kungen eller kungafamiljen i sin roll som statschef?",
    "options": ["De stiftar lagar och beslutar om statens budget", "De styr alla aspekter av regeringen", "De representerar landet vid officiella ceremonier, statsbesök och internationella evenemang", "De granskar och godkänner alla beslut som fattas av riksdagen"],
    "answer": 2
}
    ],
 [

{
    "question": "Vilken domstol skulle ta upp ett ärende om en tvist mellan två individer angående fastighetsgränser?",
    "options": ["Förvaltningsrätten", "Högsta förvaltningsdomstolen", "Tingsrätten", "Högsta domstolen"],
    "answer": 2
},
{
    "question": "Vilken domstol kan en person överklaga till om hen anser att Skatteverkets beslut om skattesatsen eller skatteavdraget inte är rättvist?",
    "options": ["Högsta domstolen", "Hovrätten", "Tingsrätten", "Förvaltningsrätten"],
    "answer": 3
},
{
    "question": "Hur länge har Sverige haft en offentlig förvaltning?",
    "options": ["Över 500 år", "Över 200 år", "Över 100 år", "Över 50 år"],
    "answer": 1
},
{
    "question": "När kan spåras den moderna svenska offentliga förvaltningen tillbaka till?",
    "options": ["1909", "1809", "1709", "1609"],
    "answer": 1
},
{
    "question": "Vilken av följande uppgifter tillhör offentlig förvaltning?",
    "options": ["Undervisning", "Utrikespolitik", "Stifta lagar", "Döma i brottmål"],
    "answer": 0
},

{
    "question": "Vilken domstol skulle granska ett överklagat ärende från förvaltningsrätten?",
    "options": ["Högsta domstolen", "Hovrätten", "Tingsrätten", "Kammarrätten"],
    "answer": 3
},
{
    "question": "Vad skulle ske om någon var missnöjd med beslutet från kammarrätten?",
    "options": ["Ärendet skulle gå tillbaka till förvaltningsrätten", "Ärendet skulle gå till tingsrätten", "Ärendet skulle gå till Högsta förvaltningsdomstolen", "Ärendet skulle gå till Högsta domstolen"],
    "answer": 2
},
{
    "question": "Vilket av följande är ett exempel på rättslig verksamhet inom offentlig förvaltning?",
    "options": ["Undervisning", "Ärendehandläggning vid Försäkringskassan", "Byggande och underhåll av gator", "Transportverksamhet"],
    "answer": 1
},
{
    "question": "Vilket av följande är ett exempel på faktisk verksamhet inom offentlig förvaltning?",
    "options": ["Brottsbekämpning", "Ärendehandläggning vid Skatteverket", "Undervisning", "Stiftande av lagar"],
    "answer": 2
}
  ],
  [

{
    "question": "Hur styrs Sveriges myndigheter?",
    "options": ["Via kommunfullmäktige", "Via riksdagen", "Genom ministerstyre", "Genom regleringsbrev och instruktioner från regeringen"],
    "answer": 3
},
{
    "question": "Vad är ministerstyre?",
    "options": ["Ett system där politiskt tillsatta personer påverkar ärenden hos myndigheter", "Ett system där ministrar styr direkt över tingsrätter", "Ett system där ministrar övervakar kommunfullmäktige", "Ett system där ministrar har makt att ändra regleringsbrev"],
    "answer": 0
},
{
    "question": "Hur många kommuner finns det i Sverige?",
    "options": ["100", "250", "290", "350"],
    "answer": 2
},
{
    "question": "Vad är en viktig skillnad mellan offentlig sektor och privat sektor i Sverige gällande ägande och drift?",
    "options": ["Båda ägs och drivs av privata företag", "Offentlig sektor ägs av staten och drivs av privata företag", "Offentlig sektor ägs och drivs av staten eller kommuner och landsting, medan privat sektor ägs av privata företag eller enskilda individer", "Båda ägs och drivs av staten eller kommuner och landsting"],
    "answer": 2
},
{
    "question": "Hur finansieras huvudsakligen den offentliga sektorn i Sverige?",
    "options": ["Genom försäljning av varor och tjänster", "Genom privata investeringar", "Genom skatter och avgifter som tas ut från medborgarna", "Genom lån från internationella finansinstitut"],
    "answer": 2
},
{
    "question": "Vilken roll spelar juridiken i samspel mellan politik och förvaltning?",
    "options": ["Den skapar ramar och regler", "Den fastställer mål och beslut", "Den genomför och verkställer beslut", "Den har ingen direkt inverkan"],
    "answer": 0
},
{
    "question": "Vilket av följande är ett kännetecken för den offentliga sektorn i Sverige jämfört med den privata sektorn?",
    "options": ["Den strävar efter att generera vinst och maximera avkastning för aktieägarna", "Den ägs av privata företag eller enskilda individer", "Den är föremål för politisk styrning och ansvar gentemot medborgarna och deras valda representanter", "Den finansieras genom försäljning av varor och tjänster samt investeringar från privata aktörer"],
    "answer": 2
},
{
    "question": "Vad är en vanlig uppgift för den offentliga förvaltningen i Sverige?",
    "options": ["Att generera vinst och maximera avkastning för aktieägarna", "Att följa regler och lagar som reglerar arbetsförhållanden och anställningsskydd", "Att ärendehandläggning, t.ex. hos Försäkringskassan, Skatteverket", "Att finansieras genom försäljning av varor och tjänster samt investeringar från privata aktörer"],
    "answer": 2
},
{
    "question": "Hur länge har Sverige haft en offentlig förvaltning?",
    "options": ["Sedan 1809", "Sedan 1850", "Sedan 1900", "Sedan 1950"],
    "answer": 0
},
{
    "question": "Vilket exempel på domstol skulle hantera en tvist om fastighetsgränser mellan två individer i första instans?",
    "options": ["Högsta förvaltningsdomstolen", "Kammarrätten", "Hovrätt", "Tingsrätt"],
    "answer": 3
}

  ],
  [

{
    "question": "Vad är en norm i samhällskontext?",
    "options": ["En lag i riksdagen", "En skriftlig regel inom en organisation", "En oskriven regel som styr beteendet och förväntningarna i ett samhälle eller grupp", "En officiell regel fastställd av regeringen"],
    "answer": 2
},
{
    "question": "Vilken av följande är inte en av Sveriges grundlagar?",
    "options": ["Regeringsformen", "Tryckfrihetsförordningen", "Yttrandefrihetsgrundlagen", "Arbetsrättslag"],
    "answer": 3
},
{
    "question": "Vilken rättighet skyddas av Tryckfrihetsförordningen?",
    "options": ["Rätten att fritt utöva sin religion eller tro", "Rätten att fritt publicera och sprida information utan statlig censur", "Rätten att fritt bilda och vara medlem i föreningar och organisationer", "Skydd mot diskriminering på grund av kön, etnisk tillhörighet, religion, funktionsnedsättning, sexuell läggning och andra grunder"],
    "answer": 1
},
{
    "question": "Vad innebär rättssäkerhet?",
    "options": ["Rätt till en rättvis rättegång, skydd mot godtyckliga frihetsberövanden och krav på rättssäkerhetsprinciper", "Rätten att fritt uttrycka åsikter, kritisera makthavare och delta i samhällsdebatten", "Rätten att fritt ta del av information och dokument som innehas av myndigheter och andra offentliga organ", "Rätten att fritt och fredligt samlas och demonstrera för olika ändamål"],
    "answer": 0
},
{
    "question": "Vad reglerar Successionsordningen?",
    "options": ["Den svenska tronföljden och den kungliga familjens ställning", "Skyddet för yttrandefriheten och tryckfriheten", "Rätten att fritt uttrycka åsikter och delta i samhällsdebatten", "Skydd mot diskriminering på grund av kön, etnisk tillhörighet, religion, funktionsnedsättning, sexuell läggning och andra grunder"],
    "answer": 0
},
{
    "question": "Vad är huvudfokus för offentlig sektor?",
    "options": ["Att generera vinst", "Att tillhandahålla offentliga tjänster och uppfylla samhällsbehov", "Att maximera aktieägarnas avkastning", "Att konkurrera på en fri marknad"],
    "answer": 1
},
{
    "question": "Vad är ministerstyre?",
    "options": ["Ett politiskt system där en minister har högsta exekutiva makt", "Ett system där en politiskt tillsatt person påverkar hantering av ärenden hos myndigheter", "En typ av styrelse i en myndighet", "Ett system där ministeriet har kontroll över alla offentliga tjänster"],
    "answer": 1
},
{
    "question": "Hur många regioner har vi i Sverige?",
    "options": ["50", "10", "21", "29"],
    "answer": 2
},
{
    "question": "Vad är kopplingen mellan politik, juridik och förvaltning?",
    "options": ["Det finns ingen koppling", "Politiken bestämmer juridikens ramar och förvaltningen följer dessa", "Politiken fastställer mål och beslut, juridiken skapar ramar och regler, och förvaltningen genomför och verkställer dessa beslut inom ramen för lagstiftningen", "Juridiken styr politiken och förvaltningen utför politikens beslut"],
    "answer": 2
},
{
    "question": "Vad är en viktig skillnad mellan offentlig sektor och privat sektor när det gäller ägande och drift?",
    "options": ["Offentlig sektor ägs och drivs av privata företag medan privat sektor ägs av staten", "Både offentlig sektor och privat sektor ägs och drivs av staten", "Både offentlig sektor och privat sektor ägs och drivs av privata företag", "Offentlig sektor ägs och drivs av staten eller kommuner och landsting, medan privat sektor ägs av privata företag eller enskilda individer"],
    "answer": 3
},

{
    "question": "Vad är en norm?",
    "options": ["En lag som alla måste följa", "En skriven regel som styr ett företags policy", "En oskriven regel eller standard som styr och påverkar beteendet och förväntningarna i ett samhälle eller en grupp", "En matematisk term"],
    "answer": 2
},
{
    "question": "Vilken är inte en av Sveriges grundlagar?",
    "options": ["Regeringsformen", "Tryckfrihetsförordningen", "Konstitutionslagen", "Successionsordningen"],
    "answer": 2
},
{
    "question": "Vilken fri- och rättighet är inte grundlagsskyddad i Sverige?",
    "options": ["Yttrandefrihet", "Tryckfrihet", "Rätt till arbete", "Religionsfrihet"],
    "answer": 2
},
{
    "question": "Vilken grundlag skyddar yttrandefriheten och inkluderar kommunikationsformer som radio, tv och internet?",
    "options": ["Yttrandefrihetsgrundlagen", "Tryckfrihetsförordningen", "Regeringsformen", "Successionsordningen"],
    "answer": 0
},
{
    "question": "Vilken rättighet innebär skydd mot diskriminering på grund av kön, etnisk tillhörighet, religion, funktionsnedsättning, sexuell läggning och andra grunder?",
    "options": ["Yttrandefrihet", "Tryckfrihet", "Rättssäkerhet", "Skydd mot diskriminering"],
    "answer": 3
}, ],
[

{
    "question": "Vem kan initiera en ändring av en grundlag?",
    "options": ["Endast regeringen", "Endast riksdagen", "Riksdagen, regeringen eller en medborgarförening", "Endast en medborgarförening"],
    "answer": 2
},
{
    "question": "Vilket utskott gör en konstitutionell prövning av ett förslag till ändring av en grundlag?",
    "options": ["Finansutskottet", "Konstitutionsutskottet", "Utbildningsutskottet", "Försvarsutskottet"],
    "answer": 1
},
{
    "question": "Vilken fri- och rättighet är inte grundlagsskyddad i Sverige?",
    "options": ["Informationsfrihet", "Rätt till en rättvis rättegång", "Skydd mot diskriminering", "Rätt till arbete"],
    "answer": 3
},
{
    "question": "Vilken produkt eller tjänst är typiskt inte upphandlad inom offentlig verksamhet?",
    "options": ["Sanering", "Bygg- och anläggning", "Hyllvaror", "Privat hushållsrengöring"],
    "answer": 3
},
{
    "question": "Hur många tredjedelars majoritet krävs för att riksdagen ska anta ett förslag till ändring av en grundlag?",
    "options": ["En tredjedel", "Hälften", "Två tredjedelar", "Tre fjärdedelar"],
    "answer": 2
},

{
    "question": "Vad händer efter att förslaget om ändring av en grundlag har antagits av riksdagen?",
    "options": ["Det skickas till regeringen för prövning", "Det implementeras omedelbart", "Det skickas till EU för godkännande", "Det sänds till folkomröstning"],
    "answer": 0
},
{
    "question": "Vad innebär informationsfrihet?",
    "options": ["Rätten att publicera vilken information som helst", "Rätten att fritt ta del av information och dokument som innehas av myndigheter och andra offentliga organ", "Rätten att inte dela med sig av sin personliga information", "Rätten att ha tillgång till allt innehåll på internet"],
    "answer": 1
},
{
    "question": "Vad innebär rättssäkerhet?",
    "options": ["Rätt till en rättvis rättegång, skydd mot godtyckliga frihetsberövanden och krav på rättssäkerhetsprinciper", "Rätten att bli behandlad rättvist av polisen", "Rätten att ha en säker bostad", "Rätten att inte bli stämd"],
    "answer": 0
},
{
    "question": "Vilken grundlagsskyddad rättighet skyddar mot diskriminering?",
    "options": ["Demonstrationsfrihet", "Religionsfrihet", "Skydd mot diskriminering", "Yttrandefrihet"],
    "answer": 2
},
{
    "question": "Vilken tjänst är typiskt upphandlad inom offentlig verksamhet?",
    "options": ["Fastighetsmäklartjänster", "Hälso- och sjukvårdstjänster", "Bilförsäljning", "Restaurangverksamhet"],
    "answer": 1
}
  ],
  [


{
    "question": "Vad innebär offentlighetsprincipen?",
    "options": ["Allmänhetens rätt att påverka politiska beslut", "Allmänhetens rätt att få tillgång till information och handlingar som finns hos offentliga myndigheter", "Offentliga myndigheters skyldighet att informera allmänheten om sina beslut", "Allmänhetens rätt att vara medlem i offentliga myndigheter"],
    "answer": 1
},
{
    "question": "Vad betyder meddelarfrihet?",
    "options": ["Anställda inom offentlig verksamhet har rätt att lämna uppgifter om missförhållanden utan att bli utsatta för repressalier", "Alla medborgare har rätt att meddela myndigheter om brott", "Anställda har rätt att meddela sina chefer om missförhållanden på arbetsplatsen", "Allmänheten har rätt att meddela politiska ledare om deras åsikter"],
    "answer": 0
},
{
    "question": "I vilken lag regleras meddelarfriheten i Sverige?",
    "options": ["Lag om offentlig förvaltning", "Lag om skydd för den som slår larm om allvarliga missförhållanden inom det allmänna", "Lag om anställningsskydd", "Lag om informationsfrihet"],
    "answer": 1
},
{
    "question": "Vad innebär förbudet mot ministerstyre i Sverige?",
    "options": ["Ministrar får inte arbeta inom myndigheter", "Ministrar får inte påverka eller styra beslut inom en myndighet", "Ministrar får inte ha någon kontakt med myndigheter", "Ministrar får inte vara medlemmar i politiska partier"],
    "answer": 1
  },
  ],
  [
    {
        question: "Vilka principer är utgångspunkten för värdegrunden i offentlig förvaltning?",
        options: ["Laglighet, Objektivitet, Rättssäkerhet, Likabehandling, Öppenhet, Effektivitet", "Laglighet, Rättssäkerhet, Diskriminering, Sekretess, Effektivitet", "Objektivitet, Likabehandling, Sekretess, Öppenhet, Laglighet", "Rättssäkerhet, Diskriminering, Effektivitet, Objektivitet, Öppenhet"],
        answer: 0
    },
    {
        question: "Vad innebär kraven på effektivitet och service i praktiken inom offentlig förvaltning?",
        options: ["Att använda resurser effektivt, leverera högkvalitativa tjänster, optimera arbetsprocesser, tillhandahålla snabb service", "Att minimera kostnader, öka vinsten, fokusera på försäljning", "Att maximera antalet anställda, minska arbetsbelastningen, öka löner", "Att öka skatteintäkterna, minska offentliga utgifter, främja ekonomisk tillväxt"],
        answer: 0
    },
    {
        question: "Vad innebär kraven på objektivitet och saklighet samt likhetskrav i praktiken inom offentlig förvaltning?",
        options: ["Att fatta beslut baserat på faktiska uppgifter, vara opartiska, tillämpa en icke-diskriminerande policy", "Att fatta beslut baserat på personliga åsikter, vara opartiska, tillämpa en diskriminerande policy", "Att fatta beslut baserat på faktiska uppgifter, vara partiska, tillämpa en icke-diskriminerande policy", "Att fatta beslut baserat på personliga åsikter, vara partiska, tillämpa en diskriminerande policy"],
        answer: 0
    },
    {
        question: "Vad innebär laglighetsprincipen i offentlig förvaltning?",
        options: ["Att offentlig förvaltning ska grundas på lagar och följa dem", "Att offentlig förvaltning ska skapa nya lagar", "Att offentlig förvaltning inte ska följa lagar", "Att offentlig förvaltning ska kritisera lagar"],
        answer: 0
    },
    {
        question: "Vad innebär rättssäkerhetsprincipen i offentlig förvaltning?",
        options: ["Medborgare ska ha rätt att få sina rättigheter och skyldigheter tillgodosedda på ett rättssäkert sätt", "Medborgare ska inte ha rätt att få sina rättigheter och skyldigheter tillgodosedda", "Rättssäkerhet har ingen betydelse inom offentlig förvaltning", "Rättssäkerhet innebär rätten att bryta lagen utan konsekvenser"],
        answer: 0
    },
    {
        question: "Vad innebär principen om likabehandling och icke-diskriminering i offentlig förvaltning?",
        options: ["Alla människor ska behandlas lika och diskriminering på grund av kön, etnicitet, religion, funktionsnedsättning eller annan grund är förbjuden", "Diskriminering är tillåten inom offentlig förvaltning", "Endast vissa människor ska behandlas lika inom offentlig förvaltning", "Principen om likabehandling och icke-diskriminering gäller inte för offentlig förvaltning"],
        answer: 0
    },
    {
        question: "Vad innebär öppenhets- och transparensprincipen i offentlig förvaltning?",
        options: ["Offentlig förvaltning ska vara öppen och transparent i sin verksamhet och beslutsfattande", "Offentlig förvaltning ska vara stängd och ogenomskinlig", "Offentlig förvaltning behöver inte vara öppen eller transparent", "Öppenhet och transparens har ingen betydelse inom offentlig förvaltning"],
        answer: 0
    }
  ],
  [
    {
        question: "Vad innebär likhetskravet i praktiken inom offentlig förvaltning?",
        options: ["Alla medborgare ska betala lika mycket skatt", "Kandidater till en tjänst bedöms utifrån deras kompetens, erfarenhet och lämplighet", "Offentliga tjänster bör tillhandahållas på olika sätt beroende på medborgarens inkomst", "Baserat på kön eller etnicitet väljs kandidater till en tjänst"],
        answer: 1
    },
    {
        question: "Vad innebär kravet på respekt i offentlig förvaltning?",
        options: ["Alla människor ska bemötas med värdighet, uppmärksamhet och ömsesidig respekt", "Respekt innebär att man ska vara rädd för myndigheterna", "Kravet på respekt innebär att tjänstemän alltid har rätt", "Kravet på respekt betyder att man ska behandla alla olika beroende på deras status eller position"],
        answer: 0
    },
    {
        question: "Varför är kravet på transparens så viktigt inom offentlig förvaltning?",
        options: ["Transparens främjar öppenhet och tillit, bygger förtroende hos medborgarna och säkerställer ansvarsskyldighet", "Transparens är viktigt för att dölja offentliga åtgärder och beslut", "Transparens är bara viktigt för privatsektorn, inte för offentlig förvaltning", "Transparens är viktigt eftersom det minskar insynen i offentlig förvaltning"],
        answer: 0
    },

    {
        question: "Hur kan likhetskravet praktiseras under en rekryteringsprocess i offentlig förvaltning?",
        options: ["Genom att rekrytera baserat på vänskap", "Genom att rekrytera baserat på kön och etnicitet", "Genom att rekrytera baserat på kompetens, erfarenhet och lämplighet för tjänsten", "Genom att rekrytera baserat på ålder och religion"],
        answer: 2
    },
    {
        question: "Vilket påstående bäst beskriver kravet på respekt inom offentlig förvaltning?",
        options: ["Respekt innebär att tjänstemän ska be om ursäkt för sina handlingar", "Respekt innebär att bara respektera dem som har högre positioner", "Respekt innebär att bemöta alla med värdighet, uppmärksamhet och ömsesidig respekt", "Respekt innebär att favorisera vissa individer"],
        answer: 2
    },
    {
        question: "Varför bidrar kravet på transparens till förtroende hos medborgarna inom offentlig förvaltning?",
        options: ["Eftersom det döljer offentliga beslut", "Eftersom det gör det möjligt för korruption", "Eftersom det skapar osäkerhet", "Eftersom det främjar öppenhet, tillåter insyn och säkerställer ansvarsskyldighet"],
        answer: 3
    },

    {
        question: "Vilken faktor får inte vara avgörande vid rekrytering enligt likhetskravet inom offentlig förvaltning?",
        options: ["Kompetens", "Erfarenhet", "Lämplighet för tjänsten", "Etnicitet"],
        answer: 3
    },
    {
        question: "Vad innebär ett respektfullt bemötande av en medborgare i offentlig förvaltning?",
        options: ["Att ignorera medborgarens behov och frågor", "Att ge vag eller felaktig information", "Att lyssna aktivt på deras behov och frågor, ge tydlig information och vara tillmötesgående", "Att ge medborgaren minsta möjliga tid och uppmärksamhet"],
        answer: 2
    },
    {
        question: "Vad är en konsekvens av bristande transparens inom offentlig förvaltning?",
        options: ["Ökad tillit hos medborgarna", "Förbättrad ansvarsskyldighet", "Minskad risk för korruption", "Ökad risk för missbruk av makt"],
        answer: 3
    }
  ],
  [

    {
        question: "Vilket yrke är ett exempel på ett som omfattas av särskilda sekretessregler?",
        options: ["Lärare", "Busschaufför", "Advokat", "Arkitekt"],
        answer: 2
    },
    {
        question: "Vad syftar begreppet 'samhällsnytta' på?",
        options: ["Den positiva effekten en verksamhet har för individens vinst", "Den negativa effekten en verksamhet har för samhället", "Den positiva effekten en verksamhet har för samhället", "Ingen av de ovan"],
        answer: 2
    },
    {
        question: "Vad handlar 'respekt' om i offentlig förvaltning?",
        options: ["Att ignorera andra människors behov", "Att behandla andra med hänsyn och tolerans", "Att prioritera egna behov över andra", "Att visa intolerans mot olikheter"],
        answer: 1
    },
    {
        question: "Vad innebär begreppet 'legalitet' i offentlig förvaltning?",
        options: ["Att agera enligt gällande lagar och föreskrifter", "Att bryta gällande lagar och föreskrifter", "Att ignorera gällande lagar och föreskrifter", "Inget av ovanstående"],
        answer: 0
    },
    {
        question: "Vad innebär begreppet 'service' i offentlig förvaltning?",
        options: ["Att ignorera andras behov och önskemål", "Att tillhandahålla tjänster eller assistans till andra för att möta deras behov och önskemål", "Att vara otillgänglig och oprofessionell", "Inget av ovanstående"],
        answer: 1
    },
    {
        question: "Vad innebär begreppet 'objektivitet' i offentlig förvaltning?",
        options: ["Att fatta beslut baserat på personliga åsikter", "Att påverka beslut med partipolitik", "Att fatta beslut baserat på faktiska och relevanta uppgifter", "Att fatta beslut baserat på irrelevanta uppgifter"],
        answer: 2
    },
    {
        question: "Vad innebär begreppet 'saklighet' i offentlig förvaltning?",
        options: ["Att fatta beslut baserat på irrelevanta uppgifter", "Att påverka beslut med personliga intressen", "Att göra bedömningar baserat på objektiva kriterier", "Inget av ovanstående"],
        answer: 2
    },
    {
        question: "Vad innebär begreppet 'likhetskrav' i offentlig förvaltning?",
        options: ["Att behandla alla människor olika", "Att tillämpa en diskriminerande policy", "Att behandla alla människor lika och inte diskriminera på grund av kön, etnicitet, religion, funktionsnedsättning eller annan grund", "Att gynna eller missgynna någon specifik grupp"],
        answer: 2
    },
    {
        question: "Vilket yrke omfattas av särskilda sekretessregler?",
        options: ["Läkare", "Advokater", "Poliser", "Lärare"],
        answer: 1
    },
    {
        question: "Vad är en betydande aspekt av samhällsnytta?",
        options: ["Att främja social rättvisa och skydda sårbara grupper", "Att främja ojämlikhet och social exkludering", "Att främja korruption och maktmissbruk", "Att främja miljöskador och resursslöseri"],
        answer: 0
    },
    {
        question: "Vad innebär begreppet 'respekt' i offentlig förvaltning?",
        options: ["Att behandla andra med förakt och intolerans", "Att behandla andra med hänsyn, värdering och tolerans", "Att ignorera och misskänna olikheter", "Inget av ovanstående"],
        answer: 1
    },
    {
        question: "Vad innebär begreppet 'legalitet' i offentlig förvaltning?",
        options: ["Att agera i strid med gällande lagar och föreskrifter", "Att agera utan hänsyn till gällande lagar och föreskrifter", "Att agera enligt gällande lagar och föreskrifter", "Inget av ovanstående"],
        answer: 2
    }
]
];
