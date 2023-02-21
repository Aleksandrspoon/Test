(() => {
  window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (e) {
      window.application.screens[e]
        ? window.application.screens[e]()
        : console.log("Такого экрана нет");
    },
    renderBlock: function (e, t) {
      window.application.blocks[e]
        ? window.application.blocks[e](t)
        : console.log("Такого блока нет");
    },
    timers: [],
    level: "",
  };
  const e = ["easy_level", "medium_level", "hard_level"],
    t = [6, 12, 18],
    n = [3, 6, 9];
  function l() {
    const e = document.querySelector(".container");
    return (e.textContent = ""), e;
  }
  function c() {
    const e = l();
    let c, d;
    const a = document.createElement("div");
    a.classList.add("screen", "game_screen");
    const o = document.createElement("div");
    o.classList.add("game_screen_field");
    const i = document.createElement("h1");
    console.log(window.application.level),
      (i.textContent = `Сложность игры : ${window.application.level}`),
      i.classList.add("game_header");
    const s = document.createElement("h3");
    s.classList.add("game_header_second");
    const r = document.createElement("h3");
    r.classList.add("game_header_second"),
      "3" === window.application.level
        ? ((c = t[2]), (d = n[2]))
        : "2" === window.application.level
        ? ((c = t[1]), (d = n[1]))
        : ((c = t[0]), (d = n[0])),
      (s.textContent = `Кол-во карт : ${c}`),
      (r.textContent = `Пар : ${d}`),
      o.appendChild(i),
      o.appendChild(s),
      o.appendChild(r),
      a.appendChild(o),
      e.appendChild(a);
  }
  (window.application.screens.gameLevel = function () {
    const t = l(),
      n = document.createElement("section");
    n.classList.add("screen", "screen-level");
    const d = document.createElement("form");
    d.classList.add("form_level");
    const a = document.createElement("h1");
    (a.textContent = "Выбери сложность"),
      a.classList.add("level_header", "element");
    const o = document.createElement("div");
    o.classList.add("level_select_div", "element"),
      (function (t) {
        for (let n = 1; n <= 3; n++) {
          const l = document.createElement("input");
          l.classList.add("level-input"),
            (l.type = "radio"),
            (l.id = e[n - 1]),
            (l.value = n);
          const c = document.createElement("label");
          (c.textContent = n),
            (c.for = e[n - 1]),
            c.classList.add("level-label"),
            t.appendChild(l),
            t.appendChild(c);
        }
      })(o);
    const i = document.createElement("div");
    i.classList.add("element", "elements__box");
    const s = document.createElement("div");
    s.classList.add("error__block", "hidden__block");
    const r = document.createElement("h3");
    (r.textContent = "Выберите уровень игры."), s.appendChild(r);
    const p = document.createElement("div"),
      m = document.createElement("button");
    m.classList.add("btn_level", "button"),
      (m.textContent = "Старт"),
      p.appendChild(m),
      i.appendChild(s),
      i.appendChild(p),
      m.addEventListener("click", (e) => {
        e.preventDefault(),
          window.application.level
            ? ((window.application.screens.game = c),
              window.application.renderScreen("game"))
            : s.classList.remove("hidden__block");
      }),
      d.appendChild(a),
      d.appendChild(o),
      d.appendChild(i),
      n.appendChild(d),
      t.appendChild(n);
    let v = document.querySelectorAll(".level-label");
    function u(e) {
      v.forEach((e) => {
        e.classList.remove("level_label--active");
      }),
        e.target.classList.add("level_label--active"),
        (window.application.level = e.target.textContent),
        s.classList.add("hidden__block");
    }
    v.forEach((e) => {
      e.addEventListener("click", u);
    });
  }),
    window.application.renderScreen("gameLevel");
})();
