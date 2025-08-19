// data/lessons.ts
// ──────────────────────────────────────────────────────────
// Типы
export type Lesson = {
  title: string;
  description: string;
  project?: string;
  english?: boolean; // подсветим в UI
};

export type Module = {
  name: string;       // месяц/тема месяца
  lessons: Lesson[];  // 4 урока (каждый 4-й — English)
};

export type Program = Module[];

// ──────────────────────────────────────────────────────────
// ROBLOX STUDIO — 9–13 лет (полная программа)
const robloxProgram: Program = [
  {
    name: "Сентябрь — Старт в Roblox Studio",
    lessons: [
      {
        title: "Интерфейс студии и первая карта",
        description: "Навигация, части, материалы. Безопасность.",
        project: "Мини‑мир с домом, деревом и тропой",
      },
      {
        title: "Lua‑скрипты: первые события",
        description: "Перемещение, клики, изменение свойств по коду.",
        project: "Кнопка‑портал",
      },
      {
        title: "Триггеры и взаимодействия",
        description: "Touched, ClickDetector, простые эффекты.",
        project: "Дверь‑головоломка",
      },
      {
        title: "English Lesson — Let’s build the world!",
        description: "Game, build, player, jump, door, open, close.",
        english: true,
      },
    ],
  },
  {
    name: "Октябрь — Платформер",
    lessons: [
      {
        title: "Контроллер игрока",
        description: "Скорость, прыжок, чекпоинты.",
        project: "Полоса препятствий 1.0",
      },
      {
        title: "Счётчики и таймеры",
        description: "Счет очков и времени, GUI‑лейаут.",
        project: "HUD со счётом",
      },
      {
        title: "Коллектаблы и бустеры",
        description: "Velocity, BodyForce, простая физика.",
        project: "Система монеток и ускорений",
      },
      {
        title: "English Lesson — Arcade time!",
        description: "Score, timer, win/lose, level, checkpoint.",
        english: true,
      },
    ],
  },
  {
    name: "Ноябрь — Мир‑квест",
    lessons: [
      {
        title: "Диалоги и задачи",
        description: "Bindable/Remote Events, выдача миссий.",
        project: "НПС «Проводник»",
      },
      {
        title: "Инвентарь",
        description: "Коллекция предметов, простые сохранения.",
        project: "Рюкзак исследователя",
      },
      {
        title: "Карта мира и телепорты",
        description: "Зоны, триггеры, мини‑карта.",
        project: "Сеть порталов",
      },
      {
        title: "English Lesson — Quest day",
        description: "Map, quest, item, collect, talk, trade.",
        english: true,
      },
    ],
  },
  {
    name: "Декабрь — Командный мини‑игровой режим",
    lessons: [
      {
        title: "Команды и спавн",
        description: "Списки игроков, spawn points.",
        project: "Team Deathmatch (заготовка)",
      },
      {
        title: "Гейм‑луп",
        description: "Раунды, старт/финиш, UI статусов.",
        project: "Менеджер раундов",
      },
      {
        title: "Баланс и таблица лидеров",
        description: "Роли, баланс, Leaderstats.",
        project: "Таблица лидеров",
      },
      {
        title: "English Lesson — Play to win!",
        description: "Team, round, start, finish, win, balance.",
        english: true,
      },
    ],
  },
  {
    name: "Январь — Симулятор",
    lessons: [
      {
        title: "Экономика и ресурсы",
        description: "Валюты, апгрейды, GUI прогресса.",
        project: "Симулятор фермера 1.0",
      },
      {
        title: "Механики роста",
        description: "Скорость накопления, буст‑зоны.",
        project: "Склад и апгрейды",
      },
      {
        title: "Монетизация (эмулируем)",
        description: "Пропуска, буст‑пакеты (без покупок).",
        project: "Экран апгрейдов",
      },
      {
        title: "English Lesson — Grow & upgrade",
        description: "Resource, upgrade, storage, boost.",
        english: true,
      },
    ],
  },
  {
    name: "Февраль — Паркур PRO",
    lessons: [
      {
        title: "Физические препятствия",
        description: "Подвижные платформы, конвейеры.",
        project: "Паркур‑карта 1",
      },
      {
        title: "Кастом‑контроллер",
        description: "Dash/двойной прыжок, cooldown.",
        project: "Механика рывка",
      },
      {
        title: "Сохранение прогресса",
        description: "DataStore (мок‑режим), чекпоинты.",
        project: "Сохранения к паркуру",
      },
      {
        title: "English Lesson — Move fast!",
        description: "Dash, jump, platform, checkpoint, save.",
        english: true,
      },
    ],
  },
  {
    name: "Март — Тайкун",
    lessons: [
      {
        title: "Прототип добычи",
        description: "Станки/генераторы, очередь апгрейдов.",
        project: "Тайкун 1.0",
      },
      {
        title: "Автоматизация",
        description: "Конвейеры, сбор ресурсов.",
        project: "Сборщик ресурсов",
      },
      {
        title: "Прогресс и цели",
        description: "Ветвление улучшений, цели игрока.",
        project: "Древо апгрейдов",
      },
      {
        title: "English Lesson — Tycoon day",
        description: "Factory, conveyor, upgrade, income.",
        english: true,
      },
    ],
  },
  {
    name: "Апрель — Полировка и оптимизация",
    lessons: [
      {
        title: "Арт‑пасс",
        description: "Материалы, пост‑эффекты, освещение.",
        project: "Красивый мир",
      },
      {
        title: "Оптимизация",
        description: "Коллизии, отложенная загрузка.",
        project: "Лёгкие сцены",
      },
      {
        title: "Тесты на игроках",
        description: "Чек‑листы, фиксы, ретест.",
        project: "Стабильный билд",
      },
      {
        title: "English Lesson — Playtest",
        description: "Polish, bug, fix, test, performance.",
        english: true,
      },
    ],
  },
  {
    name: "Май — Итоговый проект и защита",
    lessons: [
      {
        title: "Итог: финальные задачи",
        description: "Фичи, слияние и сборка.",
        project: "Версия 1.0",
      },
      {
        title: "Презентация",
        description: "Слайды, трейлер, репетиция питча.",
        project: "Трейлер и постер",
      },
      {
        title: "Генеральная репетиция",
        description: "Прогон и исправления по списку.",
        project: "Release Candidate",
      },
      {
        title: "Demo Day (EN‑вставки)",
        description: "Короткая защита, ответы на вопросы.",
        project: "Защита проекта",
        english: true,
      },
    ],
  },
];

