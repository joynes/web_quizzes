
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
        "options": ["Kunglig makt", "Folkets makt", "Presidentens makt", "Partiets makt"],
        "answer": 1
    },
    {
        "question": "Vad innebär det att all makt utgår ifrån folket? Och i vilken lag finns den formuleringen?",
        "options": ["Alla beslut fattas av befolkningen, i Föreningslagen", "Alla beslut fattas av befolkningen, i Regeringsformen", "Regeringen bestämmer allt, i Regeringsformen", "Regeringen bestämmer allt, i Föreningslagen"],
        "answer": 1
    },
    {
        "question": "Varför är demokrati en färskvara?",
        "options": ["Eftersom den kan bli föråldrad", "Eftersom den måste underhållas och skyddas", "Eftersom den kan ätas upp", "Eftersom den kan säljas"],
        "answer": 1
    },
    {
        "question": "Hur styrs Sverige?",
        "options": ["Genom en diktator", "Genom en monark", "Genom en demokrati", "Genom en oligarki"],
        "answer": 2
    },
    {
        "question": "Vad innebär representativ parlamentarism?",
        "options": ["Folket röstar direkt på lagförslag", "Folket röstar in företrädare som fattar beslut å deras vägnar", "Regeringen väljs av monarken", "Regeringen utses av ett utvalt råd"],
        "answer": 1
    },

    {
        "question": "Hur ser rollerna och maktfördelningen ut mellan politiker – tjänstemän – medborgare - massmedia?",
        "options": ["Politiker bestämmer allt, tjänstemän utför, medborgare röstar, massmedia rapporterar", "Tjänstemän bestämmer allt, politiker utför, medborgare röstar, massmedia rapporterar", "Medborgare bestämmer allt, politiker utför, tjänstemän övervakar, massmedia rapporterar", "Massmedia bestämmer allt, politiker utför, tjänstemän övervakar, medborgare röstar"],
        "answer": 0
    },
    {
        "question": "Vilka är regeringens främsta uppgifter?",
        "options": ["Stifta lagar, verkställa domar", "Stifta lagar, verkställa lagar", "Verkställa lagar, föreslå lagar", "Föreslå lagar, utöva tillsyn"],
        "answer": 2
    },
    {
        "question": "Vilka är riksdagens främsta uppgifter?",
        "options": ["Verkställa lagar, föreslå lagar", "Stifta lagar, verkställa lagar", "Stifta lagar, kontrollera regeringen", "Föreslå lagar, utöva tillsyn"],
        "answer": 2
    },
    {
        "question": "Vilken roll har vår kung/kungafamilj?",
        "options": ["Styra landet", "Representera landet och har ceremoniella uppgifter", "Bestämma lagar", "Verkställa lagar"],
        "answer": 1
    },
    {
        "question": "Vilka olika typer av domstolar finns det, och vilka är deras respektive uppgifter?",
        "options": ["Tingsrätt, hovrätt, Högsta domstolen - att döma i brottmål", "Tingsrätt, hovrätt, Högsta domstolen - att utföra lagar", "Tingsrätt, hovrätt, Högsta domstolen - att föreslå lagar", "Tingsrätt, hovrätt, Högsta domstolen - att kontrollera lagar"],
        "answer": 0
    },
    {
        "question": "Hur länge har vi haft en offentlig förvaltning i Sverige?",
        "options": ["Sedan 1900-talet", "Sedan 1800-talet", "Sedan 1700-talet", "Sedan medeltiden"],
        "answer": 3
    },
    {
        "question": "Vad kännetecknar offentlig förvaltning?",
        "options": ["Företagsdrift", "Uppdrag att verkställa politiska beslut", "Ansvar för nationens ekonomi", "Ansvar för att skapa lagar"],
        "answer": 1
    },
    {
        "question": "Hur styrs våra myndigheter?",
        "options": ["Av Kungen", "Av regeringen och riksdagen", "Av kommunerna", "Av EU"],
        "answer": 1
    },
    {
        "question": "Hur många kommuner och regioner har vi i Sverige?",
        "options": ["290 kommuner och 21 regioner", "200 kommuner och 20 regioner", "300 kommuner och 25 regioner", "280 kommuner och 19 regioner"],
        "answer": 0
    },
    {
        "question": "Beskriv hur politik, juridik och förvaltning hör ihop.",
        "options": ["Politik bestämmer lagarna, juridik tolkar dem, förvaltning verkställer dem", "Juridik bestämmer lagarna, politik tolkar dem, förvaltning verkställer dem", "Förvaltning bestämmer lagarna, juridik tolkar dem, politik verkställer dem", "Juridik bestämmer lagarna, förvaltning tolkar dem, politik verkställer dem"],
        "answer": 0
    },
    {
        "question": "Beskriv några viktiga skillnader mellan offentlig sektor och privat sektor?",
        "options": ["Offentlig sektor finansieras av skatter, privat sektor av vinst", "Offentlig sektor styrs av regeringen, privat sektor av kunderna", "Offentlig sektor ägs av staten, privat sektor ägs av aktieägare", "Alla ovanstående"],
        "answer": 3
    },
    {
        "question": "Vad är en norm?",
        "options": ["En lag", "En tradition", "Ett oskrivet samhällsregel", "Ett kontraktsförhållande"],
        "answer": 2
    },
    {
        "question": "Vilka är våra grundlagar?",
        "options": ["Brottsbalken, Skollagen, Arbetsmiljölagen", "Regeringsformen, Successionsordningen, Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen", "Brottsbalken, Skollagen, Tryckfrihetsförordningen, Yttrandefrihetsgrundlagen", "Regeringsformen, Brottsbalken, Skollagen, Arbetsmiljölagen"],
        "answer": 1
    },
    {
        "question": "Vilka fri- och rättigheter är grundlagsskyddade?",
        "options": ["Rätt till arbete, rätt till bostad, rätt till utbildning", "Rätt till yttrandefrihet, tryckfrihet, religionsfrihet", "Rätt till arbete, rätt till yttrandefrihet, tryckfrihet", "Rätt till bostad, rätt till utbildning, religionsfrihet"],
        "answer": 1
    },
    {
        "question": "Hur ändrar man en grundlag?",
        "options": ["Genom enkel majoritet i riksdagen", "Genom enkel majoritet i regeringen", "Genom två på varandra följande beslut av riksdagen med ett val emellan", "Genom folkomröstning"],
        "answer": 2
    },
    {
        "question": "Ge exempel på tre grundlagsskyddade fri- och rättigheter.",
        "options": ["Rätt till arbete, rätt till bostad, rätt till utbildning", "Rätt till yttrandefrihet, tryckfrihet, religionsfrihet", "Rätt till arbete, rätt till yttrandefrihet, tryckfrihet", "Rätt till bostad, rätt till utbildning, religionsfrihet"],
        "answer": 1
    },
    {
        "question": "Ge exempel på tjänster och produkter som upphandlas inom offentlig verksamhet.",
        "options": ["Hotellnätter, försäkringar, kontorsmaterial", "Lyxbilar, privatflyg, lyxyachter", "Privatbostäder, privatjordbruk, privatläkare", "Personliga gåvor, underhållning, alkohol"],
        "answer": 0
    },
    {
        "question": "Vad innebär offentlighetsprincipen?",
        "options": ["Allmänheten har rätt att ta del av myndigheters handlingar", "Allmänheten har rätt att delta i politiska möten", "Allmänheten har rätt att rösta i allmänna val", "Allmänheten har rätt att kritisera regeringen"],
        "answer": 0
    },
    {
        "question": "Vad betyder meddelarfrihet? I vilken lag regleras det?",
        "options": ["Rätten att tala fritt i media, regleras i Tryckfrihetsförordningen", "Rätten att tala fritt i media, regleras i Yttrandefrihetsgrundlagen", "Rätten att ge information till media om missförhållanden på arbetsplatsen, regleras i Tryckfrihetsförordningen", "Rätten att ge information till media om missförhållanden på arbetsplatsen, regleras i Yttrandefrihetsgrundlagen"],
        "answer": 2
    },
    {
        "question": "Vad innebär förbudet mot ministerstyre som vi har i Sverige?",
        "options": ["Ministrar får inte ingripa i enskilda ärenden hos myndigheterna", "Ministrar får inte ingripa i politiska debatter", "Ministrar får inte ingripa i riksdagens arbete", "Ministrar får inte ingripa i kungens arbete"],
        "answer": 0
    },
    {
        "question": "Vilka principer är utgångspunkten för värdegrunden i offentlig förvaltning?",
        "options": ["Demokrati, laglighet, effektivitet, objektivitet, likhet, transparens", "Marknadsstyrning, vinstmaximering, konkurrens, effektivitet", "Tradition, konsensus, homogenitet, stabilitet", "Innovation, risktagande, dynamik, kreativitet"],
        "answer": 0
    },
    {
        "question": "Beskriv vad kraven på effektivitet och service innebär i praktiken.",
        "options": ["Myndigheter ska sträva efter att använda resurser på bästa sätt och ge god service till medborgarna", "Myndigheter ska minimera kostnader oavsett konsekvenserna", "Myndigheter ska maximera intäkter oavsett konsekvenserna", "Myndigheter ska fokusera på att bygga en stark organisation oavsett kostnader"],
        "answer": 0
    },
    {
        "question": "Beskriv vad kraven på objektivitet och saklighet och likhetskrav innebär i praktiken.",
        "options": ["Myndigheter ska behandla alla ärenden och personer lika och basera beslut på fakta", "Myndigheter ska behandla ärenden och personer baserat på deras sociala status", "Myndigheter ska behandla ärenden och personer baserat på politiska preferenser", "Myndigheter ska behandla ärenden och personer baserat på personliga relationer"],
        "answer": 0
    },
    {
        "question": "Beskriv vad likhetskrav innebär i praktiken.",
        "options": ["Alla ska behandlas lika oavsett personliga förhållanden", "Alla ska behandlas lika baserat på social status", "Alla ska behandlas lika baserat på politiska preferenser", "Alla ska behandlas lika baserat på personliga relationer"],
        "answer": 0
    },
    {
        "question": "Beskriv vad kravet på respekt innebär i praktiken.",
        "options": ["Alla människor ska behandlas med värdighet och respekt", "Respekt krävs endast i hierarkiska relationer", "Respekt ska endast ges till dem med hög social status", "Respekt ska endast ges till dem med politiska kontakter"],
        "answer": 0
    },
    {
        "question": "Varför är kravet på transparens så viktigt?",
        "options": ["För att skapa förtroende och möjliggöra granskning av offentliga handlingar", "För att skydda statens hemligheter", "För att undvika kritik", "För att skapa konkurrens mellan myndigheter"],
        "answer": 0
    },
    {
        "question": "Ge exempel på ett yrke/yrkeskår som omfattas av särskilda sekretessregler.",
        "options": ["Läkare", "Journalister", "Politiker", "Kockar"],
        "answer": 0
    },
    {
        "question": "Beskriv begreppet samhällsnytta?",
        "options": ["Något som gynnar samhället som helhet", "Något som gynnar en individ", "Något som gynnar en specifik grupp", "Något som gynnar företag"],
        "answer": 0
    },
    {
        "question": "Vad innebär begreppet respekt och service?",
        "options": ["Att visa hänsyn och hjälpa andra", "Att dominera och styra andra", "Att ignorera andra och fokusera på egna mål", "Att manipulera andra för personlig vinning"],
        "answer": 0
    },
    {
        "question": "Vad innebär begreppen legalitet, objektivitet?",
        "options": ["Att följa lagen och behandla alla ärenden och personer på samma sätt", "Att bryta lagen för att uppnå personliga mål", "Att behandla ärenden och personer baserat på personliga preferenser", "Att behandla ärenden och personer baserat på social status"],
        "answer": 0
    }
]
];

