// pages/enroll.tsx
import { useMemo, useState, useEffect } from "react";

/** Возраст → (для 3–6 сразу курсы) → или Направление → Курсы (модалка + форма) */
export default function EnrollPage() {
  type Age = "3-6" | "7-10" | "9-13" | "14-17";
  type Cat = "3D" | "Robotics" | "Coding";

  const [age, setAge] = useState<Age | null>(null);
  const [cat, setCat] = useState<Cat | null>(null);

  // модалка «Подробнее»
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
  const isEarlyAge = age === "3-6";

  // Список курсов к показу
  const list: Course[] = useMemo(() => {
    if (!age) return [];
    if (age === "3-6") {
      const groups = catalog["3-6"];
      return Object.values(groups).flat();
    }
    return cat ? (catalog[age]?.[cat] ?? []) : [];
  }, [age, cat, catalog]);

  // ВСЕ курсы выбранного возраста (для «второго направления» в форме)
  const allAgeCourses = useMemo(() => {
    if (!age) return [] as string[];
    const groups = catalog[age]; // Record<Cat, Course[]>
    const titles = ([] as string[]).concat(
      ...(Object.values(groups).map(arr => arr.map(c => c.title)))
    );
    return titles;
  }, [age, catalog]);

  useEffect(() => {
    console.assert(
      catalog["7-10"].Coding.some(c => c.title === "Игры в Scratch"),
      "[Test] есть курс Scratch"
    );
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
                <div
                  key={a.id}
                  className={`rounded-2xl border p-4 bg-white hover:shadow-xl transition ${brand.ring}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${brand.grad} ${brand.accentText}`}>{a.emoji}</div>
                    <div className="font-semibold">{a.label}</div>
                  </div>
                  <button
                    className="mt-3 w-full px-3 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                    onClick={() => {
                      setAge(a.id as Age);
                      setCat(null);
                    }}
                  >
                    Выбрать
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Шаг 2 — направление (СКРЫТО для 3–6 лет) */}
        {age && !isEarlyAge && !cat && (
          <section>
            <div className="mb-3 flex items-center gap-2">
              <button className="text-sm underline" onClick={() => setAge(null)}>← изменить возраст</button>
              <span className="text-sm text-gray-500">Выбрано: {ages.find(a=>a.id===age)?.label}</span>
            </div>
            <h2 className="text-xl font-bold mb-4">2) Выберите направление</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cats.map(c => (
                <div
                  key={c.id}
                  className={`rounded-2xl border p-4 bg-white hover:shadow-xl transition ${brand.ring}`}
                >
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
        {age && (isEarlyAge || cat) && (
          <section className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              {isEarlyAge ? (
                <button className="text-sm underline" onClick={() => setAge(null)}>← изменить возраст</button>
              ) : (
                <>
                  <button className="text-sm underline" onClick={() => setCat(null)}>← изменить направление</button>
                  <span className="text-sm text-gray-500">
                    Возраст: {ages.find(a=>a.id===age)?.label} • Направление: {cats.find(c=>c.id===cat)?.label}
                  </span>
                </>
              )}
            </div>

            <h2 className="text-xl font-bold">
              {isEarlyAge ? "2) Выберите курс" : "3) Выберите курс"}
            </h2>

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
                      onClick={() => { setSelected(c); setShowForm(true); }}
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

      {/* ===== Модалка курса (описание: модули/уроки) ===== */}
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
                  <div className="space-y-8">
                    {selected.program.map((m, i) => (
                      <section key={i}>
                        <h3 className="text-xl font-bold mb-2">{m.name}</h3>
                        <ul className="mt-2 space-y-2">
                          {m.lessons.map((l, j) => (
                            <li
                              key={j}
                              className={`p-3 rounded ${
                                l.english ? "bg-yellow-50 border border-yellow-200" : "bg-gray-50"
                              }`}
                            >
                              <div className="font-semibold">
                                {l.title}{l.english ? " · English" : ""}
                              </div>
                              {l.description && (
                                <div className="text-sm text-gray-600">{l.description}</div>
                              )}
                              {l.project && (
                                <div className="text-sm mt-1">Проект: <b>{l.project}</b></div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
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

      {/* ===== ФОРМА ЗАПИСИ ===== */}
      {showForm && !formSubmitted && selected && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
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
                catLabel={isEarlyAge ? "Общее направление" : (cats.find(c=>c.id===cat!)?.label || "")}
                onCancel={()=>setShowForm(false)}
                onSubmitSuccess={()=>setFormSubmitted(true)}
              />
              <div className="h-4 md:h-6" />
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
                <button
                  className="px-4 py-2 rounded-md bg-gray-900 text-white hover:opacity-90"
                  onClick={() => { setFormSubmitted(false); setShowForm(false); }}
                >
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
        <button
          type="submit"
          disabled={loading}
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
        <option value="">{placeholder}</option>
        {options.map(o => {
          const v = (o ?? "").toString();
          return <option key={v || "none"} value={v}>{v || "—"}</option>;
        })}
      </select>
    </label>
  );
}

/* ---------- типы для «красивой» программы ---------- */
type Lesson = {
  title: string;
  description?: string;
  project?: string;
  english?: boolean;
};

type ModuleBlock = {
  name: string;
  lessons: Lesson[];
};

type Course = {
  title: string;
  subtitle: string;
  desc: string;
  program?: ModuleBlock[];
};

/* ---------- ДАННЫЕ: Полные программы на 9 месяцев (каждый 4-й урок — English) ---------- */
function makeCatalog(): Record<
  "3-6" | "7-10" | "9-13" | "14-17",
  Record<"3D" | "Robotics" | "Coding", Course[]>
> {
  return {
    /* ======================= 3–6 лет — единый курс Early Lab ======================= */
    "3-6": {
      "3D": [
        {
          title: "Early Lab",
          subtitle: "ScratchJr • LEGO WeDo • Творчество",
          desc:
            "Общее направление для малышей: простые программы, первые роботы и творческие проекты. " +
            "Важно: КАЖДУЮ НЕДЕЛЮ — отдельный урок английского языка (игровая лексика по теме месяца).",
          program: [
            {
              name: "Сентябрь — Первые шаги",
              lessons: [
                { title: "Знакомство со ScratchJr", description: "Анимация героя и сцены." },
                { title: "LEGO: зверёк с датчиком", description: "Сборка и запуск." },
                { title: "Творчество: бумажный герой + запись голоса" },
                { title: "English: Colors & Actions", english: true, description: "red, blue, jump, run." },
              ],
            },
            {
              name: "Октябрь — Истории и транспорт",
              lessons: [
                { title: "История из 3 сцен в ScratchJr", description: "Сюжет и переходы." },
                { title: "LEGO: машинка", description: "Движение и управление." },
                { title: "Творчество: гараж/дорога" },
                { title: "English: Family & Vehicles", english: true, description: "car, bus, stop, go." },
              ],
            },
            {
              name: "Ноябрь — Мир животных",
              lessons: [
                { title: "ScratchJr: анимация животных" },
                { title: "LEGO: динозавр/кот/собака" },
                { title: "Творчество: фон «джунгли»" },
                { title: "English: Animals", english: true, description: "lion, cat, dog, roar." },
              ],
            },
            {
              name: "Декабрь — Праздники",
              lessons: [
                { title: "ScratchJr: открытка‑анимация" },
                { title: "LEGO: санки/ёлка‑механизм" },
                { title: "Творчество: украшения" },
                { title: "English: Holidays", english: true, description: "gift, snow, tree, star." },
              ],
            },
            {
              name: "Январь — Зима и спорт",
              lessons: [
                { title: "ScratchJr: зимняя сцена" },
                { title: "LEGO: снегоуборщик" },
                { title: "Творчество: маска спортсмена" },
                { title: "English: Winter & Sport", english: true, description: "snow, skate, ski." },
              ],
            },
            {
              name: "Февраль — Космос",
              lessons: [
                { title: "ScratchJr: ракета и планеты" },
                { title: "LEGO: марсоход" },
                { title: "Творчество: шлем и пульт" },
                { title: "English: Space", english: true, description: "rocket, star, planet." },
              ],
            },
            {
              name: "Март — Весна и природа",
              lessons: [
                { title: "ScratchJr: цветы растут" },
                { title: "LEGO: поливочный механизм" },
                { title: "Творчество: сад на бумаге" },
                { title: "English: Spring", english: true, description: "flower, grow, sun, rain." },
              ],
            },
            {
              name: "Апрель — Город",
              lessons: [
                { title: "ScratchJr: светофор и переход" },
                { title: "LEGO: подъемный шлагбаум" },
                { title: "Творчество: макет улицы" },
                { title: "English: City", english: true, description: "road, stop, cross." },
              ],
            },
            {
              name: "Май — Большой проект",
              lessons: [
                { title: "Замысел: сцены и герои" },
                { title: "LEGO‑механизм для проекта" },
                { title: "Сборка и репетиция показа" },
                { title: "English: Show & Tell", english: true, description: "present, project." },
              ],
            },
          ],
        },
      ],
      "Robotics": [],
      "Coding": [],
    },

    /* ======================= 7–10 лет ======================= */
    "7-10": {
      "3D": [
        {
          title: "3D‑Мастер",
          subtitle: "Tinkercad • 3D‑печать • VR",
          desc: "Моделируем в Tinkercad, готовим к печати, проверяем модели в VR. Итог — мини‑коллекция и печать лучших работ.",
          program: [
            { name: "Сентябрь — Основы 3D", lessons: [
              { title: "Интерфейс, примитивы" },
              { title: "Комбинации и вычитание форм" },
              { title: "Подготовка к печати (STL)" },
              { title: "English: 3D Shapes", english: true, description: "cube, sphere, scale, rotate." },
            ]},
            { name: "Октябрь — Персональные вещи", lessons: [
              { title: "Брелок‑имя (экструдирование)" },
              { title: "Бирка/жетон", project: "Печать набора из 2‑3 работ." },
              { title: "VR‑просмотр моделей" },
              { title: "English: Print Preview", english: true },
            ]},
            { name: "Ноябрь — Дом и интерьер", lessons: [
              { title: "Проектирование домика" },
              { title: "Мебель из блоков" },
              { title: "Экспорт и толщина стенок" },
              { title: "English: Room & Furniture", english: true },
            ]},
            { name: "Декабрь — Подарки", lessons: [
              { title: "Фигурка‑талисман" },
              { title: "Украшение/елочная игрушка" },
              { title: "Подготовка к печати" },
              { title: "English: Ornament", english: true },
            ]},
            { name: "Январь — Техника", lessons: [
              { title: "Корпус гаджета/держатель" },
              { title: "Крепеж и зазоры" },
              { title: "Сборка из нескольких деталей" },
              { title: "English: Mount & Case", english: true },
            ]},
            { name: "Февраль — Транспорт", lessons: [
              { title: "Шасси и колёса" },
              { title: "Декор и логотип" },
              { title: "Слайсер, поддержка" },
              { title: "English: Wheels & Axle", english: true },
            ]},
            { name: "Март — Герои и значки", lessons: [
              { title: "Эмблема/значок" },
              { title: "Маска героя" },
              { title: "VR‑сцена с моделью" },
              { title: "English: Mask & Badge", english: true },
            ]},
            { name: "Апрель — Свой набор", lessons: [
              { title: "3–4 предмета мини‑коллекции" },
              { title: "Упаковка/лист описания" },
              { title: "Печать лучших моделей" },
              { title: "English: Showcase", english: true },
            ]},
            { name: "Май — Презентация", lessons: [
              { title: "Фото/рендер работ" },
              { title: "Презентация родителям" },
              { title: "Коррекция моделей" },
              { title: "English: Presentation", english: true },
            ]},
          ],
        },
      ],
      "Robotics": [
        {
          title: "Junior Robotics (Год 1 из 3)",
          subtitle: "LEGO SPIKE/EV3 • Arduino basics",
          desc: "Механизмы, датчики, первые схемы. Базовая пайка во второй половине года. Итог — демонстрация роботов.",
          program: [
            { name: "Сентябрь — Механика", lessons: [
              { title: "Передачи и рычаги (LEGO)" },
              { title: "Шасси и устойчивость" },
              { title: "Два типа приводов" },
              { title: "English: Gears & Axles", english: true },
            ]},
            { name: "Октябрь — Датчики", lessons: [
              { title: "Касание/расстояние" },
              { title: "Свет/цвет" },
              { title: "Простая логика реакции" },
              { title: "English: Sensor", english: true },
            ]},
            { name: "Ноябрь — Программы", lessons: [
              { title: "Блок‑программирование" },
              { title: "События и циклы" },
              { title: "Калибровка датчиков" },
              { title: "English: Program", english: true },
            ]},
            { name: "Декабрь — Мини‑соревнование", lessons: [
              { title: "Линия/лабиринт" },
              { title: "Командная стратегия" },
              { title: "Тест и улучшение" },
              { title: "English: Challenge", english: true },
            ]},
            { name: "Январь — Переход к Arduino", lessons: [
              { title: "Макетная плата, LED" },
              { title: "Кнопка и резистор" },
              { title: "PWM и сервопривод" },
              { title: "English: Breadboard", english: true },
            ]},
            { name: "Февраль — Сигналы и звук", lessons: [
              { title: "Пьезо‑зуммер" },
              { title: "Фоторезистор" },
              { title: "Температура/влажность" },
              { title: "English: Sensor Data", english: true },
            ]},
            { name: "Март — Пайка (вводная)", lessons: [
              { title: "Техника пайки" },
              { title: "Сборка простой платы" },
              { title: "Безопасность" },
              { title: "English: Soldering", english: true },
            ]},
            { name: "Апрель — Робопроект", lessons: [
              { title: "Концепт и сборка" },
              { title: "Код и отладка" },
              { title: "Корпус/крепления" },
              { title: "English: Prototype", english: true },
            ]},
            { name: "Май — Показ", lessons: [
              { title: "Доработка" },
              { title: "Презентация" },
              { title: "Репетиция и показ" },
              { title: "English: Show & Tell", english: true },
            ]},
          ],
        },
      ],
      "Coding": [
        {
          title: "Игры в Scratch",
          subtitle: "Спрайты, уровни, эффекты",
          desc: "9 месяцев — 9 мини‑проектов разных жанров. Каждый 4‑й урок — English.",
          program: [
            { name: "Сентябрь — Старт", lessons: [
              { title: "Интерфейс, спрайты, сцены" },
              { title: "События и управление" },
              { title: "Баланс и таймер" },
              { title: "English: Game Basics", english: true },
            ]},
            { name: "Октябрь — Платформер", lessons: [
              { title: "Гравитация, прыжок" },
              { title: "Враги/ловушки" },
              { title: "UI и очки" },
              { title: "English: Level/Score", english: true },
            ]},
            { name: "Ноябрь — Кликер", lessons: [
              { title: "Счётчик и апгрейды" },
              { title: "События по времени" },
              { title: "Сохранение переменных" },
              { title: "English: Upgrade", english: true },
            ]},
            { name: "Декабрь — Гонки", lessons: [
              { title: "Траектории/скорость" },
              { title: "Соперники/AI" },
              { title: "Финиш/круги" },
              { title: "English: Lap/Finish", english: true },
            ]},
            { name: "Январь — Квест", lessons: [
              { title: "Инвентарь" },
              { title: "Диалоги/ветвления" },
              { title: "Карта/переходы" },
              { title: "English: Quest/Item", english: true },
            ]},
            { name: "Февраль — Пазл", lessons: [
              { title: "Сборка из частей" },
              { title: "Сложность" },
              { title: "Подсказки" },
              { title: "English: Puzzle", english: true },
            ]},
            { name: "Март — Аркада", lessons: [
              { title: "Столкновения" },
              { title: "Комбо/бонусы" },
              { title: "Эффекты/звук" },
              { title: "English: Combo", english: true },
            ]},
            { name: "Апрель — Полировка", lessons: [
              { title: "Оптимизация" },
              { title: "Меню/пауза" },
              { title: "Релиз сборки" },
              { title: "English: Release", english: true },
            ]},
            { name: "Май — Показ", lessons: [
              { title: "Питч проекта" },
              { title: "Тест‑показ" },
              { title: "Финальная выставка" },
              { title: "English: Presentation", english: true },
            ]},
          ],
        },
        {
          title: "Minecraft с кодом",
          subtitle: "MakeCode / Python",
          desc: "Агент, автопостройки, задания. Переход от блоков к Python.",
          program: [
            { name: "Сентябрь — Агент", lessons: [
              { title: "Команды агента" },
              { title: "Сбор ресурсов" },
              { title: "Автоферма" },
              { title: "English: Agent/Block", english: true },
            ]},
            { name: "Октябрь — Постройки", lessons: [
              { title: "Шаблоны" },
              { title: "Автодом" },
              { title: "Узоры и окружение" },
              { title: "English: Build/Pattern", english: true },
            ]},
            { name: "Ноябрь — Python‑ввод", lessons: [
              { title: "Скрипты" },
              { title: "Циклы и функции" },
              { title: "Генерация структур" },
              { title: "English: Code/Loop", english: true },
            ]},
            { name: "Декабрь — Квест", lessons: [
              { title: "Сюжет и триггеры" },
              { title: "Роли и задачи" },
              { title: "Прогресс" },
              { title: "English: Quest", english: true },
            ]},
            { name: "Январь — Редстоун", lessons: [
              { title: "Сигналы" },
              { title: "Логика" },
              { title: "Комбо‑механизмы" },
              { title: "English: Redstone", english: true },
            ]},
            { name: "Февраль — Мини‑игры", lessons: [
              { title: "Арена" },
              { title: "Счёт/таймер" },
              { title: "Пауэр‑апы" },
              { title: "English: Arena/Timer", english: true },
            ]},
            { name: "Март — Оптимизация", lessons: [
              { title: "Чистота кода" },
              { title: "Производительность" },
              { title: "Отладка" },
              { title: "English: Debug", english: true },
            ]},
            { name: "Апрель — Итоговый мир", lessons: [
              { title: "План" },
              { title: "Реализация" },
              { title: "Тесты" },
              { title: "English: Showcase", english: true },
            ]},
            { name: "Май — Показ", lessons: [
              { title: "Подготовка" },
              { title: "Презентация" },
              { title: "Обратная связь" },
              { title: "English: Feedback", english: true },
            ]},
          ],
        },
        {
          title: "Цифровые супергерои",
          subtitle: "ПК + Word/Excel/PowerPoint",
          desc: "Грамотность ПК, поиск, безопасность, проекты в офисных приложениях.",
          program: [
            { name: "Сентябрь — ПК‑база", lessons: [
              { title: "Файлы/папки" },
              { title: "Облако" },
              { title: "Печать/скан" },
              { title: "English: File/Folder", english: true },
            ]},
            { name: "Октябрь — Текст", lessons: [
              { title: "Word: стили" },
              { title: "Верстка" },
              { title: "Шаблоны" },
              { title: "English: Document", english: true },
            ]},
            { name: "Ноябрь — Таблицы", lessons: [
              { title: "Excel: формулы" },
              { title: "Диаграммы" },
              { title: "Сводка" },
              { title: "English: Spreadsheet", english: true },
            ]},
            { name: "Декабрь — Слайды", lessons: [
              { title: "PowerPoint" },
              { title: "Анимации" },
              { title: "Питч" },
              { title: "English: Slide/Theme", english: true },
            ]},
            { name: "Январь — Веб‑безопасность", lessons: [
              { title: "Пароли/2FA" },
              { title: "Фишинг" },
              { title: "Киберэтика" },
              { title: "English: Safety", english: true },
            ]},
            { name: "Февраль — Командная работа", lessons: [
              { title: "Совместное редактирование" },
              { title: "Комментарии" },
              { title: "Версии" },
              { title: "English: Collaborate", english: true },
            ]},
            { name: "Март — Гугл‑сервисы", lessons: [
              { title: "Docs/Sheets" },
              { title: "Forms" },
              { title: "Drive" },
              { title: "English: Cloud", english: true },
            ]},
            { name: "Апрель — Итоговый кейс", lessons: [
              { title: "Задача" },
              { title: "Решение (таблицы + слайды)" },
              { title: "Пробный показ" },
              { title: "English: Present", english: true },
            ]},
            { name: "Май — Сертификат", lessons: [
              { title: "Доработка" },
              { title: "Финальный показ" },
              { title: "Рефлексия" },
              { title: "English: Review", english: true },
            ]},
          ],
        },
      ],
    },

    /* ======================= 9–13 лет ======================= */
    "9-13": {
      "3D": [
        {
          title: "Digital Design Studio",
          subtitle: "Figma • графдизайн",
          desc: "Афиши, постеры, персонажи, UI‑макеты. Готовим экспорт под печать/соцсети.",
          program: [
            { name: "Сентябрь — Композиция", lessons: [
              { title: "Сетка и отступы" },
              { title: "Типографика" },
              { title: "Цветовые пары" },
              { title: "English: Layout/Typography", english: true },
            ]},
            { name: "Октябрь — Постер", lessons: [
              { title: "Референсы и стиль" },
              { title: "Иллюстрация/иконки" },
              { title: "Экспорт (PNG/PDF)" },
              { title: "English: Poster", english: true },
            ]},
            { name: "Ноябрь — Персонаж/стикеры", lessons: [
              { title: "Шейпы и перья" },
              { title: "Набор стикеров" },
              { title: "Мокапы" },
              { title: "English: Stickers", english: true },
            ]},
            { name: "Декабрь — UI‑карточка", lessons: [
              { title: "Компоненты/варианты" },
              { title: "Состояния" },
              { title: "Интерактив" },
              { title: "English: Component", english: true },
            ]},
            { name: "Январь — Лого‑минимал", lessons: [
              { title: "Лого‑скетчи" },
              { title: "Отрисовка" },
              { title: "Гайдлайн" },
              { title: "English: Logo", english: true },
            ]},
            { name: "Февраль — Соцсети", lessons: [
              { title: "Серия постов" },
              { title: "Адаптивные форматы" },
              { title: "План публикаций" },
              { title: "English: Feed/Story", english: true },
            ]},
            { name: "Март — Печать", lessons: [
              { title: "CMYK и вылеты" },
              { title: "PDF‑экспорт" },
              { title: "Подготовка к печати" },
              { title: "English: Print", english: true },
            ]},
            { name: "Апрель — Портфолио", lessons: [
              { title: "Отбор работ" },
              { title: "Оформление" },
              { title: "Описание проектов" },
              { title: "English: Portfolio", english: true },
            ]},
            { name: "Май — Выставка", lessons: [
              { title: "Вывод макетов" },
              { title: "Экспозиция" },
              { title: "Публичный показ" },
              { title: "English: Showcase", english: true },
            ]},
          ],
        },
        {
          title: "Video Lab",
          subtitle: "Видеомонтаж • YouTube‑форматы",
          desc: "Съёмка, сценарий, монтаж, титры, звук, цвет. Итог — собственный ролик/сериал коротких клипов.",
          program: [
            { name: "Сентябрь — База", lessons: [
              { title: "Кадр, планы, сценарий" },
              { title: "Монтаж в редакторе" },
              { title: "Музыка и звук" },
              { title: "English: Cut/Clip", english: true },
            ]},
            { name: "Октябрь — Форматы", lessons: [
              { title: "Вертикальные клипы" },
              { title: "Титры/сабы" },
              { title: "Цветокор" },
              { title: "English: Color/Title", english: true },
            ]},
            { name: "Ноябрь — Эффекты", lessons: [
              { title: "Переходы" },
              { title: "Скорость/маски" },
              { title: "Хромакей" },
              { title: "English: Effects", english: true },
            ]},
            { name: "Декабрь — Бренд", lessons: [
              { title: "Интро/аутро" },
              { title: "Плашки" },
              { title: "Стилизация" },
              { title: "English: Intro/Outro", english: true },
            ]},
            { name: "Январь — Съёмка+", lessons: [
              { title: "Свет/микрофон" },
              { title: "Стабилизация" },
              { title: "План съёмки" },
              { title: "English: Shotlist", english: true },
            ]},
            { name: "Февраль — История", lessons: [
              { title: "Персонаж/конфликт" },
              { title: "График сюжета" },
              { title: "Монтаж эмоций" },
              { title: "English: Storyline", english: true },
            ]},
            { name: "Март — YouTube", lessons: [
              { title: "Обложка/заголовок" },
              { title: "Описание/теги" },
              { title: "Аналитика" },
              { title: "English: Thumbnail", english: true },
            ]},
            { name: "Апрель — Итоговый ролик", lessons: [
              { title: "Сценарий и съемка" },
              { title: "Монтаж" },
              { title: "Цвет/звук" },
              { title: "English: Publish", english: true },
            ]},
            { name: "Май — Премьера", lessons: [
              { title: "Показ" },
              { title: "Обсуждение" },
              { title: "Короткие версии" },
              { title: "English: Premiere", english: true },
            ]},
          ],
        },
        {
          title: "3D‑Инженер",
          subtitle: "Blender • 3D‑печать",
          desc: "Моделирование, модификаторы, топология, простая анимация, печать.",
          program: [
            { name: "Сентябрь — Навигация и шейпы", lessons: [
              { title: "Move/Scale/Rotate" },
              { title: "Extrude/Inset" },
              { title: "Modifiers (Mirror)" },
              { title: "English: Viewport", english: true },
            ]},
            { name: "Октябрь — Референсы", lessons: [
              { title: "Model‑по фото" },
              { title: "Детализация" },
              { title: "Разделение на части" },
              { title: "English: Reference", english: true },
            ]},
            { name: "Ноябрь — Печать", lessons: [
              { title: "Толщина/зазоры" },
              { title: "Экспорт STL" },
              { title: "Слайсер" },
              { title: "English: Slicer/Nozzle", english: true },
            ]},
            { name: "Декабрь — Материалы", lessons: [
              { title: "UV/материалы базово" },
              { title: "Рендер превью" },
              { title: "Каталог проекта" },
              { title: "English: Material/UV", english: true },
            ]},
            { name: "Январь — Мех‑детали", lessons: [
              { title: "Болты/крепеж" },
              { title: "Шарниры/оси" },
              { title: "Сборка частей" },
              { title: "English: Joint/Hinge", english: true },
            ]},
            { name: "Февраль — Анимация", lessons: [
              { title: "Timeline/keyframes" },
              { title: "Сцена/камера" },
              { title: "Рендер анимации" },
              { title: "English: Keyframe", english: true },
            ]},
            { name: "Март — Герой‑модель", lessons: [
              { title: "Блок‑аут" },
              { title: "Силуэт" },
              { title: "Аксессуары" },
              { title: "English: Silhouette", english: true },
            ]},
            { name: "Апрель — Итог: печать", lessons: [
              { title: "Финализация" },
              { title: "Экспорт и слайсер" },
              { title: "Печать" },
              { title: "English: Print", english: true },
            ]},
            { name: "Май — Показ", lessons: [
              { title: "Фотосет" },
              { title: "Презентация" },
              { title: "Ретушь (опц.)" },
              { title: "English: Showcase", english: true },
            ]},
          ],
        },
      ],
      "Robotics": [
        {
          title: "TechLab Robotics (Год 1 из 3)",
          subtitle: "Arduino • пайка • дроны",
          desc: "Схемы, макетирование, пайка, управление моторами/сервами. Безопасные мини‑дроны: полёт по коду.",
          program: [
            { name: "Сентябрь — Электро‑азбука", lessons: [
              { title: "Питание и резисторы" },
              { title: "LED/кнопка на макете" },
              { title: "Мультиметр" },
              { title: "English: Voltage/Current", english: true },
            ]},
            { name: "Октябрь — Датчики", lessons: [
              { title: "Свет/температура" },
              { title: "Потенциометр/звук" },
              { title: "Аналог/цифра" },
              { title: "English: Analog/Digital", english: true },
            ]},
            { name: "Ноябрь — Приводы", lessons: [
              { title: "Серво" },
              { title: "DC‑мотор" },
              { title: "H‑мост" },
              { title: "English: Servo/Motor", english: true },
            ]},
            { name: "Декабрь — Пайка", lessons: [
              { title: "Техника пайки" },
              { title: "Пайка платы‑светофора" },
              { title: "Тестирование" },
              { title: "English: Solder", english: true },
            ]},
            { name: "Январь — Связь", lessons: [
              { title: "Сериальная консоль" },
              { title: "BLE/BT (обзор)" },
              { title: "Команды управления" },
              { title: "English: Serial", english: true },
            ]},
            { name: "Февраль — Мини‑дрон", lessons: [
              { title: "Безопасность/симулятор" },
              { title: "Траектории" },
              { title: "Сенсоры стабилизации (обзор)" },
              { title: "English: Drone Safety", english: true },
            ]},
            { name: "Март — Проект 1", lessons: [
              { title: "Идея и схема" },
              { title: "Сборка" },
              { title: "Код" },
              { title: "English: Prototype", english: true },
            ]},
            { name: "Апрель — Проект 1.2", lessons: [
              { title: "Корпус и фиксация" },
              { title: "Оптимизация" },
              { title: "Тесты" },
              { title: "English: Iterate", english: true },
            ]},
            { name: "Май — Показ", lessons: [
              { title: "Презентация" },
              { title: "Отладка" },
              { title: "Публичный демо‑стенд" },
              { title: "English: Demo", english: true },
            ]},
          ],
        },
      ],
      "Coding": [
        {
          title: "2D Game Lab",
          subtitle: "Construct 3",
          desc: "Конструктор игр: события, физика, UI, экспорт.",
          program: [
            { name: "Сентябрь — Основы Construct", lessons: [
              { title: "Сцена/объекты" },
              { title: "События/условия" },
              { title: "Состояния/переменные" },
              { title: "English: Event Sheet", english: true },
            ]},
            { name: "Октябрь — Платформер", lessons: [
              { title: "Физика прыжка" },
              { title: "Враги/патруль" },
              { title: "Меню/уровни" },
              { title: "English: Platformer", english: true },
            ]},
            { name: "Ноябрь — Аркада", lessons: [
              { title: "Столкновения" },
              { title: "Счёт/таймер" },
              { title: "Эффекты" },
              { title: "English: Score HUD", english: true },
            ]},
            { name: "Декабрь — UI и звуки", lessons: [
              { title: "Кнопки/экраны" },
              { title: "Аудио" },
              { title: "Полировка" },
              { title: "English: UI", english: true },
            ]},
            { name: "Январь — Раннер", lessons: [
              { title: "Генерация препятствий" },
              { title: "Скорость/сложность" },
              { title: "Рекорды" },
              { title: "English: Endless", english: true },
            ]},
            { name: "Февраль — Твин‑стик", lessons: [
              { title: "Управление" },
              { title: "Волны врагов" },
              { title: "Пауза/настройки" },
              { title: "English: Twin‑Stick", english: true },
            ]},
            { name: "Март — Оптимизация", lessons: [
              { title: "Производительность" },
              { title: "Рефакторинг" },
              { title: "Отладка" },
              { title: "English: Debug", english: true },
            ]},
            { name: "Апрель — Экспорт", lessons: [
              { title: "Web/Android" },
              { title: "Иконки/скриншоты" },
              { title: "Описание" },
              { title: "English: Build", english: true },
            ]},
            { name: "Май — Показ", lessons: [
              { title: "Репетиция" },
              { title: "Публичный тест" },
              { title: "Showcase" },
              { title: "English: Present", english: true },
            ]},
          ],
        },
        {
          title: "Mobile App Lab",
          subtitle: "MIT App Inventor",
          desc: "Android‑приложения: экраны, сенсоры, хранилище, API.",
          program: [
            { name: "Сентябрь — Интерфейс", lessons: [
              { title: "Экраны/компоненты" },
              { title: "Навигация" },
              { title: "Стили/иконки" },
              { title: "English: Screen", english: true },
            ]},
            { name: "Октябрь — Логика блоков", lessons: [
              { title: "Переменные/условия" },
              { title: "Списки/циклы" },
              { title: "События" },
              { title: "English: Blocks", english: true },
            ]},
            { name: "Ноябрь — Сенсоры", lessons: [
              { title: "Акселерометр" },
              { title: "Локация" },
              { title: "Камера/микрофон" },
              { title: "English: Sensor", english: true },
            ]},
            { name: "Декабрь — Данные", lessons: [
              { title: "TinyDB" },
              { title: "Файлы" },
              { title: "Экспорт/бэкап" },
              { title: "English: Storage", english: true },
            ]},
            { name: "Январь — API", lessons: [
              { title: "HTTP‑запросы" },
              { title: "JSON" },
              { title: "Карты/погода (пример)" },
              { title: "English: API", english: true },
            ]},
            { name: "Февраль — Проект 1", lessons: [
              { title: "Концепция" },
              { title: "Реализация" },
              { title: "Тест/полировка" },
              { title: "English: Release", english: true },
            ]},
            { name: "Март — Монетизация (обзор)", lessons: [
              { title: "Модели" },
              { title: "Этика" },
              { title: "UX" },
              { title: "English: Monetize", english: true },
            ]},
            { name: "Апрель — Проект 2", lessons: [
              { title: "Обновления" },
              { title: "Аналитика" },
              { title: "Релиз" },
              { title: "English: Update", english: true },
            ]},
            { name: "Май — Показ", lessons: [
              { title: "Питч" },
              { title: "Презентация" },
              { title: "FAQ" },
              { title: "English: Demo", english: true },
            ]},
          ],
        },
        {
          title: "Roblox Studio",
          subtitle: "Lua‑скрипты",
          desc: "Террейн, GUI, инвентарь, NPC, публикация.",
          program: [
            { name: "Сентябрь — Старт", lessons: [
              { title: "Workspace/террейн" },
              { title: "Lua: переменные/функции" },
              { title: "События/сигналы" },
              { title: "English: Terrain/Tools", english: true },
            ]},
            { name: "Октябрь — Геймплей", lessons: [
              { title: "Touched/Triggers" },
              { title: "GUI/HUD" },
              { title: "Инвентарь/Storage" },
              { title: "English: GUI", english: true },
            ]},
            { name: "Ноябрь — NPC", lessons: [
              { title: "Пути/AI" },
              { title: "Диалоги/квест" },
              { title: "Сохранения" },
              { title: "English: NPC/Quest", english: true },
            ]},
            { name: "Декабрь — Экономика", lessons: [
              { title: "Валюта" },
              { title: "Магазин" },
              { title: "Баланс" },
              { title: "English: Economy", english: true },
            ]},
            { name: "Январь — Карта", lessons: [
              { title: "Биомы" },
              { title: "Локации" },
              { title: "Оптимизация" },
              { title: "English: Map/LOD", english: true },
            ]},
            { name: "Февраль — Сетевое", lessons: [
              { title: "Server/Client" },
              { title: "RemoteEvents" },
              { title: "Безопасность" },
              { title: "English: Replication", english: true },
            ]},
            { name: "Март — Проект", lessons: [
              { title: "Дизайн документа" },
              { title: "Реализация фич" },
              { title: "Тесты" },
              { title: "English: Playtest", english: true },
            ]},
            { name: "Апрель — Публикация", lessons: [
              { title: "Иконка/описание" },
              { title: "Аналитика" },
              { title: "Апдейты" },
              { title: "English: Publish", english: true },
            ]},
            { name: "Май — Showcase", lessons: [
              { title: "Премьера" },
              { title: "Ретро" },
              { title: "Шеринг" },
              { title: "English: Showcase", english: true },
            ]},
          ],
        },
      ],
    },

    /* ======================= 14–17 лет ======================= */
    "14-17": {
      "3D": [
        {
          title: "3D PRO",
          subtitle: "Blender • Unity • 3D‑печать",
          desc: "Игровые модели (high/low), UV, материалы, экспорт в Unity, печать реквизита.",
          program: [
            { name: "Сентябрь — Пайплайн", lessons: [
              { title: "High/Low‑poly" },
              { title: "Ретопология" },
              { title: "Bake maps" },
              { title: "English: Mesh/UV", english: true },
            ]},
            { name: "Октябрь — Материалы/рендер", lessons: [
              { title: "Shader/Nodes" },
              { title: "Lighting" },
              { title: "Render/Turntable" },
              { title: "English: Shader", english: true },
            ]},
            { name: "Ноябрь — Экспорт в Unity", lessons: [
              { title: "FBX/Scale" },
              { title: "Prefabs" },
              { title: "LOD/Импорт" },
              { title: "English: Prefab", english: true },
            ]},
            { name: "Декабрь — Печать", lessons: [
              { title: "Разделение/стыки" },
              { title: "Слайсер" },
              { title: "Печать и сборка" },
              { title: "English: Print", english: true },
            ]},
            { name: "Январь — Анимация", lessons: [
              { title: "Rig/Weights" },
              { title: "Clips" },
              { title: "Export anim" },
              { title: "English: Rig", english: true },
            ]},
            { name: "Февраль — Комплект ассетов", lessons: [
              { title: "Коллекция props" },
              { title: "Текстуры" },
              { title: "Пакет" },
              { title: "English: AssetPack", english: true },
            ]},
            { name: "Март — Портфолио", lessons: [
              { title: "Рендеры/скетчфаб" },
              { title: "Описание" },
              { title: "Кейс" },
              { title: "English: Portfolio", english: true },
            ]},
            { name: "Апрель — Итог в Unity", lessons: [
              { title: "Импорт/сцена" },
              { title: "Освещение/пост" },
              { title: "Демо‑прогулка" },
              { title: "English: Build", english: true },
            ]},
            { name: "Май — Витрина", lessons: [
              { title: "Архив/патчи" },
              { title: "Показ" },
              { title: "Рефлексия" },
              { title: "English: Review", english: true },
            ]},
          ],
        },
      ],
      "Robotics": [
        {
          title: "Robotics PRO (Год 1 из 3)",
          subtitle: "Arduino PRO • IoT",
          desc: "Сложные датчики, связь, автономия, корпуса. Проект: умное устройство.",
          program: [
            { name: "Сентябрь — Архитектура", lessons: [
              { title: "Питание/стабилизация" },
              { title: "Шины/I2C/SPI (обзор)" },
              { title: "Схема проекта" },
              { title: "English: Circuit", english: true },
            ]},
            { name: "Октябрь — Датчики PRO", lessons: [
              { title: "IMU/гиро" },
              { title: "Ультразвук/ToF" },
              { title: "Калибровка" },
              { title: "English: Sensor Fusion", english: true },
            ]},
            { name: "Ноябрь — Связь", lessons: [
              { title: "BLE/Wi‑Fi" },
              { title: "MQTT (обзор)" },
              { title: "Пульт/телеметрия" },
              { title: "English: Telemetry", english: true },
            ]},
            { name: "Декабрь — Корпус", lessons: [
              { title: "Проектирование (CAD)" },
              { title: "3D‑печать" },
              { title: "Сборка" },
              { title: "English: Enclosure", english: true },
            ]},
            { name: "Январь — Автономия", lessons: [
              { title: "Состояния/логика" },
              { title: "Fail‑safe" },
              { title: "Энергосбережение" },
              { title: "English: State Machine", english: true },
            ]},
            { name: "Февраль — Управление", lessons: [
              { title: "PID (обзор)" },
              { title: "Тюнинг" },
              { title: "Логи" },
              { title: "English: Control", english: true },
            ]},
            { name: "Март — Проект" , lessons: [
              { title: "Прототип" },
              { title: "Валидация" },
              { title: "MVP" },
              { title: "English: MVP", english: true },
            ]},
            { name: "Апрель — Полировка", lessons: [
              { title: "Корпус v2" },
              { title: "Оптимизация" },
              { title: "Документация" },
              { title: "English: Docs", english: true },
            ]},
            { name: "Май — Demo Day", lessons: [
              { title: "Презентация" },
              { title: "Демо‑стенд" },
              { title: "FAQ" },
              { title: "English: Demo", english: true },
            ]},
          ],
        },
      ],
      "Coding": [
        {
          title: "Unity PRO",
          subtitle: "C# • 2D/3D",
          desc: "Сцены, префабы, физика, освещение, UI, билды. Итог — прототип и публикация.",
          program: [
            { name: "Сентябрь — База Unity", lessons: [
              { title: "Сцена/объекты/компоненты" },
              { title: "Префабы/скрипты" },
              { title: "Камера/ввод" },
              { title: "English: Prefab", english: true },
            ]},
            { name: "Октябрь — 2D‑платформер", lessons: [
              { title: "Физика/коллайдеры" },
              { title: "Анимация" },
              { title: "UI/HUD" },
              { title: "English: Collider", english: true },
            ]},
            { name: "Ноябрь — 3D‑сцена", lessons: [
              { title: "Материалы/свет" },
              { title: "Пост‑эффекты" },
              { title: "Оптимизация" },
              { title: "English: Post‑FX", english: true },
            ]},
            { name: "Декабрь — Меню/сохранения", lessons: [
              { title: "Меню/настройки" },
              { title: "Save/Load" },
              { title: "Локализация" },
              { title: "English: Save", english: true },
            ]},
            { name: "Январь — АИ/враги", lessons: [
              { title: "NavMesh" },
              { title: "Преследование/патруль" },
              { title: "Состояния" },
              { title: "English: NavMesh", english: true },
            ]},
            { name: "Февраль — Сеть (обзор)", lessons: [
              { title: "Client/Server" },
              { title: "Синхронизация" },
              { title: "Читы/безопасность" },
              { title: "English: Netcode", english: true },
            ]},
            { name: "Март — Проект", lessons: [
              { title: "Док‑дизайн" },
              { title: "Версии/Git" },
              { title: "Playtest" },
              { title: "English: Build", english: true },
            ]},
            { name: "Апрель — Релиз", lessons: [
              { title: "WebGL/Windows" },
              { title: "Иконки/страница" },
              { title: "Трейлер (опц.)" },
              { title: "English: Release", english: true },
            ]},
            { name: "Май — Showcase", lessons: [
              { title: "Питч" },
              { title: "Показ" },
              { title: "Обратная связь" },
              { title: "English: Pitch", english: true },
            ]},
          ],
        },
        {
          title: "Unreal PRO",
          subtitle: "Blueprint • 3D",
          desc: "Уровни, Blueprints, материалы, освещение, упаковка проекта.",
          program: [
            { name: "Сентябрь — Вводный UE", lessons: [
              { title: "Уровни/актеры" },
              { title: "Blueprint: события/переменные" },
              { title: "Взаимодействие" },
              { title: "English: Blueprint", english: true },
            ]},
            { name: "Октябрь — Материалы/свет", lessons: [
              { title: "Материалы/текстуры" },
              { title: "Освещение" },
              { title: "Пост‑процесс" },
              { title: "English: Material", english: true },
            ]},
            { name: "Ноябрь — Игровая логика", lessons: [
              { title: "HUD" },
              { title: "Инвентарь (обзор)" },
              { title: "Сохранения" },
              { title: "English: HUD/Save", english: true },
            ]},
            { name: "Декабрь — Оптимизация", lessons: [
              { title: "Профилирование" },
              { title: "Настройки качества" },
              { title: "Стриминг уровней" },
              { title: "English: Profile", english: true },
            ]},
            { name: "Январь — АИ базово", lessons: [
              { title: "Behavior Tree (обзор)" },
              { title: "Патруль/агро" },
              { title: "Зоны триггеров" },
              { title: "English: Behavior", english: true },
            ]},
            { name: "Февраль — Сетевое (обзор)", lessons: [
              { title: "Replication" },
              { title: "RPC" },
              { title: "Безопасность" },
              { title: "English: Replicate", english: true },
            ]},
            { name: "Март — Проект", lessons: [
              { title: "Док‑дизайн" },
              { title: "Реализация" },
              { title: "Playtest" },
              { title: "English: Build", english: true },
            ]},
            { name: "Апрель — Упаковка", lessons: [
              { title: "Packaging" },
              { title: "Иконки/страница" },
              { title: "Трейлер (опц.)" },
              { title: "English: Package", english: true },
            ]},
            { name: "Май — Showcase", lessons: [
              { title: "Показ" },
              { title: "Обратная связь" },
              { title: "Релиз" },
              { title: "English: Showcase", english: true },
            ]},
          ],
        },
        {
          title: "ИИ‑Разработчик",
          subtitle: "Python + нейросети",
          desc: "CV, NLP, генерация контента. Ответственное применение ИИ.",
          program: [
            { name: "Сентябрь — Старт ML", lessons: [
              { title: "Python‑стек (numpy/pandas)" },
              { title: "Классификация изображений" },
              { title: "Метрики/валидация" },
              { title: "English: Dataset/Train", english: true },
            ]},
            { name: "Октябрь — CV", lessons: [
              { title: "Transfer learning" },
              { title: "Аугментации" },
              { title: "Инференс на фото" },
              { title: "English: Inference", english: true },
            ]},
            { name: "Ноябрь — NLP", lessons: [
              { title: "Токенизация" },
              { title: "Классификация текста" },
              { title: "Суммаризация (обзор)" },
              { title: "English: Token/Embed", english: true },
            ]},
            { name: "Декабрь — Генерация", lessons: [
              { title: "Текст‑генерация (обзор)" },
              { title: "Изображения (обзор)" },
              { title: "Этика и авторские права" },
              { title: "English: Prompt", english: true },
            ]},
            { name: "Январь — Данные/пайплайн", lessons: [
              { title: "Очистка/разметка" },
              { title: "Версионирование" },
              { title: "Эксперименты" },
              { title: "English: Pipeline", english: true },
            ]},
            { name: "Февраль — Проект 1", lessons: [
              { title: "Постановка задачи" },
              { title: "Бейзлайн" },
              { title: "Улучшение" },
              { title: "English: Baseline", english: true },
            ]},
            { name: "Март — Модели в прод", lessons: [
              { title: "Сервис/эндпоинт (обзор)" },
              { title: "Оптимизация" },
              { title: "Логи/метрики" },
              { title: "English: Deploy", english: true },
            ]},
            { name: "Апрель — Проект 2", lessons: [
              { title: "MVP" },
              { title: "UX/этика" },
              { title: "Документация" },
              { title: "English: Responsible AI", english: true },
            ]},
            { name: "Май — Demo Day", lessons: [
              { title: "Питч" },
              { title: "Показ" },
              { title: "Фидбек" },
              { title: "English: Pitch", english: true },
            ]},
          ],
        },
      ],
    },
  };
}
