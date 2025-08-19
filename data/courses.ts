// data/courses.ts
// ──────────────────────────────────────────────────────────
// 1) Типы
export type Course = {
  id: string;                  // ключ курса (должен совпадать с ключом в lessons.ts)
  title: string;               // заголовок карточки
  subtitle: string;            // подзаголовок/стек
  age: string;                 // возраст
  blurb: string;               // короткое описание
  duration: string;            // "9 месяцев • 36 занятий по 2 часа"
  price: string;               // "4 400 ₽ / месяц"
};

// 2) Список направлений (карточек)
export const courses: Course[] = [
  // 3–6
  {
    id: "kids36",
    title: "Кодики & Роботы",
    subtitle: "ScratchJr • LEGO WeDo",
    age: "3–6 лет",
    blurb: "Истории, мини‑игры и простые роботы. 72 занятия по часу.",
    duration: "9 месяцев • 2 раза в неделю по 1 часу (итого 72 урока)",
    price: "4 400 ₽ / месяц",
  },

  // 7–10
  {
    id: "3dMaster",
    title: "3D‑Мастер",
    subtitle: "Tinkercad • 3D‑печать • VR‑просмотр",
    age: "7–10 лет",
    blurb: "Моделируем и печатаем изделия. Первые проекты в VR.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "jrRobotics",
    title: "Junior Robotics",
    subtitle: "LEGO SPIKE/EV3 • Arduino базовый",
    age: "7–10 лет",
    blurb: "Роботы, датчики, сборка и схемотехника. Трек на 3 года.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "scratchGames",
    title: "Игры в Scratch",
    subtitle: "Scratch • анимация и логика",
    age: "7–10 лет",
    blurb: "Аркады и квесты, спринты и публичные демо.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "minecraftCode",
    title: "Minecraft с кодом",
    subtitle: "MakeCode • Python (по желанию)",
    age: "7–10 лет",
    blurb: "Квесты, автоматизация построек и командные миссии.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "digitalHeroes",
    title: "Цифровые супергерои",
    subtitle: "ПК‑навыки • интернет‑безопасность",
    age: "7–10 лет",
    blurb: "Грамотность: файлы, браузер, почта, презентации, этика.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },

  // 9–13
  {
    id: "dds",
    title: "Digital Design Studio",
    subtitle: "Figma • графика",
    age: "9–13 лет",
    blurb: "Афиши, персонажи и макеты интерфейсов.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "videoLab",
    title: "Video Lab",
    subtitle: "Видеомонтаж • студия",
    age: "9–13 лет",
    blurb: "Сценарий, съемка, монтаж, звук — от ролика до мини‑шоу.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "3dEngineer",
    title: "3D‑Инженер",
    subtitle: "Blender • печать • анимация",
    age: "9–13 лет",
    blurb: "Игровые модели, простая анимация и печать деталей.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "techLabRobotics",
    title: "TechLab Robotics",
    subtitle: "Arduino • пайка",
    age: "9–13 лет",
    blurb: "Прототипы, датчики и мехатроника. Трек на 3 года.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "game2d",
    title: "2D Game Lab",
    subtitle: "Construct 3",
    age: "9–13 лет",
    blurb: "Полноценные 2D‑игры и публикация.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "appLab",
    title: "Mobile App Lab",
    subtitle: "MIT App Inventor • Android",
    age: "9–13 лет",
    blurb: "Мобильные приложения, сенсоры и публикация APK.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "roblox",
    title: "Roblox Studio",
    subtitle: "Lua‑скрипты",
    age: "9–13 лет",
    blurb: "Миры и механики на Lua. Командные проекты.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },

  // 14–17
  {
    id: "3dPro",
    title: "3D PRO",
    subtitle: "Blender • Unity • печать",
    age: "14–17 лет",
    blurb: "Игровые модели, риги, экспорт в движки и печать прототипов.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "roboticsPro",
    title: "Robotics PRO",
    subtitle: "Arduino PRO • IoT",
    age: "14–17 лет",
    blurb: "Умные устройства и автономные роботы.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "unity",
    title: "Unity PRO",
    subtitle: "C# • 2D/3D",
    age: "14–17 лет",
    blurb: "Игры на C#, физика, UI и билд проекта.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "unreal",
    title: "Unreal PRO",
    subtitle: "Blueprint • 3D",
    age: "14–17 лет",
    blurb: "Игры на Blueprints, освещение и экспорты.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
  {
    id: "aiDev",
    title: "ИИ‑Разработчик",
    subtitle: "Python • нейросети",
    age: "14–17 лет",
    blurb: "CV, NLP и генерация контента. Этичное применение ИИ.",
    duration: "9 месяцев • 36 занятий по 2 часа",
    price: "4 400 ₽ / месяц",
  },
];

// 3) Хелпер: получить программу по id курса (берётся из lessons.ts)
export { getProgramByCourseId } from "./lessons";
