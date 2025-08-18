import Link from "next/link";
import Head from "next/head";

/** === КОНТАКТЫ и СОЦСЕТИ === */
const SOCIALS = {
  telegram: "https://t.me/kodedavinchi86",
  vk: "https://vk.com/kode_da_vinchi?from=groups",
  instagram: "",
  phone: "+7 (982) 552-44-96",
  phoneHref: "+79825524496",
  email: "tyshchenko05@inbox.ru",
  address: "г.Пыть-Ях, микрорайон 2, дом 10 (вход со стороны дороги)",
};

/** === ГАЛЕРЕЯ ===  (положи фото в /public/photos/...) */
const GALLERY = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
  "/photos/9.jpg",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>KODE Да Винчи — школа программирования и робототехники</title>
        <meta
          name="description"
          content="KODE Да Винчи — курсы для детей 3–17: программирование, робототехника, 3D/дизайн, компьютерная грамотность, финансовая грамотность. Офлайн 1–2 раза в неделю по 2 часа."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">
            <span className="text-purple-700">KODE</span>{" "}
            <span className="text-yellow-500">Да Винчи</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-2">
            <a href="#about" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">О школе</a>
            <a href="#tracks" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Направления</a>
            <a href="#finance" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Финграмотность</a>
            <a href="#english" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Английский</a>
            <a href="#gallery" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Фото</a>
            <a href="#contacts" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Контакты</a>
          </nav>
          <Link href="/enroll" className="px-3 py-2 rounded-md bg-purple-700 text-white text-sm font-semibold hover:opacity-90">
            Записаться
          </Link>
        </div>
      </header>

      {/* СТАРТ ДАТА БАННЕР */}
      <div className="bg-yellow-300 text-purple-900">
        <div className="max-w-6xl mx-auto px-4 py-2 text-center text-sm md:text-base font-semibold">
          Старт занятий в этом году — <span className="underline">с 13 сентября</span>. Идёт набор групп!
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              KODE Да Винчи — школа программирования и робототехники
            </h1>
            <p className="mt-3 text-white/90">
              3–17 лет • офлайн 1–2 раза в неделю по 2 часа • проекты: игры, роботы, 3D-модели, приложения.
            </p>

            {/* Плашки с ключевой инфой */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Tile title="Ранняя цена до сентября" big="4 400 ₽ / месяц" note="Оплата помесячно" />
              <Tile title="Скидки" list={["Второе направление — −50%", "Второй ребёнок — −50%"]} />
              <Tile title="Организация" list={["Расписание формируется под группу", "Английский в конце модулей"]} />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/enroll" className="px-5 py-3 rounded-md bg-yellow-300 text-purple-900 font-semibold text-center hover:opacity-90">
                Подобрать курс и записаться
              </Link>
              <a href="#about" className="px-5 py-3 rounded-md border border-white/30 text-center hover:bg-white/10">
                Узнать о школе
              </a>
            </div>
          </div>

          {/* Фото справа */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
            <img src={GALLERY[0]} alt="Наши занятия" className="w-full h-full object-cover min-h-[260px]" />
          </div>
        </div>
      </section>

      {/* О ШКОЛЕ */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">О школе</h2>
        <p className="text-gray-700">
          Учим через практику и интерес: каждый модуль — законченный проект и мини-демо для родителей. 
          Используем современную технику: LEGO/Arduino, пайку, 3D-печать, VR, графические планшеты. 
          Малые группы и тёплая атмосфера помогают детям уверенно расти в ИТ и инженерии.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Info title="Практика > теория" text="Игровой формат, спринты и публичные презентации." />
          <Info title="Современная техника" text="LEGO/Arduino, датчики, паяльные станции, 3D-принтеры, VR." />
          <Info title="Малые группы" text="Возрастные наборы: 3–6, 7–10, 9–13, 14–17. Индивидуальная поддержка." />
        </div>
      </section>

      {/* НАПРАВЛЕНИЯ */}
      <section id="tracks" className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Направления</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Track emoji="💻" title="Программирование" text="Scratch, Python, Roblox, Unity, App Inventor" />
          <Track emoji="🤖" title="Робототехника" text="LEGO/Arduino, сенсоры, пайка, дроны" />
          <Track emoji="🎨" title="3D и дизайн" text="Figma, Blender, 3D-печать, графические планшеты" />
          <Track emoji="🧠" title="Компьютерная грамотность" text="ПК, Word/Excel/PowerPoint, безопасность" />
        </div>
        <div className="pt-2">
          <Link href="/enroll" className="inline-block px-5 py-3 rounded-md bg-gray-900 text-white hover:opacity-90">
            Перейти к форме записи
          </Link>
        </div>
      </section>

      {/* ЦЕНЫ/СКИДКИ + ОРГАНИЗАЦИЯ */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="text-xl font-bold mb-2">Стоимость и скидки</h3>
            <ul className="text-sm space-y-2">
              <li>• Ранняя цена до сентября: <b>4 400 ₽ / месяц</b></li>
              <li>• Скидки не суммируются: либо <b>второй ребёнок −50%</b>, либо <b>второе направление −50%</b></li>
              <li>• Оплата помесячно, можно начать в любой момент</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="text-xl font-bold mb-2">Как проходят занятия</h3>
            <ul className="text-sm space-y-2">
              <li>• 1–2 раза в неделю по 2 часа</li>
              <li>• Группы 6–8 человек, по возрастам</li>
              <li>• По окончании каждого модуля — мини-демо и сертификаты</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ФИНАНСОВАЯ ГРАМОТНОСТЬ */}
      <section id="finance" className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-2xl border p-6 bg-gradient-to-br from-yellow-50 to-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Финансовая грамотность — учимся зарабатывать и разумно тратить</h2>
          <p className="text-gray-700">
            На занятиях дети получают «внутришкольную валюту» за активность, проекты, помощь команде. 
            Эту валюту можно потратить в нашем <b>Telegram-магазине</b> на полезные гаджеты и технику 
            (мышки, наушники, наборы для пайки, мини-роботы и т.д.). Так ребёнок видит прямую связь между 
            усилиями и результатом, учится планировать бюджет и принимать взвешенные решения.
          </p>
          <div className="mt-3 text-sm text-gray-600">
            Ценность: формируем здоровое отношение к деньгам, навыки планирования и мотивацию доводить проекты до конца.
          </div>
        </div>
      </section>

      {/* АНГЛИЙСКИЙ ЯЗЫК */}
      <section id="english" className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Новинка: английский в конце каждого модуля</h2>
          <p className="text-gray-700">
            С <b>сентября</b> в каждой группе по завершении модуля проводим мини-уроки английского по тематике курса 
            (команды, интерфейсы, термины). Это помогает детям:
          </p>
          <ul className="mt-2 text-gray-700 list-disc list-inside space-y-1">
            <li>свободнее ориентироваться в англоязычных интерфейсах (Roblox, Python-библиотеки и др.);</li>
            <li>быстрее искать и понимать документацию и туториалы;</li>
            <li>уверенно презентовать проект, используя простые технические фразы.</li>
          </ul>
        </div>
      </section>

      {/* ЦИФРЫ */}
      <section id="numbers" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Цифры и факты</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Num n="9 мес" t="длительность программ" />
          <Num n="36" t="занятий по 2 часа" />
          <Num n="10+" t="направлений и треков" />
          <Num n="4 400 ₽" t="в месяц (ранняя цена)" />
        </div>
      </section>

      {/* ФОТО */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Наши занятия</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img src={src} alt={`Фото ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <h3 className="text-2xl font-bold">Готовы к старту? Набор открыт</h3>
            <p className="text-white/90">Оставьте заявку — подберём группу и согласуем удобное расписание.</p>
          </div>
          <Link href="/enroll" className="px-5 py-3 rounded-md bg-yellow-300 text-purple-900 font-semibold hover:opacity-90">
            Записаться на курс
          </Link>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Контакты</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-4">
            <div className="font-semibold">KODE Да Винчи</div>
            <div className="text-sm text-gray-600 mt-1">Офлайн-занятия 1–2 раза в неделю по 2 часа</div>
            <div className="text-sm mt-3">
              Тел.: <a className="underline" href={`tel:${SOCIALS.phoneHref}`}>{SOCIALS.phone}</a>
            </div>
            <div className="text-sm">
              E-mail: <a className="underline" href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
            </div>
            <div className="text-sm mt-3">Адрес: {SOCIALS.address}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {SOCIALS.telegram && <a href={SOCIALS.telegram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:opacity-90">Telegram</a>}
              {SOCIALS.vk && <a href={SOCIALS.vk} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border hover:bg-gray-50">VK</a>}
              {SOCIALS.instagram && <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border hover:bg-gray-50">Instagram</a>}
            </div>
          </div>
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A30250fa1f02ea152e9871db556a514ec49d4bb55a21a1d7e8c3310a5c42d2802&source=constructor"
            className="w-full h-[320px] rounded-2xl border"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div>© {new Date().getFullYear()} KODE Да Винчи</div>
          <div className="text-gray-600">Старт занятий — с 13 сентября • офлайн 1–2 раза в неделю по 2 часа</div>
          <Link href="/enroll" className="px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90">Записаться</Link>
        </div>
      </footer>
    </div>
  );
}

/* — МАЛЕНЬКИЕ КОМПОНЕНТЫ — */
function Tile({ title, big, note, list }: { title: string; big?: string; note?: string; list?: string[] }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
      <div className="text-sm opacity-90">{title}</div>
      {big && <div className="text-2xl font-bold text-yellow-300">{big}</div>}
      {note && <div className="text-xs opacity-80">{note}</div>}
      {list && <ul className="text-sm mt-1 space-y-1">{list.map((li) => <li key={li}>• {li}</li>)}</ul>}
    </div>
  );
}
function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-4 bg-white hover:shadow-md transition">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{text}</div>
    </div>
  );
}
function Track({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-4 bg-white hover:shadow-xl transition">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-yellow-300">{emoji}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{text}</div>
        </div>
      </div>
      <Link href="/enroll" className="mt-3 inline-block px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90">
        Выбрать курс
      </Link>
    </div>
  );
}
function Num({ n, t }: { n: string; t: string }) {
  return (
    <div className="rounded-2xl border p-4 text-center bg-white">
      <div className="text-2xl md:text-3xl font-extrabold text-purple-700">{n}</div>
      <div className="text-sm text-gray-600">{t}</div>
    </div>
  );
}
