const POOL_URL = 'https://www.geckoterminal.com/ton/pools/EQBWECuhrJldF2lQQWobH-vPWcaE3vPMMJZREmfv-5eek31y';
const POOL_API = 'https://api.geckoterminal.com/api/v2/networks/ton/pools/EQBWECuhrJldF2lQQWobH-vPWcaE3vPMMJZREmfv-5eek31y';

const translations = {
    en: {
        nav_products: "Products",
        nav_tokenomics: "Tokenomics",
        nav_exchange: "Exchange",
        nav_drazzewin: "DrazzeWin",
        nav_faq: "FAQ",
        nav_contact: "Contact us",
        hero_title: "The Outbound Calling Platform<br>Built for Results",
        hero_subtitle: "Purpose-built features that turn lead lists into qualified conversations —<br>proven in financial services, ready for your industry.",
        hero_cta: "Learn More <span class=\"arrow\">→</span>",
        tag_wallets: "11,000+ wallets",
        tag_holders: "5,000+ token holders",
        tag_partners: "40+ major partners",
        feat_badge: "Products",
        feat_title: "Our Products<br>and Achievements",
        feat_card_title: "Drazze Ecosystem",
        prod1_title: "iGaming Platform DrazzeWin",
        prod1_desc: "Licensed online casino with hundreds of games from top providers: slots, roulette, poker, live casino, jackpots and tournaments. VIP club, promotions and support for USDT, TON and DRZ cryptocurrencies.",
        prod1_link: "Visit drazzewin.com →",
        prod2_title: "VPN",
        prod2_desc: "DRAZZE provides its own secure VPN as a gift after activating a contract for 42 tokens. The number of available servers depends on your rank in the project. VPN bypasses blocks and ensures stable access to internet resources.",
        prod3_title: "Built-in P2P Exchanger",
        prod3_desc: "Powered by a smart contract, providing fully automated and secure transactions 24/7. Staking accruals occur every second, and tokens can be purchased directly from other participants through the bot at market price.",
        prod4_title: "KPI Bonuses",
        prod4_desc: "A new KPI bonus system for leaders with a monthly pool of 1,050,000 DRZ. Rewards are paid for fulfilling structure volume conditions according to your rank, with no more than 40% of the strongest branch counted. Leaders can receive bonuses for all KPI levels at or below their status.",
        case_badge: "Tokenomics",
        case_title: "DRZ Token<br>Economics",
        stat1_num: "200,000,000",
        stat1_desc: "Total coin emission",
        stat2_num: "90%",
        stat2_desc: "Tokens off-market are locked or in staking",
        stat3_num: "22%",
        stat3_desc: "Maximum DeFi staking yield",
        case_tag1: "25% · Liquidity",
        case_tag2: "20% · Team",
        case_tag3: "15% · Marketing",
        case_card_title: "Deflationary Token Model",
        case_challenge: "Emission reduction:",
        case_challenge_desc: "Starting January 7, 2026, the first reduction of 3%. Token mining will decrease by 1% every 6 months.",
        case_solution: "Token burning:",
        case_solution_desc: "Part of ecosystem profits goes to buyback and token burning. Unused tokens are burned. 15% — active participants bonus pool.",
        case_quote_label: "DeFi Staking · 15% — 22%",
        case_quote_text: "Hold DRZ tokens and earn rewards from 15% to 22% per month. DeFi staking is distributed gradually, ensuring long-term sustainability and growth of the DRAZZE ecosystem.",
        staking_feat1: "High yield",
        staking_feat2: "Blockchain security",
        staking_feat3: "Transparent operations",
        ex_title: "Exchange USDT<br>to DRZ",
        ex_subtitle: "Instant calculation at the current DRAZZE pool rate on TON. Buy DRZ tokens directly via DEX — secure, transparent, and at market price.",
        ex_widget_title: "Exchange",
        ex_buy: "Buy",
        ex_rate_loading: "Loading rate...",
        ex_rate_error: "Failed to load rate. Try again later.",
        ex_begin: "Exchange",
        ex_rate_link: "Rate on GeckoTerminal →",
        win_badge: "iGaming",
        win_subtitle: "Licensed platform with games from the world's leading providers",
        win_cta: "Play on drazzewin.com →",
        win_info_title: "Licensed iGaming platform of the DRAZZE ecosystem",
        win_info_desc: "DrazzeWin is a full-featured online casino with an official Anjouan regulator license. The platform brings together hundreds of games from top providers, live casino, tournaments and a VIP program. USDT, TON and DRZ cryptocurrencies are supported — play safely and comfortably.",
        win_feat1: "Official Anjouan iGaming license",
        win_feat2: "Slots, roulette, poker and live casino",
        win_feat3: "20+ global game providers",
        win_feat4: "Crypto payments: USDT, TON, DRZ",
        win_feat5: "VIP club, jackpots and tournaments",
        win_telegram: "Official channel",
        win_license: "Verify license",
        faq_title: "Frequently Asked Questions",
        faq_q1: "Is DRAZZE's activity legal?",
        faq_a1: "Yes. Drazze Limited holds an iGaming license from the Anjouan regulator (Union of Comoros). You can verify this information yourself in the official registry.",
        faq_q2: "What is a \"deflationary model\" for a token?",
        faq_a2: "Every 6 months, mining decreases by 1%. Part of the profits goes to buyback and token burning, creating scarcity and increasing their value.",
        faq_q3: "What protects the project from dumps and manipulation?",
        faq_a3: "The DRZ economy is built on limited emission, a deflationary model, reduced mining, buyback and burning, and real token utility. This reduces speculative pressure and shifts focus to long-term value.",
        faq_q4: "Why was iGaming specifically chosen?",
        faq_a4: "It is one of the most profitable and stable industries in the world with constant turnover growth.",
        faq_q5: "What are income pools?",
        faq_a5: "A mechanism for distributing part of iGaming profits among participants."
    },
    ru: {
        nav_products: "Продукты",
        nav_tokenomics: "Токеномика",
        nav_exchange: "Обмен",
        nav_drazzewin: "DrazzeWin",
        nav_faq: "FAQ",
        nav_contact: "Связаться",
        hero_title: "Экосистема <span class=\"neon-brand\">Drazze</span>.<br>Создана для результатов.",
        hero_subtitle: "Умные механики, которые превращают держателей токена в активных участников - стейкинг, Gaming, VPN :<br>проверено в DeFi, готово для вас.",
        hero_cta: "Подробнее <span class=\"arrow\">→</span>",
        tag_wallets: "11.000+ кошельков",
        tag_holders: "5000+ держателей токена",
        tag_partners: "40+ крупных партнеров",
        feat_badge: "Продукты",
        feat_title: "Наши продукты<br>и достижения",
        feat_card_title: "Экосистема Drazze",
        prod1_title: "iGaming-платформа DrazzeWin",
        prod1_desc: "Лицензированное онлайн-казино с сотнями игр от ведущих провайдеров: слоты, рулетка, покер, live-казино, джекпоты и турниры. VIP-клуб, промоакции и поддержка криптовалют USDT, TON и DRZ.",
        prod1_link: "Перейти на drazzewin.com →",
        prod2_title: "VPN",
        prod2_desc: "DRAZZE предоставляет собственный безопасный VPN в подарок после активации контракта на 42 токена. Количество доступных серверов для подключения зависит от вашего ранга в проекте. VPN позволяет обходить блокировки и обеспечивает стабильный доступ к интернет-ресурсам.",
        prod3_title: "Встроенный P2P-обменник",
        prod3_desc: "Работает на смарт-контракте, обеспечивая полностью автоматизированные и безопасные сделки 24/7. Стейкинг-начисления происходят ежесекундно, а токены можно приобретать напрямую у других участников через бота по рыночной цене.",
        prod4_title: "Бонусы KPI",
        prod4_desc: "Новая KPI-система бонусов для лидеров с ежемесячным пулом в 1 050 000 DRZ. Вознаграждение выплачивается за выполнение условий по объёмам структуры в соответствии с вашим рангом, при этом учитывается не более 40% от самой сильной ветки. Лидеры могут получать бонусы за все KPI-уровни, соответствующие их статусу и ниже.",
        case_badge: "Токеномика",
        case_title: "Экономика токена<br>DRZ",
        stat1_num: "200,000,000",
        stat1_desc: "Общая эмиссия монет",
        stat2_num: "90%",
        stat2_desc: "Токенов вне рынка заблокированы или в стейкинге",
        stat3_num: "22%",
        stat3_desc: "Максимальная доходность DeFi-стейкинга",
        case_tag1: "25% · Ликвидность",
        case_tag2: "20% · Команда",
        case_tag3: "15% · Маркетинг",
        case_card_title: "Дефляционная модель токена",
        case_challenge: "Снижение эмиссии:",
        case_challenge_desc: "Начиная с 7 января 2026 года первое понижение на 3%. Добыча токена будет снижаться каждые 6 месяцев на 1%.",
        case_solution: "Сжигание токенов:",
        case_solution_desc: "Часть прибыли экосистемы идёт на выкуп и сжигание токенов. Неиспользованные токены сжигаются. 15% — бонусный пул активных участников.",
        case_quote_label: "DeFi Стейкинг · 15% — 22%",
        case_quote_text: "Удерживайте токены DRZ и получайте вознаграждение от 15% до 22% в месяц. DeFi-стейкинг распределяется постепенно, обеспечивая долгосрочную устойчивость и рост экосистемы DRAZZE.",
        staking_feat1: "Высокая доходность",
        staking_feat2: "Безопасность блокчейна",
        staking_feat3: "Прозрачность операций",
        ex_title: "Обмен USDT<br>на DRZ",
        ex_subtitle: "Мгновенный расчёт по актуальному курсу пула DRAZZE на TON. Купите токены DRZ напрямую через DEX — безопасно, прозрачно и по рыночной цене.",
        ex_widget_title: "Обмен",
        ex_buy: "Купить",
        ex_rate_loading: "Загрузка курса...",
        ex_rate_error: "Не удалось загрузить курс. Попробуйте позже.",
        ex_begin: "Обменять",
        ex_rate_link: "Курс на GeckoTerminal →",
        win_badge: "iGaming",
        win_subtitle: "Лицензированная платформа с играми от ведущих мировых провайдеров",
        win_cta: "Играть на drazzewin.com →",
        win_info_title: "Лицензированная iGaming-платформа экосистемы DRAZZE",
        win_info_desc: "DrazzeWin — это полноценное онлайн-казино с официальной лицензией регулятора Анжуан. Платформа объединяет сотни игр от топовых провайдеров, live-казино, турниры и VIP-программу. Поддерживаются криптовалюты USDT, TON и DRZ — играйте безопасно и с максимальным комфортом.",
        win_feat1: "Официальная iGaming-лицензия Anjouan",
        win_feat2: "Слоты, рулетка, покер и live-казино",
        win_feat3: "20+ мировых провайдеров игр",
        win_feat4: "Криптоплатежи: USDT, TON, DRZ",
        win_feat5: "VIP-клуб, джекпоты и турниры",
        win_telegram: "Официальный канал",
        win_license: "Проверить лицензию",
        faq_title: "Часто задаваемые вопросы",
        faq_q1: "Законна ли деятельность DRAZZE?",
        faq_a1: "Да. Компания Drazze Limited имеет iGaming-лицензию регулятора Анжуан (Union of Comoros). Информацию можно самостоятельно проверить в официальном реестре.",
        faq_q2: "Что такое «дефляционная модель» для токена?",
        faq_a2: "Каждые 6 месяцев добыча уменьшается на 1%. Часть прибыли идет на выкуп и сжигание токенов, создавая дефицит и повышая их ценность.",
        faq_q3: "Что защищает проект от дампов и манипуляций?",
        faq_a3: "Экономика DRZ построена на ограниченной эмиссии, дефляционной модели, снижении добычи, выкупе и сжигании и реальном использовании токена. Это снижает спекулятивное давление и смещает фокус на долгосрочную ценность.",
        faq_q4: "Почему выбран именно iGaming?",
        faq_a4: "Это одна из самых прибыльных и устойчивых индустрий в мире с постоянным ростом оборотом.",
        faq_q5: "Что такое пулы дохода?",
        faq_a5: "Механизм распределения части прибыли iGaming между участниками."
    }
};

