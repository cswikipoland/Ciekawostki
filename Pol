// CSWIKI (CS2) - lista 20 poradników i 20 ciekawostek
const articles = [
  // 20 poradników (Poradniki)
  { id: 'p1', category: 'Poradniki', title: 'Dust2: Smoke na Mid z T spawn', excerpt: 'Krok po kroku jak rzucić smoke zasłaniający CT peek z midu.', content: `<h2>LINEUP: T SPAWN → MID SMOKE</h2><p>Stań przy skrzyni w spawn T, ustaw cel na krawędź dachu wieży i wykonaj rzut skacząc z obrotem, żeby smoke opadł na mid w okolicy CT. Praktykuj na serwerze treningowym.</p>` },
  { id: 'p2', category: 'Poradniki', title: 'Dust2: Long A — jak się otworzyć jako T', excerpt: 'Taktyczne wejście na Long z użyciem flasha i smoke.', content: `<h2>PODSTAWOWE WEJŚCIE NA LONG</h2><p>Jedna osoba rzuca smoke na car, druga flashuje nad boxem—rushujcie razem. Użyj molotova na close corner zanim wejdziecie.</p>` },
  { id: 'p3', category: 'Poradniki', title: 'Dust2: CT hold A — pozycje i crossfire', excerpt: 'Jak ustawić CT hold na A site, żeby maksymalnie utrudnić akcję T.', content: `<h2>POZYCJONOWANIE CT NA A</h2><p>Jeden na car/long, drugi na goose/ramp. Użyj crossfire i świetlistego trade’u — komunikacja kluczowa.</p>` },
  { id: 'p4', category: 'Poradniki', title: 'Jak rzucać pop‑flash dla teammate\'a', excerpt: 'Szybkie flashy pod presją — uniwersalny poradnik.', content: `<h2>POP-FLASH — KIEDY I JAK</h2><p>Rzuć flash tuż za krawędź, odleczenie ma być krótkie i oślepiające. Ustal krótki countdown z ally.</p>` },
  { id: 'p5', category: 'Poradniki', title: 'Molotov na rampę (Inferno / inne mapy)', excerpt: 'Blokowanie rotacji i wymuszanie pozycji przeciwnika.', content: `<h2>MOLLY NA RAMPĘ</h2><p>Wyrzucenie molotovem blokuje przesmyk i zmusza przeciwnika do odsłonięcia. Używaj jako pierwszy element execute'u.</p>` },
  { id: 'p6', category: 'Poradniki', title: 'Smoke na CT spawn (Dust2) — z A long', excerpt: 'Precyzyjny lineup smoke\'a na CT spawn z Longa.', content: `<h2>LINEUP DLA SMOKE NA CT</h2><p>Wykonaj rzut z określonego punktu przy sandbags, celuj w górną krawędź budynku — ćwicz w trybie offline.</p>` },
  { id: 'p7', category: 'Poradniki', title: 'Jak efektywnie oszczędzać pieniądze (eco round)', excerpt: 'Strategie ekonomiczne i kiedy kupować.', content: `<h2>ECO ROUND — CO KUPIĆ</h2><p>Najważniejsze to zapewnić jednemu graczowi szansę na clutch (armor + smg) lub wszyscy pistolety. Komunikacja o stanie ekonomicznym drużyny.</p>` },
  { id: 'p8', category: 'Poradniki', title: 'Strzelanie w sprayu — opanuj wzór AK/M4', excerpt: 'Jak kontrolować odrzut broni na dystansie.', content: `<h2>KONTROLA SPRAYU</h2><p>Przeciągaj myszkę w przeciwną stronę do wzoru odrzutu i ucz się krótkich burstów na dalszych dystansach.</p>` },
  { id: 'p9', category: 'Poradniki', title: 'Jak używać radaru i mini‑mapy', excerpt: 'Czytanie informacji na radarze dla lepszych decyzji.', content: `<h2>RADAR — JAK GO CZYTAĆ</h2><p>Zwracaj uwagę na dźwięki, pozycje teammate'ów i ostatnie widziane lokalizacje — to daje przewagę w rotacjach.</p>` },
  { id: 'p10', category: 'Poradniki', title: 'Kiedy i jak pushować jako CT', excerpt: 'Push na short/long — ryzyko kontra zysk.', content: `<h2>CT PUSH — RYZYKO I NAGRODA</h2><p>Pushujemy, gdy mamy przewagę info lub utility. Ustal flank‑watchera i miej plan ucieczki.</p>` },
  { id: 'p11', category: 'Poradniki', title: 'Jak ustawić crosshair i DPI (podstawy)', excerpt: 'Szybkie rekomendacje ustawień celownika i czułości.', content: `<h2>CROSSHAIR I DPI</h2><p>Ustaw DPI i czułość tak, by wygodnie wykonywać 180° ruchem nadgarstka/ramienia. Wybierz prosty crosshair z punktem na środku.</p>` },
  { id: 'p12', category: 'Poradniki', title: 'Jak wejść na B site (vice versa) — dobre execute', excerpt: 'Planowanie wejścia na B z użyciem utility.', content: `<h2>WEJŚCIE NA B</h2><p>Wykorzystaj smoke na key choke points, molotov na common hide spots i synchronizuj wejście wszystkich graczy.</p>` },
  { id: 'p13', category: 'Poradniki', title: 'Jak czytać sound cues w CS2', excerpt: 'Dźwięk jako główne źródło informacji.', content: `<h2>SOUND CUES</h2><p>Słyszysz bombę, ładowanie, kroki — dopasuj rotacje. Zwracaj uwagę na to, czy przeciwnik idzie skradanie czy sprint.</p>` },
  { id: 'p14', category: 'Poradniki', title: 'Obrona plantu — pozycje i utility', excerpt: 'Jak bronić planted bomb, jak rozstawić się na retake.', content: `<h2>DEFEND PLANT</h2><p>Ustal jeden gracz blisko bombsite, drugi jako flank watch; użyj smoke/flash do opóźnienia retake'u przeciwnika.</p>` },
  { id: 'p15', category: 'Poradniki', title: 'Jak trenować aim (plany treningowe)', excerpt: 'Ćwiczenia i mapy treningowe polecane do poprawy celności.', content: `<h2>TRENING AIM</h2><p>Codziennie 15–30 min na aim mapach: tracking, flicks i recoil control. Utrzymuj stałe ustawienia sensivity.</p>` },
  { id: 'p16', category: 'Poradniki', title: 'Jak używać utilki w 2‑osobowych combo', excerpt: 'Koordynacja smoke+flash+molotov w duecie.', content: `<h2>2P COMBO UTIL</h2><p>Jeden rzuca smoke, drugi molotov i flash — planuj sekwencję, by nie zniszczyć własnych wejść.</p>` },
  { id: 'p17', category: 'Poradniki', title: 'Jak czytać przeciwnika po ekonomii', excerpt: 'Wnioski z kupów/eco przeciwnika.', content: `<h2>OPTYMALNE REAKCJE</h2><p>Obserwuj kto kupił AWP/armour — graj bardziej zachowawczo, jeśli przeciwnik oszczędza.</p>` },
  { id: 'p18', category: 'Poradniki', title: 'Rundy force buy — kiedy i jak', excerpt: 'Strategia na force buy, które da realną szansę.', content: `<h2>FORCE BUY</h2><p>Wybierz pistolet + kevlar + smoke/flash; ustawienie agresywne często daje przewagę elementu zaskoczenia.</p>` },
  { id: 'p19', category: 'Poradniki', title: 'Jak grać clutch — mental i technika', excerpt: 'Porady jak zwiększyć szanse w clutchu 1vX.', content: `<h2>MINDSET I TECHNIKA</h2><p>Zadbaj o spokój, zwolnij tempo, wykorzystuj utility i izoluj możliwe kąty — słuchaj kroków i zarządzaj czasem bomby.</p>` },
  { id: 'p20', category: 'Poradniki', title: 'Ustawienia graficzne CS2 dla płynności', excerpt: 'Najważniejsze opcje graficzne wpływające na FPS.', content: `<h2>Ustawienia dla FPS</h2><p>Wyłącz motion blur, dostosuj global shadow quality, ustal resolution scale i targetuj stały framerate.</p>` },

  // 20 ciekawostek (Ciekawostki)
  { id: 'c1', category: 'Ciekawostki', title: 'Dlaczego CS2 zmienił system renderingowy?', excerpt: 'CS2 wprowadził nowy renderer—co to daje?', content: `<h2>NOWY RENDERER</h2><p>CS2 korzysta z bardziej nowoczesnego silnika graficznego, co poprawia oświetlenie i cząsteczki, ale wymaga optymalizacji ustawień.</p>` },
  { id: 'c2', category: 'Ciekawostki', title: 'Tickrate a odczucie gry', excerpt: 'Jak tickrate serwera wpływa na odebranie strzałów.', content: `<h2>TICKRATE</h2><p>Większy tickrate zwiększa precyzję rejestracji ruchu i strzałów; dlatego gracze preferują 128 tic do rywalizacji.</p>` },
  { id: 'c3', category: 'Ciekawostki', title: 'Skórki i ich rzadkość', excerpt: 'Jak działa system rarities w skinach?', content: `<h2>SKÓRKI</h2><p>Skórki mają różne poziomy rzadkości i float value — najniższy float = „Factory New” daje najładniejszy wygląd.</p>` },
  { id: 'c4', category: 'Ciekawostki', title: 'Sound design w CS2 — dlaczego kroki brzmią inaczej', excerpt: 'Zmiany w audio i dlaczego to ma znaczenie.', content: `<h2>AUDIO</h2><p>Lepsze odtwarzanie dźwięków i spatial audio pomaga w dokładniejszym lokalizowaniu przeciwnika po krokach.</p>` },
  { id: 'c5', category: 'Ciekawostki', title: 'Desync i jego efekty', excerpt: 'Co to jest desync i jak wpływa na grę?', content: `<h2>DESYNC</h2><p>Opóźnienia sieciowe i interpolacja mogą powodować różnice pomiędzy tym, co widzisz, a co serwer uznaje za prawdę.</p>` },
  { id: 'c6', category: 'Ciekawostki', title: 'Jak działa smoke w CS2 (kolizje)', excerpt: 'Drobne różnice w zachowaniu smokeów po aktualizacji.', content: `<h2>SMOKE MECHANIKA</h2><p>Smoki tworzą obszary, które mogą blokować widoczność i sygnalizują, które miejsce jest niebezpieczne — warto znać newki map.</p>` },
  { id: 'c7', category: 'Ciekawostki', title: 'Rola molotovów w ekonomii rundy', excerpt: 'Molotov jako tania alternatywa do kontroli pozycji.', content: `<h2>MOLLY</h2><p>Molly może zmusić przeciwnika do zejścia z pozycji i kosztuje relatywnie mało, więc jest opłacalnym narzędziem.</p>` },
  { id: 'c8', category: 'Ciekawostki', title: 'Skiny a hitbox — mit czy fakt?', excerpt: 'Czy skin wpływa na hitbox?', content: `<h2>SKINY I HITBOX</h2><p>Skórki nie wpływają na mechanikę trafień ani hitboxy — to tylko efekt wizualny.</p>` },
  { id: 'c9', category: 'Ciekawostki', title: 'Waluta i match‑making rating (MMR)', excerpt: 'Jak system rankingowy wpływa na parowanie graczy.', content: `<h2>MMR</h2><p>MMR jest ukryty i służy do dobierania przeciwników o podobnym poziomie umiejętności; system bierze pod uwagę wyniki i statystyki.</p>` },
  { id: 'c10', category: 'Ciekawostki', title: 'Recoil pattern historyczny — dlaczego warto je znać', excerpt: 'Ewolucja patternów i trening.', content: `<h2>RECOIL PATTERN</h2><p>Znajomość patternu AK/M4 pozwala kontrolować spray i zmniejszyć zużycie amunicji podczas wymiany ognia.</p>` },
  { id: 'c11', category: 'Ciekawostki', title: 'Hit‑reg i lag compensation', excerpt: 'Jak serwer rekompensuje opóźnienia.', content: `<h2>LAG COMP</h2><p>Serwer używa metod kompensacji, by dopasować trafienia z perspektywy gracza; to tłumaczy niektóre „ghost shoty”.</p>` },
  { id: 'c12', category: 'Ciekawostki', title: 'Map design — dlaczego Dust2 jest tak popularny', excerpt: 'Uniwersalność i balans Dust2.', content: `<h2>DUST2</h2><p>Proste linie sightów, dobre możliwości rotacji i łatwa czytelność mapy czynią Dust2 ulubioną mapą społeczności.</p>` },
  { id: 'c13', category: 'Ciekawostki', title: 'Hitbox headshot — precyzja i ubranie', excerpt: 'Czynniki wpływające na headshoty.', content: `<h2>HEADSHOT</h2><p>Precyzja aimu, ustawienie crosshair i kontrola ruchu gracza decydują o headshotach — ekwipunek nie ma tu wpływu.</p>` },
  { id: 'c14', category: 'Ciekawostki', title: 'Statystyki broni — DPS vs accuracy', excerpt: 'Jak czytać wykresy broni.', content: `<h2>DPS I ACCURACY</h2><p>Nie zawsze najwięcej dmg/sek to najlepszy wybór — liczy się kontrola i mobilność podczas wymian ognia.</p>` },
  { id: 'c15', category: 'Ciekawostki', title: 'Czy sound footsteps zależą od powierzchni?', excerpt: 'Różne powierzchnie, różne dźwięki.', content: `<h2>FOOTSTEPS</h2><p>Tak — metal, drewno czy piasek dają inne odgłosy; wyczucie pozwala odróżnić kierunek i powierzchnię.</p>` },
  { id: 'c16', category: 'Ciekawostki', title: 'Trendy w economy meta', excerpt: 'Jak meta economy zmienia się sezonowo.', content: `<h2>ECONOMY META</h2><p>Wraz z map pool i zmianami broni, drużyny adaptują decyzje buy/eco — obserwuj pro‑gry i statystyki.</p>` },
  { id: 'c17', category: 'Ciekawostki', title: 'Zachowanie granatów po update\'ach', excerpt: 'Dlaczego lineupy mogą przestać działać.', content: `<h2>LINEUPY I UPDATE</h2><p>Płatne poprawki map i zmiany modelu kolizji mogą przesunąć punkty trafienia – zawsze sprawdzaj lineupy po patchu.</p>` },
  { id: 'c18', category: 'Ciekawostki', title: 'Psychologia clutchów', excerpt: 'Czemu niektórzy gracze radzą sobie lepiej w clutchu?', content: `<h2>PSYCHOLOGIA</h2><p>Kontrola stresu, doświadczenie i proste rutyny (oddech, mental reset) pomagają wygrywać kluczowe rundy.</p>` },
  { id: 'c19', category: 'Ciekawostki', title: 'Role w drużynie — entry, lurker, support', excerpt: 'Krótkie wprowadzenie do ról', content: `<h2>ROLE</h2><p>Entry‑fragger otwiera walkę, lurker daje flanki, support steruje utilką — zgranie ról to podstawa sukcesu.</p>` },
  { id: 'c20', category: 'Ciekawostki', title: 'Demo review — jak analizować swoje rundy', excerpt: 'Szybkie wskazówki do analizy powtórek.', content: `<h2>ANALIZA DEMO</h2><p>Skup się na swoich pozycjach, decyzjach i użyciu utility. Zapisuj błędy i cele do poprawy na następne mecze.</p>` }
];

