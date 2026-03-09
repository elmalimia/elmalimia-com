(() => {
  // чтобы не вставлялся два раза
  if (document.getElementById("elmalimia-banner-root")) return;

  const root = document.createElement("div");
  root.id = "elmalimia-banner-root";
  root.innerHTML = `
    <div class="elma-banner">
      <div class="elma-banner__text">
        <strong>Эльмалимия</strong> — не знаем, что это такое, но команда разработчиков <strong>elmalimia.com</strong>.
        <span class="elma-banner__muted">
          Если мы что-то нарушили — извиняемся, закроем всё и уйдём в лес.
        </span>
      </div>
      <button class="elma-banner__btn" type="button" aria-label="Скрыть баннер">×</button>
    </div>
  `;

  // стили как модуль (внутри JS)
  const style = document.createElement("style");
  style.textContent = `
    .elma-banner{
      position: fixed;
      left: 16px;
      right: 16px;
      bottom: 16px;
      z-index: 99999;
      display: flex;
      gap: 12px;
      align-items: flex-start;
      justify-content: space-between;
      padding: 12px 14px;
      border-radius: 14px;
      background: rgba(15, 15, 20, 0.92);
      color: rgba(255,255,255,0.92);
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
      border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      font: 14px/1.35 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    }
    .elma-banner__text{ max-width: 980px; }
    .elma-banner__muted{
      display: inline-block;
      margin-left: 6px;
      opacity: 0.75;
    }
    .elma-banner__btn{
      flex: 0 0 auto;
      width: 32px;
      height: 32px;
      border: 0;
      border-radius: 10px;
      background: rgba(255,255,255,0.10);
      color: rgba(255,255,255,0.9);
      cursor: pointer;
      font-size: 18px;
      line-height: 32px;
    }
    .elma-banner__btn:hover{ background: rgba(255,255,255,0.16); }
    @media (max-width: 520px){
      .elma-banner{ bottom: 10px; left: 10px; right: 10px; }
      .elma-banner__muted{ display:block; margin: 6px 0 0 0; }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(root);

  // закрыть
  root.querySelector(".elma-banner__btn").addEventListener("click", () => {
    root.remove();
    style.remove();
  });
})();
