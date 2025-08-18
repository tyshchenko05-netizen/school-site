import Link from "next/link";
import Head from "next/head";

const SOCIALS = {
  telegram: "https://t.me/kodedavinchi86",
  vk: "https://vk.com/kode_da_vinchi?from=groups",
  instagram: "", // если появится — вставь сюда
  phone: "+7 (982) 552-44-96",
  phoneHref: "+79825524496",
  email: "tyshchenko05@inbox.ru",
  address: "г.Пыть-Ях, микрорайон 2, дом 10 (вход со стороны дороги)",
};

// ФОТО: если пути другие — просто измени массив.
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
          content="KODE Да Винчи — курсы для детей 3–17: программирование, робототехника, 3D/дизайн, компьютерная грамотность. Офлайн 1–2 раза в неделю по 2 часа."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <img src="/logo.png" alt="KODE Да Винчи" className="h-8 w-8 object-contain" />
            <span className="text-purple-700">KODE</span>{" "}
            <span className="text-yellow-500">Да Винчи</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-2">
            <a href="#about" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">О школе</a>
            <a href="#tracks" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Направления</a>
            <a href="#numbers" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Цифры</a>
            <a href="#gallery" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Фото</a>
            <a href="#contacts" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">Контакты</a>
          </nav>
          <Link href="/enroll" className="px-3 py-2 rounded-md bg-purple-700 text-white text-sm font-semibold hover:opacity-90">
            Записаться
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="KODE Да Винчи" className="h-12 w-12 object-contain" />
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                KODE Да Винчи — школа программирования и робототехники
              </h1>
            </div>
            <p className="mt-3 text-white/90">
              3–17 лет • офлайн 1–2 раза в неделю по 2 часа • практические проекты: игры, роботы, 3D-модели и приложения.
            </p>

            {/* Акции */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Tile title="Ранняя цена до сентября" big="4 400 ₽ / месяц" note="Оплата помесячно" />
              <Tile title="Скидки" list={["Второе направление — −50%", "Второй ребёнок — −50%"]} />
              <Tile title="Организация" list={["Расписание формируется под группу", "С сентября — английский после модуля"]} />
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

          {/* Крупное фото */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
            <img src={GALLERY[0]} alt="Наши занятия" className="w-full h-full object-cover min-h-[260px]" />
          </div>
        </div>
      </section>

      {/* О школе */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">О школе</h2>
        <p className="text-gray-700">
          Учим через интерес и практику: каждый модуль заканчивается готовым проектом и мини-демо для родителей.
          На занятиях используем современное оборудование: ноутбуки, LEGO/Arduino, пайку, 3D-принтеры, VR, графические планшеты.
          Малые группы и тёплая атмосфера помогают детям уверенно расти в ИТ и инженерии.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Info title="Практика > теория" text="Игровой формат, проекты и публичные презентации." />
          <Info title="Современная техника" text="LEGO/Arduino, датчики, паяльные станции, 3D-печать и VR." />
          <Info title="Малые группы" text="Возрастные наборы: 3–6, 7–10, 9–13, 14–17. Индивидуальная поддержка." />
        </div>
      </section>

      {/* Направления */}
      <section id="tracks" className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Направления</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Track emoji="💻" title="Программирование" text="Scratch, Python, Roblox, Unity, App Inventor" />
          <Track emoji="🤖" title="Робототехника" text="LEGO/Arduino, сенсоры, пайка, дроны" />
          <Track emoji="🎨" title="3D и дизайн" text="Figma, Blender, 3D-печать, графические планшеты" />
          <Track emoji="🧠" title="Компьютерная грамотность" text="ПК, Word/Excel/PowerPoint, цифровая безопасность" />
        </div>
        <div className="pt-2">
          <Link href="/enroll" className="inline-block px-5 py-3 rounded-md bg-gray-900 text-white hover:opacity-90">
            Перейти к форме записи
          </Link>
        </div>
      </section>

      {/* Цифры и факты */}
      <section id="numbers" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Цифры и факты</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Num n="9 мес" t="длительность программ" />
          <Num n="36" t="занятий по 2 часа" />
          <Num n="10+" t="направлений и треков" />
          <Num n="4 400 ₽" t="в месяц по ранней цене" />
        </div>
      </section>

      {/* Фото-галерея */}
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

      {/* Отзывы */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-bold">Отзывы родителей</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Review name="Анна, мама Никиты">Сын в восторге от роботов и пайки. Домой бежит собирать дальше!</Review>
          <Review name="Игорь, папа Маши">Сделали свою игру в Scratch — показали всей семье. Отличный формат.</Review>
          <Review name="Екатерина, мама Артёма">Нравится система: проекты по месяцам, обратная связь и тёплая атмосфера.</Review>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <h3 className="text-2xl font-bold">Готовы к старту?</h3>
            <p className="text-white/90">Оставьте заявку — подберём группу и согласуем расписание.</p>
          </div>
          <Link href="/enroll" className="px-5 py-3 rounded-md bg-yellow-300 text-purple-900 font-semibold hover:opacity-90">
            Записаться на курс
          </Link>
        </div>
      </section>

      {/* Контакты + соцсети */}
      <section id="contacts" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Контакты</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-4">
            <div className="font-semibold">KODE Да Винчи</div>
            <div className="text-sm text-gray-600 mt-1">Офлайн-занятия 1–2 раза в неделю по 2 часа</div>
            <div className="text-sm mt-3">
              Тел.:{" "}
              <a className="underline" href={`tel:${SOCIALS.phoneHref}`}>
                {SOCIALS.phone}
              </a>
            </div>
            <div className="text-sm">
              E-mail:{" "}
              <a className="underline" href={`mailto:${SOCIALS.email}`}>
                {SOCIALS.email}
              </a>
            </div>
            <div className="text-sm mt-3">Адрес: {SOCIALS.address}</div>
          </div>

          <div className="rounded-2xl border p-4">
            <div className="font-semibold mb-2">Мы в соцсетях</div>
            <div className="flex flex-wrap gap-2">
              {SOCIALS.telegram && (
                <a
                  href={SOCIALS.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                >
                  Telegram
                </a>
              )}
              {SOCIALS.vk && (
                <a
                  href={SOCIALS.vk}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md border hover:bg-gray-50"
                >
                  VK
                </a>
              )}
              {SOCIALS.instagram && (
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md border hover:bg-gray-50"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-5 w-5" />
            <span>© {new Date().getFullYear()} KODE Да Винчи</span>
          </div>
          <div className="text-gray-600">1–2 раза в неделю по 2 часа • офлайн</div>
          <Link href="/enroll" className="px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90">
            Записаться
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* — маленькие компоненты — */
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
function Review({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="text-sm text-gray-600">“{children}”</div>
      <div className="mt-2 text-sm font-medium">{name}</div>
    </div>
  );
}
