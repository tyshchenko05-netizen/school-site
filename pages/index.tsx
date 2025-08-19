// pages/index.tsx
import Head from "next/head";
import Link from "next/link";

/* ---------- Верхняя плашка-анонс ---------- */
function TopAnnouncement() {
  return (
    <div className="w-full bg-yellow-300 text-purple-900 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <div className="font-semibold">
          🚀 Старт занятий — с 13 сентября. Успейте записаться!
        </div>
        <Link
          href="/enroll"
          className="px-3 py-1 rounded-md bg-purple-900 text-white text-xs hover:opacity-90"
        >
          Записаться →
        </Link>
      </div>
    </div>
  );
}

/* ---------- Шапка сайта ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="KODE Да Винчи"
            className="h-8 w-auto object-contain"
          />
          <span className="hidden sm:inline font-extrabold text-purple-800">
            KODE Да Винчи
          </span>
        </Link>

        {/* навигация + быстрые контакты */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/enroll" className="hover:underline">Курсы</Link>
          <a href="https://t.me/kodedavinchi86" target="_blank" rel="noreferrer" className="hover:underline">Telegram</a>
          <a href="https://vk.com/kode_da_vinchi?from=groups" target="_blank" rel="noreferrer" className="hover:underline">ВКонтакте</a>
          <a href="tel:+79825524496" className="hover:underline">+7 (982) 552‑44‑96</a>
          <a href="mailto:tyshchenko05@inbox.ru" className="hover:underline">tyshchenko05@inbox.ru</a>
        </nav>

        <Link href="/enroll" className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm">
          Записаться
        </Link>
      </div>
    </header>
  );
}

