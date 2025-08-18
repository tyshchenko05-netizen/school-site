import { useMemo, useState, useEffect } from "react";

/** Возраст → Категория → Курсы (с UI, модалкой, формой, ценой и «Спасибо») */
export default function EnrollPage() {
  type Age = "3-6" | "7-10" | "9-13" | "14-17";
  type Cat = "3D" | "Robotics" | "Coding";

  const [age, setAge] = useState<Age | null>(null);
  const [cat, setCat] = useState<Cat | null>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Course | null>(null);

  // форма
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const brand = {
    grad: "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800",
    accentText: "text-yellow-300",
    accentBg: "bg-yellow-300 text-purple-900",
    ring: "ring-2 ring-yellow-300",
  };

  const ages = [
    { id: "3-6", label: "3–6 лет", emoji: "👶" },
    { id: "7-10", label: "7–10 лет", emoji: "🧒" },
    { id: "9-13", label: "9–13 лет", emoji: "🧑" },
    { id: "14-17", label: "14–17 лет", emoji: "🎓" },
  ] as const;

  const cats = [
    { id: "3D", label: "3D и творчество", emoji: "🎨" },
    { id: "Robotics", label: "Робототехника", emoji: "🤖" },
    { id: "Coding", label: "Программирование", emoji: "💻" },
  ] as const;

  const catalog = useMemo(() => makeCatalog(), []);
  const list = age && cat ? (catalog[age]?.[cat] ?? []) : [];

  // ВСЕ курсы выбранного возраста (для "второго направления")
  const allAgeCourses = useMemo(() => {
    if (!age) return [] as string[];
    const groups = catalog[age]; // Record<Cat, Course[]>
    const titles = ([] as string[]).concat(
      ...(Object.values(groups).map(arr => arr.map(c => c.title)))
    );
    return titles;
  }, [age, catalog]);

  useEffect(() => {
    console.assert(catalog["7-10"].Coding.some(c => c.title === "Игры в Scratch"), "[Test] есть курс Scratch");
  }, [catalog]);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO / Акции */}
      <section className={`${brand.grad} text-white`}>
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Подбор курса и запись
          </h1>
          <p className="mt-3 text-white/90">
            1–2 раза в неделю по 2 часа • 9 месяцев • группы по возрастам.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
              <div className="text-sm opacity-90">Ранняя цена до сентября</div>
              <div className={`text-2xl font-bold ${brand.accentText}`}>4 400 ₽ / месяц</div>
              <div className="text-xs opacity-80">Оплата помесячно</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
              <div className="text-sm opacity-90">Акции</div>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Второе направление — <b>-50%</b></li>
                <li>• Второй ребёнок — <b>-50%</b></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
              <div className="text-sm opacity-90">Организация</div>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Расписание после набора группы</li>
                <li>• С сентября — английский в конце модуля</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Шаги */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {/* Шаг 1 — возраст */}
        {!age && (
          <section>
            <h2 className="text-xl font-bold mb-4">1) Выберите возраст</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ages.map(a => (
                <div key={a.id} className={`rounded-2xl border p-4 bg-white hover:shadow-xl transition ${brand.ring}`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${brand.grad} ${brand.accentText}`}>{a.emoji}</div>
                    <div className="font-semibold">{a.label}</div>
                  </div>
                  <button
                    className="mt-3 w-full px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                    onClick={() => setAge(a.id as Age)}
                  >
                    Выбрать
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Шаг 2 — направление */}
        {age && !cat && (
          <section>
            <div className="mb-3 flex items-center gap-2">
              <button className="text-sm underline" onClick={() => setAge(null)}>← изменить возраст</button>
              <span className="text-sm text-gray-500">Выбрано: {ages.find(a=>a.id===age)?.label}</span>
            </div>
            <h2 className="text-xl font-bold mb-4">2) Выберите направление</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cats.map(c => (
                <div key={c.id} className={`rounded-2xl border p-4 bg-white hover:shadow-xl transition ${brand.ring}`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${brand.grad} ${brand.accentText}`}>{c.emoji}</div>
                    <div className="font-semibold">{c.label}</div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {c.id==="3D" && "Дизайн, 3D-модели, печать, VR"}
                    {c.id==="Robotics" && "LEGO/Arduino, пайка, дроны"}
                    {c.id==="Coding" && "Игры, приложения, Python/Lua"}
                  </p>
                  <button
                    className="mt-3 w-full px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                    onClick={() => setCat(c.id as Cat)}
                  >
                    Далее
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Шаг 3 — курсы */}
        {age && cat && (
          <section className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <button className="text-sm underline" onClick={() => setCat(null)}>← изменить направление</button>
              <span className="text-sm text-gray-500">
                Возраст: {ages.find(a=>a.id===age)?.label} • Направление: {cats.find(c=>c.id===cat)?.label}
              </span>
            </div>

            <h2 className="text-xl font-bold">3) Выберите курс</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.map((c) => (
                <div key={c.title} className="rounded-2xl border bg-white p-4 hover:shadow-xl transition">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${brand.grad} ${brand.accentText}`}>⭐</div>
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <div className="text-sm text-gray-500">{c.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">{c.desc}</p>
                  <ul className="text-xs text-gray-500 mt-2 list-disc pl-5">
                    <li>9 месяцев • 36 занятий по 2 часа</li>
                    <li>Ранняя цена: <b>4 400 ₽ / месяц</b></li>
                    <li>Второе направление — <b>-50%</b></li>
                    <li>Второй ребёнок — <b>-50%</b></li>
                  </ul>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      className="px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                      onClick={() => { setSelected(c); setOpen(true); }}
                    >
                      Подробнее
                    </button>
                    <button
                      className="px-3 py-2 rounded-md border hover:bg-gray-50"
                      onClick={() => { setSelected(c); setOpen(true); }}
                    >
                      Выбрать курс
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ===== Модалка курса (описание) ===== */}
      {open && selected && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl rounded-2xl border bg-white shadow-2xl">
              <div className="p-4 border-b flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">{selected.title}</div>
                  <div className="text-sm text-gray-500">{selected.subtitle}</div>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(false)}>✕</button>
              </div>

              <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" }}>
                <p className="text-sm leading-relaxed">{selected.desc}</p>

                {selected.program && (
                  <div className="rounded-xl border p-4">
                    <p className="font-medium mb-2">Программа на 9 месяцев</p>
                    <ol className="space-y-2 text-sm list-decimal pl-5">
                      {selected.program.map((row, i) => (
                        <li key={i}><b>{row.month}:</b> {row.topic}</li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="rounded-xl border p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                  <div className="font-semibold">4 400 ₽ / месяц <span className="text-sm text-gray-500">(до сентября)</span></div>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Второе направление — 50%</li>
                    <li>• Второй ребёнок — 50%</li>
                    <li>• Расписание после набора</li>
                    <li>• С сентября — английский в конце модуля</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border-t flex gap-2 justify-end">
                <button
                  className="px-4 py-2 rounded-md border hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Закрыть
                </button>
                <button
                  className="px-4 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                  onClick={() => { setOpen(false); setShowForm(true); }}
                >
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== ФОРМА ЗАПИСИ (модалка с прокруткой на мобилках) ===== */}
      {showForm && !formSubmitted && selected && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50" onClick={()=>setShowForm(false)} />
            <div
              className="relative w-full max-w-2xl rounded-2xl border bg-white shadow-2xl max-h-[85vh] overflow-y-auto"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
                <div>
                  <div className="text-lg font-semibold">Запись на курс</div>
                  <div className="text-sm text-gray-500">{selected.title} — {selected.subtitle}</div>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-100" onClick={()=>setShowForm(false)}>✕</button>
              </div>

              <FormBlock
                selectedTitle={selected.title}
                allSecondOptions={allAgeCourses.filter(t => t !== selected.title)}
                ageLabel={ages.find(a=>a.id===age!)?.label || ""}
                catLabel={cats.find(c=>c.id===cat!)?.label || ""}
                onCancel={()=>setShowForm(false)}
                onSubmitSuccess={()=>setFormSubmitted(true)}
              />
              <div className="h-4 md:h-6" /> {/* небольшой нижний отступ */}
            </div>
          </div>
        </div>
      )}

      {/* ===== СПАСИБО ===== */}
      {showForm && formSubmitted && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-md rounded-2xl border bg-white shadow-2xl p-6 text-center">
              <div className="text-3xl">🎉</div>
              <h3 className="text-xl font-bold mt-2">Спасибо за заявку!</h3>
              <p className="text-sm text-gray-600 mt-2">
                Мы свяжемся с вами в течение одного рабочего дня, чтобы подтвердить запись и согласовать расписание.
              </p>
              <div className="mt-4 flex gap-2 justify-center">
                <button className="px-4 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                        onClick={() => { setFormSubmitted(false); setShowForm(false); }}>
                  Вернуться к курсам
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Компонент формы ---------- */
function FormBlock({
  selectedTitle,
  allSecondOptions,
  ageLabel,
  catLabel,
  onCancel,
  onSubmitSuccess,
}: {
  selectedTitle: string;
  allSecondOptions: string[];
  ageLabel: string;
  catLabel: string;
  onCancel: () => void;
  onSubmitSuccess: () => void;
}) {
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [timePref, setTimePref] = useState("");
  const [secondCourse, setSecondCourse] = useState("");
  const [secondChild, setSecondChild] = useState(false);
  const [loading, setLoading] = useState(false);

  const BASE = 4400;
  // правило: скидки НЕ суммируются
  const TOTAL = secondChild
    ? Math.round(BASE * 0.5)                         // второй ребёнок -50%
    : BASE + (secondCourse ? Math.round(BASE * 0.5) : 0); // второе направление -50%

  const breakdown = secondChild
    ? [{ label: "Скидка 50% (второй ребёнок)", amount: Math.round(BASE * 0.5) }]
    : [
        { label: "Основной курс", amount: BASE },
        ...(secondCourse ? [{ label: "Второе направление (-50%)", amount: Math.round(BASE * 0.5) }] : []),
      ];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const norm = (s: string) => s.replace(/\s+/g, " ").trim();
    const req = {
      "ФИО родителя": norm(parentName),
      "Телефон": norm(phone),
      "E-mail": norm(email),
      "Имя ребёнка": norm(childName),
      "Предпочтительное время": norm(timePref),
    };
    const missing = Object.entries(req).filter(([,v]) => v === "").map(([k]) => k);
    if (missing.length) {
      alert("Заполните обязательные поля: " + missing.join(", "));
      return;
    }

    try {
      setLoading(true);
      const payload = {
        course: selectedTitle,
        age: ageLabel,
        category: catLabel,
        parentName: req["ФИО родителя"],
        phone: req["Телефон"],
        email: req["E-mail"],
        childName: req["Имя ребёнка"],
        timePref: req["Предпочтительное время"],
        secondCourse: norm(secondCourse || "—"),
        secondChild,
        pricePerMonth: TOTAL,
      };
      const r = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(payload),
      });
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || "send failed");
      onSubmitSuccess();
    } catch (err:any) {
      alert("Не удалось отправить заявку: " + (err?.message || "ошибка сети"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="p-4 space-y-4" onSubmit={submit}>
      <div className="rounded-xl border p-3 bg-gray-50">
        <div className="text-sm text-gray-600">
          Вы выбрали: <b>{selectedTitle}</b> • {ageLabel} • {catLabel}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Field label="ФИО родителя *" value={parentName} onChange={setParentName} />
        <Field label="Телефон *" value={phone} onChange={setPhone} placeholder="+7" />
        <Field label="E-mail *" value={email} onChange={setEmail} />
        <Field label="Имя ребёнка *" value={childName} onChange={setChildName} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Select
          label="Предпочтительное время *"
          value={timePref}
          onChange={setTimePref}
          options={["Будни утро","Будни вечер","Выходные утро","Выходные вечер"]}
        />
        <Select
          label="Второе направление (-50%)"
          value={secondCourse}
          onChange={setSecondCourse}
          options={allSecondOptions}
          disabled={secondChild}
          placeholder="— не выбрано —"
        />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={secondChild}
          onChange={(e) => {
            const v = e.target.checked;
            setSecondChild(v);
            if (v) setSecondCourse("");
          }}
        />
        <span>Второй ребёнок (-50%)</span>
      </label>
      <p className="text-xs text-gray-500">
        Скидки не суммируются: либо «второй ребёнок −50%», либо «второе направление −50%».
      </p>

      <div className="rounded-xl border p-3">
        <div className="text-sm">Стоимость к оплате за месяц</div>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {breakdown.map((r, i) => (
                <tr key={i} className={i>0 ? "border-t" : ""}>
                  <td className="py-1 pr-2 text-gray-600">{r.label}</td>
                  <td className="py-1 font-medium">{r.amount.toLocaleString("ru-RU")} ₽</td>
                </tr>
              ))}
              <tr className="border-t">
                <td className="py-2 pr-2 font-semibold">Итого</td>
                <td className="py-2 font-bold">{TOTAL.toLocaleString("ru-RU")} ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 pb-[calc(env(safe-area-inset-bottom,0)+8px)]">
        <button type="button" className="px-4 py-2 rounded-md border hover:bg-gray-50" onClick={onCancel}>
          Отмена
        </button>
        <button type="submit" disabled={loading}
          className="px-4 py-2 rounded-md bg-gray-900 text-white hover:opacity-90 disabled:opacity-60">
          {loading ? "Отправляем..." : "Отправить заявку"}
        </button>
      </div>
    </form>
  );
}

/* маленькие UI-помощники */
function Field({
  label, value, onChange, placeholder="",
}:{
  label:string; value:string; onChange:(v:string)=>void; placeholder?:string;
}) {
  const isEmail = /email/i.test(label);
  const isRequired = /\*/.test(label);
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}</span>
      <input
        className="mt-1 w-full rounded-md border p-2"
        value={value}
        onChange={e=>onChange(e.target.value)}
        placeholder={placeholder}
        type={isEmail ? "email" : "text"}
        required={isRequired}
      />
    </label>
  );
}

function Select({
  label, value, onChange, options, disabled=false, placeholder="— выберите —",
}:{
  label:string; value:string; onChange:(v:string)=>void; options:string[]; disabled?:boolean; placeholder?:string;
}) {
  const isRequired = /\*/.test(label);
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}</span>
      <select
        className="mt-1 w-full rounded-md border p-2 disabled:bg-gray-100"
        value={value}
        onChange={e=>{
          const v = e.target.value.replace(/\s+/g, " ").trim();
          onChange(v);
        }}
        disabled={disabled}
        required={isRequired}
      >
        {/* явный плейсхолдер со значением "" */}
        <option value="">{placeholder}</option>
        {options.map(o => {
          const v = (o ?? "").toString();
          return <option key={v || "none"} value={v}>{v || "—"}</option>;
        })}
      </select>
    </label>
  );
}

/* ---------- данные ---------- */
type Course = {
  title: string;
  subtitle: string;
  desc: string;
  program?: { month: string; topic: string }[];
};

function makeCatalog(): Record<
  "3-6" | "7-10" | "9-13" | "14-17",
  Record<"3D" | "Robotics" | "Coding", Course[]>
> {
  return {
    "3-6": {
      "3D": [
        { title: "Первые шаги в кодинге", subtitle: "ScratchJr + LEGO WeDo", desc: "Интерактивные истории и простые роботы." },
      ],
      "Robotics": [
        { title: "LEGO WeDo Starter", subtitle: "Конструирование и датчики", desc: "Собираем роботов-зверят и запускаем их." },
      ],
      "Coding": [
        { title: "ScratchJr Истории", subtitle: "Первые программы", desc: "Движение, звук, простые реакции." },
      ],
    },
    "7-10": {
      "3D": [
        { title: "3D-Мастер", subtitle: "Tinkercad • 3D-печать", desc: "Моделируем и печатаем изделия, VR-просмотр." },
      ],
      "Robotics": [
        { title: "Junior Robotics", subtitle: "LEGO SPIKE/EV3 • Arduino", desc: "Роботы, сенсоры и базовая пайка." },
      ],
      "Coding": [
        {
          title: "Игры в Scratch",
          subtitle: "Спрайты, уровни, эффекты",
          desc: "Делаем мини-игры, учимся логике, анимации и тестированию.",
          program: [
            { month: "Сентябрь", topic: "Введение, спрайты, сцены, события" },
            { month: "Октябрь", topic: "Движение, столкновения, таймеры" },
            { month: "Ноябрь", topic: "Очки, уровни, хранение прогресса" },
            { month: "Декабрь", topic: "Анимация персонажей, звуки, UI" },
            { month: "Январь", topic: "Жанры: платформер, аркада" },
            { month: "Февраль", topic: "Квесты и задачи" },
            { month: "Март", topic: "Баланс и плейтесты" },
            { month: "Апрель", topic: "Полировка и публикация" },
            { month: "Май", topic: "Показ родителям" },
          ],
        },
        { title: "Minecraft с кодом", subtitle: "MakeCode / Python", desc: "Квесты и автоматизация построек." },
        { title: "Цифровые супергерои", subtitle: "ПК + Word/Excel/PowerPoint", desc: "Компьютерная грамотность и безопасность." },
      ],
    },
    "9-13": {
      "3D": [
        { title: "Digital Design Studio", subtitle: "Figma • графика", desc: "Афиши, персонажи, макеты UI." },
        { title: "3D-Инженер", subtitle: "Blender • печать", desc: "Модели для печати и анимация." },
      ],
      "Robotics": [
        { title: "TechLab Robotics", subtitle: "Arduino • пайка • дроны", desc: "Прототипы и полёты по коду." },
      ],
      "Coding": [
        { title: "2D Game Lab", subtitle: "Construct 3", desc: "Полноценные 2D-игры и публикация." },
        { title: "Mobile App Lab", subtitle: "MIT App Inventor", desc: "Android-приложения и датчики." },
        { title: "Roblox Studio", subtitle: "Lua-скрипты", desc: "Миры и механики на Lua." },
      ],
    },
    "14-17": {
      "3D": [
        { title: "3D PRO", subtitle: "Blender • Unity", desc: "Игровые модели и экспорт в движки." },
      ],
      "Robotics": [
        { title: "Robotics PRO", subtitle: "Arduino PRO • IoT", desc: "Умные устройства и автономные роботы." },
      ],
      "Coding": [
        { title: "Unity / Unreal PRO", subtitle: "C# / Blueprint", desc: "2D/3D-игры и публикация." },
        { title: "ИИ-Разработчик", subtitle: "Python + нейросети", desc: "CV, NLP и генерация контента." },
        { title: "Этичный хакинг", subtitle: "Кибербезопасность", desc: "Сети, уязвимости, secure-dev." },
      ],
    },
  };
}