// ──────────────────────────────────────────────────────────
// 2D GAME LAB — 9–13 лет (полная программа)
const game2dProgram: Program = [
  {
    name: "Сентябрь — Основы Construct 3",
    lessons: [
      { title: "Сцена и события", description: "Слои, спрайты, базовые события.", project: "Мини‑аркада 1" },
      { title: "Коллизии и управление", description: "Физика и клавиши." },
      { title: "HUD и счёт", description: "Счётчики, интерфейс." },
      { title: "English Lesson — Let’s Play Arcade", description: "Game, level, start/stop, score.", english: true },
    ],
  },
  {
    name: "Октябрь — Платформер",
    lessons: [
      { title: "Переменные и сложность", description: "Счётчики, ускорение.", project: "Обби 1" },
      { title: "Таймеры и бонусы", description: "Power‑ups, тайминги." },
      { title: "Сохранения", description: "Встроенное сохранение прогресса." },
      { title: "English Lesson — Click the Coin!", description: "Coin, points, timer, high‑score.", english: true },
    ],
  },
  {
    name: "Ноябрь — Сюжетные игры",
    lessons: [
      { title: "Диалоги", description: "UI, переключения сцен.", project: "Квест 1" },
      { title: "Переходы и кат‑сцены", description: "Скрипты и триггеры." },
      { title: "Инвентарь", description: "Хранение предметов." },
      { title: "English Lesson — Story time", description: "Dialog, quest, item, scene.", english: true },
    ],
  },
  {
    name: "Декабрь — Шутер сверху",
    lessons: [
      { title: "Стрельба и враги", description: "Спауны, паттерны атаки.", project: "Shooter 1" },
      { title: "Эффекты и здоровье", description: "Взрывы, HP бар." },
      { title: "Меню и уровни", description: "Выбор уровня, пауза." },
      { title: "English Lesson — Shoot & Win", description: "Enemy, bullet, health, pause.", english: true },
    ],
  },
  {
    name: "Январь — Боссы и AI",
    lessons: [
      { title: "FSM врагов", description: "Шаблоны поведения.", project: "Босс 1" },
      { title: "Коллизии и оптимизация", description: "Пулы объектов." },
      { title: "Таблица лидеров", description: "Локальные рекорды." },
      { title: "English Lesson — Boss fight", description: "Boss, attack, pattern, leader‑board.", english: true },
    ],
  },
  {
    name: "Февраль — Кооператив",
    lessons: [
      { title: "Локальный кооп", description: "Два игрока на одной клавиатуре.", project: "Кооп‑аркада" },
      { title: "Баланс и роли", description: "Разделение задач." },
      { title: "Tutorial‑уровень", description: "Обучение в игре." },
      { title: "English Lesson — Team up", description: "Co‑op, assist, revive, role.", english: true },
    ],
  },
  {
    name: "Март — Пазл‑платформер",
    lessons: [
      { title: "Механики пазлов", description: "Свичи, лифты, лазеры.", project: "Puzzle 1" },
      { title: "Физика и триггеры", description: "Press/hold, тайминги." },
      { title: "Сборка демо", description: "Связываем уровни." },
      { title: "English Lesson — Solve it!", description: "Puzzle, switch, laser, lift.", english: true },
    ],
  },
  {
    name: "Апрель — Полировка и публикация",
    lessons: [
      { title: "Арты и эффекты", description: "Пост‑эффекты, звук.", project: "Release 0.9" },
      { title: "Оптимизация", description: "Размеры ассетов, тайлы." },
      { title: "Экспорт HTML5", description: "Проверки и отладка." },
      { title: "English Lesson — Publish", description: "Build, export, publish, feedback.", english: true },
    ],
  },
  {
    name: "Май — Итоговый проект",
    lessons: [
      { title: "Итоговые задачи", description: "Бэклог, приоритеты.", project: "Версия 1.0" },
      { title: "Маркетинговые материалы", description: "Постер и трейлер." },
      { title: "Репетиция питча", description: "Демо‑день прогоны." },
      { title: "Demo Day (EN‑вставки)", description: "Защита и Q&A.", english: true, project: "Защита проекта" },
    ],
  },
];