let currentLang = 'ru';
let carouselOffset = 0;
let drzPriceUsd = null;

function formatDrz(amount) {
    if (!isFinite(amount) || amount <= 0) return '0';
    if (amount >= 1000) return amount.toLocaleString('en-US', { maximumFractionDigits: 2 });
    if (amount >= 1) return amount.toLocaleString('en-US', { maximumFractionDigits: 4 });
    return amount.toLocaleString('en-US', { maximumFractionDigits: 6 });
}

function formatPrice(price) {
    if (price >= 1) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
    return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 6 });
}

function getRateText(price, amount) {
    const tpl = currentLang === 'en'
        ? '1 DRZ = {price} · You receive ~{amount} DRZ'
        : '1 DRZ = {price} · Вы получите ~{amount} DRZ';
    return tpl.replace('{price}', formatPrice(price)).replace('{amount}', formatDrz(amount));
}

function updateExchangeOutput() {
    const input = document.getElementById('usdt-input');
    const output = document.getElementById('drz-output');
    const hint = document.getElementById('rate-hint');
    if (!input || !output || !hint) return;

    const usdt = parseFloat(input.value) || 0;

    if (!drzPriceUsd) {
        output.textContent = '—';
        hint.classList.remove('error');
        hint.textContent = translations[currentLang].ex_rate_loading;
        return;
    }

    const drz = usdt / drzPriceUsd;
    output.textContent = formatDrz(drz);
    hint.classList.remove('error');
    hint.textContent = getRateText(drzPriceUsd, drz);
}

