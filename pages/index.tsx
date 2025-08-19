// pages/index.tsx
import Head from "next/head";
import Link from "next/link";

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
        <title>KODE Да Винчи — школа программирования и робототехники для детей 3–17 лет</title>
        <meta
          name="description"
          content="Игры, роботы, 3D-модели, мобильные приложения. Офлайн 1–2 раза в неделю по 2 часа. Возрастные группы 3–6, 7–10, 9–13, 14–17."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* HERO — фото детей за роботами */}
        <section className={`${brand.grad} text-white`}>
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  KODE Да Винчи — IT, <span className={brand.accentText}>роботы</span>, игры и 3D
                </h1>
                <p className="mt-4 text-white/90">
                  Для детей 3–17 лет • офлайн 1–2 раза в неделю по 2 часа • проекты: игры, роботы, 3D‑модели, приложения.
                </p>

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
                  <a href="https://t.me/kodedavinchi86" target="_blank" className="px-5 py-3 rounded-xl border border-white/40 hover:bg-white/10" rel="noreferrer">
                    TG‑канал
                  </a>
                  <a href="https://vk.com/kode_da_vinchi?from=groups" target="_blank" className="px-5 py-3 rounded-xl border border-white/40 hover:bg-white/10" rel="noreferrer">
                    Мы во ВКонтакте
                  </a>
                </div>
              </div>

              {/* одна ключевая картинка — дети собирают роботов */}
              <div className="relative">
                <img
                  src="/images/1.png"
                  alt="Дети собирают роботов на занятиях KODE Да Винчи"
                  className="rounded-2xl w-full h-auto object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-white/90 text-purple-900 text-sm shadow">
                  🤖 Робототехника • офлайн
                </div>
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

        {/* Новинка: английский */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="rounded-2xl border p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🇬🇧</div>
              <div>
                <h3 className="text-xl font-bold">Новинка: английский язык</h3>
                <p className="mt-2 text-gray-700">
                  С сентября — в каждой группе <b>каждый 4‑й урок</b> месяца проходит как полноценный урок английского:
                  лексика по теме модуля, разговорные задания и презентация проектов на английском.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Финансовая грамотность c мини-галереей купюр */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="rounded-2xl border p-6 md:p-8 bg-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💰</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">Финансовая грамотность: внутренняя валюта</h3>
                <p className="mt-2 text-gray-700">
                  За активность на занятиях и успехи в проектах дети получают «валюту школы». Её можно потратить
                  в нашем TG‑магазине на технику, гаджеты и мерч.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {["5.png", "10.png", "20.png", "50.png"].map((f) => (
                    <img key={f} src={`/images/${f}`} alt={f.replace(".png","")} className="h-14 w-auto rounded-md border" />
                  ))}
                </div>
                <a href="https://t.me/kodedavinchi86" target="_blank" rel="noreferrer" className="inline-block mt-3 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                  Открыть TG‑канал
                </a>
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

        {/* Контакты */}
        <section className={`${brand.grad} text-white`}>
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white/10 p-6 border border-white/20">
                <div className="text-sm opacity-90">Телефон</div>
                <a href="tel:+79825524496" className={`text-xl font-bold block mt-1 ${brand.accentText}`}>
                  +7 (982) 552‑44‑96
                </a>
                <div className="mt-4 text-sm opacity-90">E‑mail</div>
                <a href="mailto:tyshchenko05@inbox.ru" className="text-white underline">
                  tyshchenko05@inbox.ru
                </a>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 border border-white/20">
                <div className="text-sm opacity-90">Адрес</div>
                <div className="text-lg mt-1">
                  г. Пыть‑Ях, микрорайон 2, дом 10
                  <div className="text-sm opacity-80">(вход со стороны дороги)</div>
                </div>
                <div className="mt-4 text-sm opacity-90">График</div>
                <div className="text-sm opacity-90">1–2 раза в неделю по 2 часа</div>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 border border-white/20">
                <div className="text-sm opacity-90">Соцсети</div>
                <div className="flex gap-3 mt-2">
                  <a href="https://t.me/kodedavinchi86" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white text-purple-800 font-semibold hover:opacity-90">
                    Telegram
                  </a>
                  <a href="https://vk.com/kode_da_vinchi?from=groups" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white text-purple-800 font-semibold hover:opacity-90">
                    ВКонтакте
                  </a>
                </div>
                <Link href="/enroll" className="inline-block mt-4 px-4 py-2 rounded-lg border border-white/40 hover:bg-white/10">
                  Записаться на курс
                </Link>
              </div>
            </div>
          </div>
        </section>
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