// ──────────────────────────────────────────────────────────
// MOBILE APP LAB — 9–13 лет (полная программа)
const appLabProgram: Program = [
  {
    name: "Сентябрь — Вводный блок",
    lessons: [
      { title: "Интерфейс App Inventor", description: "Designer/Blocks, компоненты.", project: "Кликер «Тап‑тап»" },
      { title: "События и состояния", description: "onClick, таймер, флаги." },
      { title: "Хранилище", description: "TinyDB, сохранение счета." },
      { title: "English Lesson — My first app", description: "Button, screen, click, score.", english: true },
    ],
  },
  {
    name: "Октябрь — Сенсоры телефона",
    lessons: [
      { title: "Акселерометр", description: "Наклоны и тряска.", project: "Лабиринт‑шарик" },
      { title: "Локация и карта", description: "GPS, маркеры." },
      { title: "Камера и галерея", description: "Фото/галерея, предпросмотр." },
      { title: "English Lesson — Sensors", description: "Camera, GPS, map, shake.", english: true },
    ],
  },
  {
    name: "Ноябрь — Утилиты",
    lessons: [
      { title: "Заметки", description: "CRUD, поиск.", project: "Блокнот" },
      { title: "Конвертеры", description: "Переводы единиц, калькуляторы." },
      { title: "Голос и синтез", description: "Speech‑to‑text и TTS." },
      { title: "English Lesson — Tools", description: "Note, save, search, voice.", english: true },
    ],
  },
  {
    name: "Декабрь — Медиа",
    lessons: [
      { title: "Плеер", description: "Аудио/видео‑контролы.", project: "Медиа‑плеер" },
      { title: "Галерея", description: "Сетка изображений." },
      { title: "Обмен", description: "Sharing, экспорт/импорт." },
      { title: "English Lesson — Media app", description: "Play, pause, gallery, share.", english: true },
    ],
  },
  {
    name: "Январь — Мини‑игры",
    lessons: [
      { title: "Тап‑игра", description: "Счёт и таймер.", project: "Tap‑Game" },
      { title: "Реакция", description: "Случайности и тайминги." },
      { title: "Рейтинг", description: "Локальные рекорды." },
      { title: "English Lesson — Game time", description: "Tap, score, timer, record.", english: true },
    ],
  },
  {
    name: "Февраль — Сеть",
    lessons: [
      { title: "Web‑API", description: "GET/POST, JSON.", project: "Погода/курс" },
      { title: "Чат (мок)", description: "Простая имитация чата." },
      { title: "Push‑логика (эмуляция)", description: "Системные уведомления." },
      { title: "English Lesson — Online", description: "Server, request, data, message.", english: true },
    ],
  },
  {
    name: "Март — Дизайн и доступность",
    lessons: [
      { title: "UI‑системы", description: "Цвета, шрифты, сетки.", project: "UI Kit" },
      { title: "Анимация и жесты", description: "Плавности и свайпы." },
      { title: "A11y", description: "AltText, контраст, крупные элементы." },
      { title: "English Lesson — Better UI", description: "Layout, contrast, gesture.", english: true },
    ],
  },
  {
    name: "Апрель — Публикация",
    lessons: [
      { title: "Настройки проекта", description: "Иконка, версии, разрешения.", project: "APK сборка 0.9" },
      { title: "Тестирование", description: "Чек‑лист, ретест." },
      { title: "Промо", description: "Скриншоты, постер." },
      { title: "English Lesson — Publish", description: "Build, version, release.", english: true },
    ],
  },
  {
    name: "Май — Итоговый проект",
    lessons: [
      { title: "Выбор темы", description: "План‑бэклог, дедлайны.", project: "MVP" },
      { title: "Разработка", description: "Спринт: реализуем фичи." },
      { title: "Финал и тест", description: "Исправления, RC." },
      { title: "Demo Day (EN‑вставки)", description: "Защита и Q&A.", english: true, project: "Защита проекта" },
    ],
  },
];