async function fetchExchangeRate() {
    const hint = document.getElementById('rate-hint');
    if (!hint) return;

    try {
        const res = await fetch(POOL_API);
        if (!res.ok) throw new Error('API error');
        const json = await res.json();
        const price = parseFloat(json?.data?.attributes?.base_token_price_usd);
        if (!price || price <= 0) throw new Error('Invalid price');

        drzPriceUsd = price;
        updateExchangeOutput();
    } catch {
        drzPriceUsd = null;
        hint.classList.add('error');
        hint.textContent = translations[currentLang].ex_rate_error;
        const output = document.getElementById('drz-output');
        if (output) output.textContent = '—';
    }
}

function renderCarousel() {
    const grid = document.querySelector('.features-grid');
    const items = document.querySelectorAll('.feature-item');
    if (!grid || !items.length) return;

    const count = items.length;

    items.forEach((item, index) => {
        // Calculate logical position based on offset
        // Offset increases when we click next, meaning we shift items left
        const pos = (index - carouselOffset + count * 100) % count;

        item.className = 'feature-item';
        if (pos === 0) item.classList.add('card-center');
        else if (pos === 1) item.classList.add('card-right');
        else if (pos === count - 1) item.classList.add('card-left');
        else item.classList.add('card-hidden');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Add subtle hover effects to the floating tags
    const tags = document.querySelectorAll('.floating-tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.animationPlayState = 'paused';
            tag.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.animationPlayState = 'running';
            tag.style.transform = 'scale(1)';
        });
    });

    const prevBtn = document.querySelector('.control-btn.prev');
    const nextBtn = document.querySelector('.control-btn.next');
    const itemsCount = document.querySelectorAll('.feature-item').length;

    if (prevBtn && nextBtn && itemsCount) {
        prevBtn.addEventListener('click', () => {
            carouselOffset = (carouselOffset - 1 + itemsCount) % itemsCount;
            renderCarousel();
        });

        nextBtn.addEventListener('click', () => {
            carouselOffset = (carouselOffset + 1) % itemsCount;
            renderCarousel();
        });
    }

    // Language switcher logic
    const langToggleBtn = document.getElementById('lang-toggle');

    const updateLanguage = () => {
        if (!langToggleBtn) return;
        
        // Update button text to show the OTHER language
        langToggleBtn.textContent = currentLang === 'en' ? 'RUS' : 'ENG';
        
        // Update all translations on the page
        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });

        renderCarousel();
        updateExchangeOutput();
    };

    // Apply default language on load
    updateLanguage();

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            // Toggle language
            currentLang = currentLang === 'en' ? 'ru' : 'en';
            updateLanguage();
        });
    }

    const usdtInput = document.getElementById('usdt-input');
    const exchangeBtn = document.getElementById('exchange-btn');

    if (usdtInput) {
        usdtInput.addEventListener('input', updateExchangeOutput);

        const resetMobileViewport = () => {
            document.documentElement.scrollLeft = 0;
            document.body.scrollLeft = 0;
            if (window.visualViewport) {
                window.scrollTo(0, window.scrollY);
            }
        };

        usdtInput.addEventListener('blur', () => {
            setTimeout(resetMobileViewport, 100);
        });

        usdtInput.addEventListener('focus', () => {
            setTimeout(resetMobileViewport, 300);
        });
    }

    if (exchangeBtn) {
        exchangeBtn.href = POOL_URL;
    }

    fetchExchangeRate();
    setInterval(fetchExchangeRate, 60000);

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) item.classList.add('active');
        });
    });

    const navBurger = document.getElementById('nav-burger');
    const navLinks = document.getElementById('nav-links');
    const navOverlay = document.getElementById('mobile-nav-overlay');

    const closeMobileNav = () => {
        navBurger?.classList.remove('active');
        navLinks?.classList.remove('open');
        navOverlay?.classList.remove('open');
        navBurger?.setAttribute('aria-expanded', 'false');
    };

    const openMobileNav = () => {
        navBurger?.classList.add('active');
        navLinks?.classList.add('open');
        navOverlay?.classList.add('open');
        navBurger?.setAttribute('aria-expanded', 'true');
    };

    navBurger?.addEventListener('click', () => {
        if (navLinks?.classList.contains('open')) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    navOverlay?.addEventListener('click', closeMobileNav);

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
});