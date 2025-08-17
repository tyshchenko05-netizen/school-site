import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>KODE Да Винчи — школа программирования и робототехники</title>
        <meta
          name="description"
          content="KODE Да Винчи — курсы для детей 3–17: программирование, робототехника, 3D/дизайн. 1–2 раза в неделю по 2 часа, оплата помесячно."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Навбар */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">
            <span className="text-purple-700">KODE</span>{" "}
            <span className="text-yellow-500">Да Винчи</span>
          </Link>
          <nav className="flex items-center gap-2">
            <a href="#about" className="hidden sm:inline text-sm px-3 py-2 rounded-md hover:bg-gray-100">
              О школе
            </a>
            <a href="#tracks" className="hidden sm:inline text-sm px-3 py-2 rounded-md hover:bg-gray-100">
              Направления
            </a>
            <a href="#faq" className="hidden sm:inline text-sm px-3 py-2 rounded-md hover:bg-gray-100">
              Вопросы
            </a>
            <Link
              href="/enroll"
              className="px-3 py-2 rounded-md bg-purple-700 text-white text-sm font-semibold hover:opacity-90"
            >
              Записаться
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Школа программирования и робототехники для детей 3–17 лет
          </h1>
          <p className="mt-3 text-white/90 max-w-3xl">
            Программирование • Робототехника • 3D/Дизайн • Компьютерная грамотность. 
            Формат: офлайн, 1–2 раза в неделю по 2 часа.
          </p>

          {/* плашки-акции */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/10 p-4 border border-white/20">
              <div className="text-sm opacity-90">Ранняя цена до сентября</div>
              <div className="text-2xl font-bold text-yellow-300">4 400 ₽ / месяц</div>
              <div className="text-xs opacity-80">Оплата помесячно</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 border border-white/20">
              <div className="text-sm opacity-90">Скидки</div>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Второе направление — <b>-50%</b></li>
                <li>• Второй ребёнок — <b>-50%</b></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 border border-white/20">
              <div className="text-sm opacity-90">Организация</div>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Расписание формируется под группу</li>
                <li>• С сентября в конце модулей — уроки английского</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/enroll"
              className="px-5 py-3 rounded-md bg-yellow-300 text-purple-900 font-semibold text-center hover:opacity-90"
            >
              Подобрать курс и записаться
            </Link>
            <a
              href="#about"
              className="px-5 py-3 rounded-md border border-white/30 text-center hover:bg-white/10"
            >
              Узнать о школе
            </a>
          </div>
        </div>
      </section>

      {/* О школе */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">О школе</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard title="Практика > теория" text="Каждый модуль — проект: игра, приложение, робот или 3D-модель." />
          <InfoCard title="Современное оборудование" text="Ноутбуки, 3D-принтеры, VR-шлемы, LEGO/Arduino, паяльные станции." />
          <InfoCard title="Малые группы" text="Возрастные группы (3–6, 7–10, 9–13, 14–17). Индивидуальная поддержка." />
        </div>
        <div className="rounded-2xl border p-4 bg-gray-50 text-sm text-gray-700">
          Занятия проходят офлайн 1–2 раза в неделю по 2 часа. Программы рассчитаны на 9 месяцев и
          включают демонстрацию проектов родителям и мероприятия в конце модулей.
        </div>
      </section>

      {/* Направления */}
      <section id="tracks" className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Направления</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TrackCard emoji="💻" title="Программирование" text="Scratch, Python, Roblox, Unity, App Inventor" />
          <TrackCard emoji="🤖" title="Робототехника" text="LEGO/Arduino, сенсоры, пайка, дроны" />
          <TrackCard emoji="🎨" title="3D и дизайн" text="Figma, Blender, 3D-печать, графические планшеты" />
          <TrackCard emoji="🧠" title="Компьютерная грамотность" text="ПК, Word/Excel/PowerPoint, браузер и безопасность" />
        </div>
        <div className="pt-2">
          <Link href="/enroll" className="inline-block px-5 py-3 rounded-md bg-gray-900 text-white hover:opacity-90">
            Перейти к форме записи
          </Link>
        </div>
      </section>

      {/* Возрастные группы */}
      <section className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h3 className="text-xl md:text-2xl font-bold">Возрастные группы</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <AgePill>3–6 лет</AgePill>
          <AgePill>7–10 лет</AgePill>
          <AgePill>9–13 лет</AgePill>
          <AgePill>14–17 лет</AgePill>
        </div>
      </section>

      {/* Отзывы (простая адаптивная карусель без JS) */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-8 space-y-4">
        <h3 className="text-xl md:text-2xl font-bold">Отзывы родителей</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReviewCard name="Анна, мама Никиты">Ребёнок в восторге от роботов и пайки. Домой бежит собирать дальше!</ReviewCard>
          <ReviewCard name="Игорь, папа Маши">Сделали собственную игру в Scratch — показали всей семье. Отличный формат.</ReviewCard>
          <ReviewCard name="Екатерина, мама Артёма">Нравится системность: проекты по месяцам, обратная связь и мягкая дисциплина.</ReviewCard>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <h3 className="text-2xl font-bold">Готовы к старту?</h3>
            <p className="text-white/90">Подберите направление и оставьте заявку — мы свяжемся для согласования расписания.</p>
          </div>
          <Link
            href="/enroll"
            className="px-5 py-3 rounded-md bg-yellow-300 text-purple-900 font-semibold hover:opacity-90"
          >
            Записаться на курс
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-10 space-y-3">
        <h3 className="text-xl md:text-2xl font-bold">Частые вопросы</h3>
        <FaqRow q="Что брать на занятия?" a="Ничего, всё оборудование предоставляем. Можно взять бутылку воды и тетрадь." />
        <FaqRow q="Как оплачивать?" a="Помесячно, до 5 числа. Ранняя цена 4 400 ₽/мес до сентября." />
        <FaqRow q="Что если пропуск?" a="Даем компенсирующие занятия/материалы. Обсуждаем индивидуально." />
      </section>

      {/* Подвал */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div>© {new Date().getFullYear()} KODE Да Винчи</div>
          <div className="text-gray-600">1–2 раза в неделю по 2 часа • офлайн</div>
          <Link href="/enroll" className="px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90">
            Записаться
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* ————— Мелкие компоненты ————— */

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-4 bg-white hover:shadow-md transition">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{text}</div>
    </div>
  );
}

function TrackCard({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-4 bg-white hover:shadow-xl transition">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-yellow-300">
          {emoji}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{text}</div>
        </div>
      </div>
      <Link
        href="/enroll"
        className="mt-3 inline-block px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
      >
        Выбрать курс
      </Link>
    </div>
  );
}

function AgePill({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-2 rounded-full border text-center bg-white hover:bg-gray-50">
      {children}
    </div>
  );
}

function ReviewCard({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <div className="text-sm text-gray-600">“{children}”</div>
      <div className="mt-2 text-sm font-medium">{name}</div>
    </div>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-xl border p-3 bg-white">
      <summary className="cursor-pointer font-medium">{q}</summary>
      <p className="text-sm text-gray-600 mt-2">{a}</p>
    </details>
  );
}