// ──────────────────────────────────────────────────────────
// 3D‑ИНЖЕНЕР — 9–13 лет (полная программа)
const engineer3dProgram: Program = [
  {
    name: "Сентябрь — Blender старт + печать",
    lessons: [
      { title: "Интерфейс и навигация", description: "Объекты, модификаторы.", project: "Набор брелоков (печать)" },
      { title: "Моделирование примитивами", description: "Boolean, Bevel, Array." },
      { title: "Экспорт в STL", description: "Под печать: толщина, вылеты." },
      { title: "English Lesson — My first 3D", description: "Scale, rotate, export STL.", english: true },
    ],
  },
  {
    name: "Октябрь — Хард‑сёрфейс",
    lessons: [
      { title: "Корпуса и детали", description: "Точность, миллиметры.", project: "Корпус для мелочи" },
      { title: "Стыковки/пазы", description: "Шип‑паз, допуски." },
      { title: "Сборка", description: "Parenting, раздельные детали." },
      { title: "English Lesson — Hard surface", description: "Measure, fit, tolerance.", english: true },
    ],
  },
  {
    name: "Ноябрь — Low‑poly персонаж",
    lessons: [
      { title: "Блокинг", description: "Пропорции и формы.", project: "Low‑poly персонаж" },
      { title: "UV и материалы", description: "Развёртки и текстуры." },
      { title: "Rig (basic) и позы", description: "Armature, простые позы." },
      { title: "English Lesson — Character", description: "UV, texture, rig, pose.", english: true },
    ],
  },
  {
    name: "Декабрь — Анимация",
    lessons: [
      { title: "Ключи анимации", description: "Dope Sheet, Graph Editor.", project: "Цикл ходьбы" },
      { title: "Камеры и рендер", description: "Eevee/Cycles настройки." },
      { title: "Монтаж клипа", description: "Sequencer, экспорт видео." },
      { title: "English Lesson — Animate", description: "Keyframe, render, camera.", english: true },
    ],
  },
  {
    name: "Январь — Игровой пропс",
    lessons: [
      { title: "Моделирование пропса", description: "Гайдлайны для игр.", project: "Игровой предмет" },
      { title: "Bake & текстуры", description: "Normal, AO, Roughness." },
      { title: "Экспорт в Unity", description: "FBX, скейл, материалы." },
      { title: "English Lesson — Game asset", description: "Bake, normal map, import.", english: true },
    ],
  },
  {
    name: "Февраль — Печать деталей",
    lessons: [
      { title: "Под резьбу/винты", description: "Диаметры, припуски.", project: "Крепёж‑детали" },
      { title: "Сборка после печати", description: "Комбинирование деталей." },
      { title: "Уход за принтером", description: "Подложки/температуры." },
      { title: "English Lesson — 3D printing", description: "Layer, nozzle, support.", english: true },
    ],
  },
  {
    name: "Март — Сцена и освещение",
    lessons: [
      { title: "Кинематографический свет", description: "HDRI/Area/Spot.", project: "Рендер‑сцена" },
      { title: "Материалы и ноды", description: "Основы Shader Editor." },
      { title: "Композиция кадра", description: "Правила/сет‑дрессинг." },
      { title: "English Lesson — Lighting", description: "Light, shadow, HDRI, shader.", english: true },
    ],
  },
  {
    name: "Апрель — Полировка",
    lessons: [
      { title: "Чистка мешей", description: "Топология, оптимизация.", project: "Готовый паκ ассетов" },
      { title: "Импорт в движок", description: "Unity сцена/материалы." },
      { title: "Презентация", description: "Превью/постеры/видео." },
      { title: "English Lesson — Present", description: "Preview, poster, showcase.", english: true },
    ],
  },
  {
    name: "Май — Итог",
    lessons: [
      { title: "Выбор темы", description: "Планирование финала.", project: "MVP модель/анимация" },
      { title: "Производство", description: "Спринт 1 — выполнение." },
      { title: "Финализация", description: "Спринт 2 — полировка." },
      { title: "Demo Day (EN‑вставки)", description: "Защита портфолио.", english: true, project: "Защита проекта" },
    ],
  },
];

// ──────────────────────────────────────────────────────────
// Пустые (заполним на следующем шаге)
const empty: Program = [];

// ──────────────────────────────────────────────────────────
// Экспорт программ по id курса (должны совпадать с courses.ts)
export const programs: Record<string, Program> = {
  // 3–6
  kids36: empty, // англ. отдельно, здесь программа курсов мы объединили — добавим позже

  // 7–10
  jrRobotics: empty,         // трек на 3 года — сгенерю по твоей схеме
  "3dMaster": empty,
  scratchGames: empty,
  minecraftCode: empty,
  digitalHeroes: empty,

  // 9–13
  dds: empty,
  videoLab: empty,
  "3dEngineer": engineer3dProgram,
  techLabRobotics: empty,
  game2d: game2dProgram,
  appLab: appLabProgram,
  roblox: robloxProgram,

  // 14–17
  "3dPro": empty,
  roboticsPro: empty,
  unity: empty,
  unreal: empty,
  aiDev: empty,
};

// Хелпер для UI
export function getProgramByCourseId(id: string): Program {
  return programs[id] ?? [];
}