let score = 0;
let currentStage = null;
let currentQuestion = 0;

document.addEventListener('DOMContentLoaded', () => {
    showMenu();
});

function showMenu() {
  let stagesElement = document.getElementById("stages");
  
  stages.forEach((stage, index) => {
    let button = document.createElement("button");
    button.textContent = "Stage " + (index + 1);
    button.addEventListener('click', () => startStage(index));
    stagesElement.appendChild(button);
  });
}

function startStage(index) {
  currentStage = stages[index];
  shuffleQuestions(currentStage);
  showQuestion(currentStage);
  
  // hide the menu and show the quiz section
  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
}

function shuffleQuestions(questions) {
    // Randomize the options and update the answer index
    questions.forEach(question => {
        let correctOption = question.options[question.answer];
        question.options.sort(() => Math.random() - 0.5);
        question.answer = question.options.indexOf(correctOption);
    });

    // Randomize the questions
    questions.sort(() => Math.random() - 0.5);
}

function showQuestion(questions) {
    if (currentQuestion >= questions.length) {
        showFinalScores(currentStage);
        return;
    }

    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    optionsElement.innerHTML = '';

    questionElement.textContent = questions[currentQuestion].question;

    questions[currentQuestion].options.forEach((option, index) => {
        let button = document.createElement("button");
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index, currentStage));
        optionsElement.appendChild(button);
    });

    showScore(currentStage);
}

function checkAnswer(index, questions) {
    if (index === questions[currentQuestion].answer) {
        alert('Yes! Correct answer: ' + questions[currentQuestion].answer);
        score++;
        currentQuestion++;
        showQuestion(currentStage);
    } else {
        alert('No! Wrong: ' + questions[currentQuestion].answer);
        if (score > 0)
          score--;
        showQuestion(currentStage);
    }
}

function showScore(questions) {
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = `Nr ${currentQuestion}/${questions.length}  ------  Score: ${score}`;
}

function showFinalScore(questions) {
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `<h2>Game Over! Your final score is: ${score}/${questions.length}</h2>
    <button onclick="restartGame()">Restart Game</button>`;
}

function restartGame() {
    score = 0;
    currentQuestion = 0;
}