export default function HomePage() {
  const brand = {
    grad: "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800",
    accentText: "text-yellow-300",
    accentBg: "bg-yellow-300 text-purple-900",
    ring: "ring-2 ring-yellow-300",
  };

  return (
    <>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <title>KODE Да Винчи — школа программирования и робототехники для детей 3–17 лет</title>
        <meta
          name="description"
          content="Игры, роботы, 3D-модели, мобильные приложения. Офлайн 1–2 раза в неделю по 2 часа. Возрастные группы 3–6, 7–10, 9–13, 14–17. Старт с 13 сентября."
        />
        <meta name="color-scheme" content="light only" />
      </Head>

      <main className="min-h-screen bg-white">
        <TopAnnouncement />
        <Header />

        {/* HERO — фото детей за роботами */}
        <section className={`${brand.grad} text-white`}>
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  KODE Да Винчи — IT, <span className={brand.accentText}>роботы</span>, игры и 3D
                </h1>

                {/* читаемые чипы вместо сплошного текста */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Для детей 3–17 лет",
                    "Офлайн 1–2 раза в неделю по 2 часа",
                    "Проекты: игры, роботы, 3D‑модели, приложения",
                    "Старт занятий — с 13 сентября",
                  ].map((t) => (
                    <li key={t} className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4 border border-white/20">
                    <div className="text-sm opacity-90">Ранняя цена до сентября</div>
                    <div className={`text-2xl font-bold ${brand.accentText}`}>4 400 ₽ / мес</div>
                    <div className="text-xs opacity-80">Оплата помесячно</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 border border-white/20">
                    <div className="text-sm opacity-90">Акции</div>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Второе направление — <b>-50%</b></li>
                      <li>• Второй ребёнок — <b>-50%</b></li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 border border-white/20">
                    <div className="text-sm opacity-90">Старт занятий</div>
                    <div className="text-lg font-bold">с 13 сентября</div>
                    <div className="text-xs opacity-80">Расписание после набора группы</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/enroll" className="px-5 py-3 rounded-xl bg-white text-purple-800 font-semibold hover:opacity-90">
                    Подобрать курс
                  </Link>
                  <a href="https://vk.com/kode_da_vinchi?from=groups" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-white/40 hover:bg-white/10">
                    Мы во ВКонтакте
                  </a>
                </div>
              </div>

              {/* ключевая картинка — без плашек поверх */}
              <div className="relative">
                <img
                  src="/images/1.png"
                  alt="Дети собирают роботов на занятиях KODE Да Винчи"
                  className="rounded-2xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Быстрый выбор возраста */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-extrabold mb-4">Выберите возраст</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: "3-6", label: "3–6 лет", emoji: "👶" },
              { id: "7-10", label: "7–10 лет", emoji: "🧒" },
              { id: "9-13", label: "9–13 лет", emoji: "🧑" },
              { id: "14-17", label: "14–17 лет", emoji: "🎓" },
            ].map((a) => (
              <Link
                key={a.id}
                href={{ pathname: "/enroll", query: { age: a.id } }}
                className={`rounded-2xl border p-5 hover:shadow-xl transition ${brand.ring} bg-white flex items-center justify-between`}
              >
                <div>
                  <div className="text-lg font-semibold">{a.label}</div>
                  <div className="text-sm text-gray-500">направления и курсы</div>
                </div>
                <div className={`text-2xl p-2 rounded-xl ${brand.grad} ${brand.accentText}`}>{a.emoji}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Направления (коротко) */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-extrabold mb-4">Направления</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CardDir emoji="🎨" title="3D и творчество" items={["3D‑Мастер", "Digital Design Studio", "3D‑Инженер", "3D PRO", "Video Lab"]} />
            <CardDir emoji="🤖" title="Робототехника" items={["Early Lab (для 3–6)", "Junior Robotics", "TechLab Robotics", "Robotics PRO"]} />
            <CardDir emoji="💻" title="Программирование" items={["Scratch", "Minecraft с кодом", "2D Game Lab", "Mobile App Lab", "Roblox Studio", "Unity PRO", "Unreal PRO", "ИИ‑Разработчик"]} />
          </div>
          <div className="mt-4">
            <Link href="/enroll" className="inline-block px-5 py-3 rounded-xl bg-gray-900 text-white hover:opacity-90">
              Смотреть все курсы и программы
            </Link>
          </div>
        </section>

        {/* Новинка: английский — усиленный текст + картинка */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="rounded-2xl border p-6 md:p-10 bg-gradient-to-br from-yellow-50 to-white grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-extrabold">Новинка: английский язык в каждой группе</h3>
              <ul className="mt-3 space-y-2 text-gray-800">
                <li>• <b>Каждый 4‑й урок</b> месяца — полноценное занятие English.</li>
                <li>• Разбираем <b>лексику по теме модуля</b> (игры, роботы, дизайн, 3D).</li>
                <li>• Практикуем <b>говорение</b> через мини‑игры, питч проектов, диалоги.</li>
                <li>• Ребёнок учится <b>презентовать результат</b> и понимать технические термины.</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Формат адаптирован под возраст. Цель — уверенная коммуникация о своём проекте и мотивация учить язык.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="/images/english.png" alt="Урок английского в KODE Да Винчи" className="rounded-xl w-full h-auto object-cover border" />
            </div>
          </div>
        </section>

        {/* Финансовая грамотность — увеличенный блок */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="rounded-2xl border p-6 md:p-10 bg-white">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="text-4xl">💰</div>
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold">Внутренняя валюта: учимся финансовой грамотности</h3>
                <p className="mt-2 text-gray-800">
                  На занятиях дети зарабатывают «валюту школы» за активность, командную работу и прогресс в проекте.
                  Это превращает обучение в <b>понятную систему мотивации</b> и помогает обсудить ценность труда.
                </p>
                <div className="mt-3 grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Баллы за задачи, дедлайны, помощь команде.</li>
                    <li>• Бонусы за публичные демонстрации проектов.</li>
                    <li>• «Штрафов» нет — только позитивное подкрепление.</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Обмен на призы на праздниках и показах.</li>
                    <li>• Учимся планировать бюджет и копить на цель.</li>
                    <li>• Обсуждаем осознанные покупки и приоритеты.</li>
                  </ul>
                </div>
                <div className="mt-5 flex items-center gap-4 flex-wrap">
                  {["55.png", "10.png", "20.png", "50.png"].map((f) => (
                    <img key={f} src={`/images/${f}`} alt={f.replace(".png","")} className="h-20 w-auto rounded-md border shadow-sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Галерея ваших фото: 1–8.png */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-extrabold mb-4">Как проходят занятия</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1,2,3,4,5,6,7,8].map((n) => (
              <img key={n} src={`/images/${n}.png`} alt={`Галерея ${n}`} className="rounded-xl aspect-square object-cover" />
            ))}
          </div>
        </section>

        {/* Карта и контакты */}
        <section className="text-white" style={{ background: "linear-gradient(135deg,#6d28d9,#7c3aed,#5b21b6)" }}>
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="rounded-2xl bg-white/10 p-6 border border-white/20">
                <div className="text-sm opacity-90">Адрес</div>
                <div className="text-lg mt-1">
                  г. Пыть‑Ях, микрорайон 2, дом 10
                  <div className="text-sm opacity-80">(вход со стороны дороги)</div>
                </div>

                <div className="mt-4 text-sm opacity-90">Связаться</div>
                <a href="tel:+79825524496" className="text-xl font-bold block mt-1 text-yellow-300">
                  +7 (982) 552‑44‑96
                </a>
                <a href="mailto:tyshchenko05@inbox.ru" className="underline">
                  tyshchenko05@inbox.ru
                </a>

                <div className="mt-4 text-sm opacity-90">График</div>
                <div className="text-sm opacity-90">1–2 раза в неделю по 2 часа • старт с 13 сентября</div>

                <Link href="/enroll" className="inline-block mt-4 px-4 py-2 rounded-lg bg-white text-purple-800 font-semibold hover:opacity-90">
                  Записаться на курс
                </Link>
              </div>

              {/* Яндекс.Карта */}
              <div className="rounded-2xl overflow-hidden border">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c3f0f3a0-test&source=constructor"
                  className="w-full h-[360px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Нижняя плашка-анонс */}
        <TopAnnouncement />
      </main>
    </>
  );
}

/* карточка-направление */
function CardDir({ emoji, title, items }: { emoji: string; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border p-5 bg-white hover:shadow-xl transition">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{emoji}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <ul className="mt-3 text-sm text-gray-600 space-y-1 list-disc pl-6">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <Link href="/enroll" className="mt-4 inline-block text-sm font-semibold underline">
        Смотреть курсы →
      </Link>
    </div>
  );
}
