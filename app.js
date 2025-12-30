// CSWIKI - prosty renderer artykułów i interakcje
const articles = [
  {
    id: 'a1',
    category: 'Ciekawostki',
    title: 'Dlaczego niebo jest niebieskie?',
    excerpt: 'Krótka i prosta odpowiedź na pytanie, czemu niebo ma taki kolor — a także kilka ciekawostek astronomicznych.',
    content: `<h2>DLACZEGO NIEBO JEST NIEBIESKIE?</h2>
    <p>To efekt rozpraszania Rayleigha — cząsteczki powietrza rozpraszają krótsze fale światła (niebieskie) bardziej niż dłuższe (czerwone).</p>
    <p class="muted">Ciekawostka: podczas wschodu i zachodu słońca światło pokonuje dłuższą drogę w atmosferze i dlatego widzimy więcej czerwieni.</p>`
  },
  {
    id: 'a2',
    category: 'Poradniki',
    title: 'Jak szybko zrobić backup zdjęć z telefonu',
    excerpt: 'Praktyczny poradnik, jak w kilku krokach zabezpieczyć zdjęcia na chmurze lub zewnętrznym dysku.',
    content: `<h2>KROK 1: WYBIERZ MIEJSCE</h2><p>Google Photos, iCloud, OneDrive lub zewnętrzny dysk — wybierz jeden lub więcej kanałów.</p>
    <h2>KROK 2: AUTOMATYZACJA</h2><p>Włącz automatyczne kopie zapasowe w aplikacji chmurowej — dzięki temu nie zapomnisz.</p>`
  },
  {
    id: 'a3',
    category: 'Lifehacki',
    title: 'Jak pozbyć się zapachu z butów w 30 minut',
    excerpt: 'Szybki i prosty trik z piekarnikiem i torebkami? Nie, z sodą i torebką strunową.',
    content: `<h2>SODA — TWÓJ PRZYJACIEL</h2><p>Wsyp 2 łyżki sody do torebki, włóż buta, zawiąż i zostaw na 20–30 minut. Soda pochłania zapachy.</p>`
  },
  {
    id: 'a4',
    category: 'Poradniki',
    title: 'Podstawy bezpieczeństwa online',
    excerpt: 'Kilka prostych zasad, które zmniejszą ryzyko włamania lub utraty danych.',
    content: `<h2>1. SILNE HASŁA</h2><p>Używaj managera haseł i włącz 2FA tam, gdzie to możliwe.</p>
    <h2>2. AKTUALIZACJE</h2><p>Aktualizuj system i oprogramowanie — wiele ataków wykorzystuje znane luki.</p>`
  }
];

// Elements
const cardsEl = document.getElementById('cards');
const tipsGrid = document.getElementById('tipsGrid');
const guidesGrid = document.getElementById('guidesGrid');
const lifeGrid = document.getElementById('lifeGrid');
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
  lifeGrid.innerHTML = '';
  // Featured = first 3
  list.slice(0,3).forEach(a=>cardsEl.appendChild(createCard(a)));
  list.filter(a=>a.category==='Ciekawostki').forEach(a=>tipsGrid.appendChild(createCard(a)));
  list.filter(a=>a.category==='Poradniki').forEach(a=>guidesGrid.appendChild(createCard(a)));
  list.filter(a=>a.category==='Lifehacki').forEach(a=>lifeGrid.appendChild(createCard(a)));
}

function search(query){
  const q = (query||'').trim().toLowerCase();
  if(!q) return renderAll(articles);
  const res = articles.filter(a => (a.title + ' ' + a.excerpt + ' ' + a.content).toLowerCase().includes(q));
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