// Elements
const cardsEl = document.getElementById('cards');
const tipsGrid = document.getElementById('tipsGrid');
const guidesGrid = document.getElementById('guidesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modal = document.getElementById('modal');
const modalArticle = document.getElementById('modalArticle');
const modalClose = document.getElementById('modalClose');
const yearEl = document.getElementById('year');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMsg = document.getElementById('newsletterMsg');

// Helpers
function createCard(article){
  const el = document.createElement('article');
  el.className = 'card';
  el.tabIndex = 0;
  el.setAttribute('data-id', article.id);
  el.innerHTML = `
    <div class="kicker">${article.category}</div>
    <h3>${article.title}</h3>
    <p>${article.excerpt}</p>
  `;
  el.addEventListener('click', ()=>openArticle(article.id));
  el.addEventListener('keypress', (e)=>{ if(e.key==='Enter') openArticle(article.id) });
  return el;
}

function openArticle(id){
  const a = articles.find(x=>x.id===id);
  if(!a) return;
  modalArticle.innerHTML = `<h1 id="modalTitle">${a.title}</h1>${a.content}<p class="muted small">Kategoria: ${a.category}</p>`;
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  modal.setAttribute('aria-hidden','true');
  modalArticle.innerHTML = '';
}

function renderAll(list){
  cardsEl.innerHTML = '';
  tipsGrid.innerHTML = '';
  guidesGrid.innerHTML = '';
  // Featured = pierwsze 3 poradniki/ciekawostki mieszane
  list.slice(0,3).forEach(a=>cardsEl.appendChild(createCard(a)));
  list.filter(a=>a.category==='Ciekawostki').forEach(a=>tipsGrid.appendChild(createCard(a)));
  list.filter(a=>a.category==='Poradniki').forEach(a=>guidesGrid.appendChild(createCard(a)));
}

function search(query){
  const q = (query||'').trim().toLowerCase();
  if(!q) return renderAll(articles);
  const res = articles.filter(a => (a.title + ' ' + a.excerpt + ' ' + (a.content||'')).toLowerCase().includes(q));
  renderAll(res);
}

// Events
searchBtn.addEventListener('click', ()=>search(searchInput.value));
searchInput.addEventListener('keyup', (e)=>{ if(e.key==='Enter') search(searchInput.value) });

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });

yearEl.textContent = new Date().getFullYear();

// Theme toggle (persist)
const currentTheme = localStorage.getItem('cswiki-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark');
if(currentTheme === 'light') document.body.classList.add('light');
themeToggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  const nowLight = document.body.classList.contains('light');
  themeToggle.textContent = nowLight ? '🌞' : '🌙';
  localStorage.setItem('cswiki-theme', nowLight ? 'light' : 'dark');
});

// Mobile menu
menuToggle.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));

// Newsletter (prosty)
newsletterForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  newsletterMsg.textContent = `Dziękujemy! ${email} został zapisany (symulacja).`;
  newsletterForm.reset();
});

// Init
renderAll(articles);

// Keyboard: Esc zamyka modal
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });
