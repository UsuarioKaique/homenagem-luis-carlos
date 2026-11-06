/* ==========================================================
   MURAL DE MEMÓRIAS — LUIS CARLOS
   Todo o conteúdo editável está nesta primeira parte (CONFIGURAÇÃO).
   Não é preciso mexer na lógica abaixo para colocar os vídeos.
   ========================================================== */

"use strict";

/* ----------------------------------------------------------
   CONFIGURAÇÃO
   ----------------------------------------------------------
   Os vídeos ficam no Google Drive (fora do GitHub). Cole entre as
   aspas o link de compartilhamento do arquivo, por exemplo:
     "https://drive.google.com/file/d/ID_DO_ARQUIVO/view?usp=sharing"
   Também são aceitos o link já no formato ".../preview" e o
   formato antigo "https://drive.google.com/open?id=ID_DO_ARQUIVO".
   Deixe "" (vazio) enquanto o vídeo não estiver pronto.

   ATENÇÃO: este site é público, então os links escritos aqui podem
   ser vistos por quem abrir o código. Quem controla quem pode
   assistir são as PERMISSÕES do arquivo no Google Drive.
   Este código não altera permissões nem tenta contorná-las.
   ---------------------------------------------------------- */

// Vídeo principal da homenagem coletiva (link do Google Drive):
const mainVideoUrl = "https://drive.google.com/file/d/1wkMKP4W1xZe5GPuSV6BmDM54QolSH-x_/view?usp=drive_link"; // <- COLE_AQUI_O_LINK_DO_VIDEO_PRINCIPAL

// Nome do homenageado (usado nos títulos e nas cenas):
const HONOREE = "Luis Carlos";

// Os 20 colaboradores, na ordem oficial.
//   name    : nome exibido no site
//   gender  : "female" (feminino) ou "male" (masculino) — define o personagem da cena
//   videoUrl: link do Google Drive do depoimento ("" = ainda em preparação)
//   photo   : (opcional) caminho de uma foto autorizada dentro do projeto,
//             ex.: "assets/fotos/ELIANE_FERNANDES.png". Se o arquivo não existir,
//             a foto simplesmente não aparece (não quebra a janela).
//   message : (opcional) frase curta mostrada na janela do depoimento
const collaborators = [
  { name: "ELIANE FERNANDES",  gender: "female", videoUrl: "https://drive.google.com/file/d/1mr8s5JuMkox2sSR0H-KYff9dbuHuWd7L/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "JULIO CESAR",       gender: "male",   videoUrl: "https://drive.google.com/file/d/1fhHSdw3Ce3LLrC-MPtQ0KH2Ww7QCbAne/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "EUGENIO MARQUES",   gender: "male",   videoUrl: "https://drive.google.com/file/d/1bAGsGRA6SML6KwVR6wvjmgRMndnPaLwb/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "FRANCISCO PEIXOTO", gender: "male",   videoUrl: "https://drive.google.com/file/d/1HUN91pWD7SpCkWzvxL3E-fOynk9cIOvr/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "RICARDO PRADO",     gender: "male",   videoUrl: "https://drive.google.com/file/d/1rV4AJ6PbNjwYZ0Al2tH281Q8NF0x7WEx/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "CELSO RICARDO",     gender: "male",   videoUrl: "https://drive.google.com/file/d/1wcPDZ5UZrCjczRI01e8opT03mc7euH24/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "JORGE GALLO",       gender: "female", videoUrl: "https://drive.google.com/file/d/16TX3aTeS4WgUxd4VykgKw8epJ6sDj06o/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "ANTONIO RIBEIRO",   gender: "male",   videoUrl: "https://drive.google.com/file/d/1MfxrJ5lIqUF3Ya9zkYDHdVlMXU9CZ4iO/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "SILVIO CESAR",      gender: "male",   videoUrl: "https://drive.google.com/file/d/1uD1LSxhhxjf1Ekb5UK2kQP4vrueT0jQf/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "ALEXANDER DE ASSIS",gender: "male",   videoUrl: "https://drive.google.com/file/d/1jcNIEC6KryLWyR-AZIhXsHBhIUvsmE18/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "JOSÉ ROBERTO",      gender: "male",   videoUrl: "https://drive.google.com/file/d/1G9Il0ejaMg-vMNQlqPqYX8zXKX-MzB0h/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "DAVI RICARDO",      gender: "male",   videoUrl: "https://drive.google.com/file/d/1QOzOfFZU0jfTxVd4PVwB11Y8RfVEznLt/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "THIAGO MIGLIORINI", gender: "male",   videoUrl: "https://drive.google.com/file/d/1lBnBz7P1JrTFkm1ngdJwE73ry46b6zg1/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "EDUARDO EURIPEDES", gender: "male",   videoUrl: "https://drive.google.com/file/d/17dpcZUYMxpiy2TiW61aTp9qh-gciVP5s/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "MANUEL JOAQUIM",    gender: "male",   videoUrl: "https://drive.google.com/file/d/1S0gYCNAHw-fP0KIYp1whxUyrg26g5ABx/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "FABIANO OBINA",     gender: "male",   videoUrl: "https://drive.google.com/file/d/1TWaBI6CMNENYuy-I_bGlH0gIWSPK5waV/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "GERSON MARCONDES",  gender: "male",   videoUrl: "https://drive.google.com/file/d/1AFdY_eXwwShtb0PfUPnTTFujI9VobrN_/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "GILBERTO DOS SANTOS", gender: "male", videoUrl: "https://drive.google.com/file/d/197djzHcRd2Gh-QPZHVThE-nt1CvIrCzd/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "CRISTIAN FIUMARI",  gender: "male",   videoUrl: "https://drive.google.com/file/d/1zGWulA4LHIb1xXevUPTCdFhVMutlHrFh/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "RENAN OLIVEIRA",    gender: "male",   videoUrl: "https://drive.google.com/file/d/1OKtZDKVqnE5cooAEq_2GwAcjB-pejJ91/view?usp=drive_link", message: "Uma lembrança especial para guardar." },
  { name: "KAIQUE MELO",       gender: "male",   videoUrl: "https://drive.google.com/file/d/1wmNtHpH5r3pXs09zc0Btl_DBVw-gfELl/view?usp=drive_link", message: "Uma lembrança especial para guardar." }
];

// ----------------------------------------------------------
// GALERIA DE FOTOS ("Momentos da nossa pescaria")
// ----------------------------------------------------------
// Cada item da lista pode ser:
//   - só o ID da foto no Google Drive:  "1AbCdEfGhIjKlMnOpQrStUvWxYz012345"
//   - o link de compartilhamento:       "https://drive.google.com/file/d/ID/view?usp=sharing"
//   - um caminho de foto dentro do projeto: "assets/galeria/pesca-01.jpg"
//   - ou um objeto com legenda:         { photo: "ID_OU_LINK", caption: "Pescaria de 2019" }
// "" (vazio) mostra um retrato "Foto em breve". Apague as linhas que sobrarem
// quando terminar de preencher, ou use SHOW_GALLERY_PLACEHOLDERS = false.
// No Drive, a foto precisa estar compartilhada como "Qualquer pessoa com o link"
// para aparecer dentro do site.
const galleryPhotos = [
  "https://drive.google.com/file/d/1xomiEMmSlLwy_gwzYIt89_kXpqYY2FUE/view?usp=drive_link", // foto 1
  "https://drive.google.com/file/d/1e4sMsV27kYGjCDcrIvDF4BBJZR6v25Lv/view?usp=drive_link", // foto 2
  "https://drive.google.com/file/d/1QLC_CvdEjcx99foiW0oJj-JCL4t1XCDk/view?usp=drive_link", // foto 3
  "https://drive.google.com/file/d/1Hq2V36f-fx1s_ImQ3OaFPUv2rV03eiNx/view?usp=drive_link", // foto 4
  "https://drive.google.com/file/d/1mGBYHc4WW9YAPYt_iqQwykAN__3SgjZR/view?usp=drive_link", // foto 5
  "https://drive.google.com/file/d/1JwdOhRBtAI6hrKKHmT8tHbp96ozM8Y59/view?usp=drive_link", // foto 6
  "https://drive.google.com/file/d/13647BmXgB3Qt_FXrHyPDvV2Igt_58Rsm/view?usp=drive_link", // foto 7
  "https://drive.google.com/file/d/1N-ZHR0PRymVxmVM3MCwT0ieP22XVMwQx/view?usp=drive_link", // foto 8
  "https://drive.google.com/file/d/1_gTY9aIDNbrsVqgsTHXASuqSfqUWB6_A/view?usp=drive_link", // foto 9
  "https://drive.google.com/file/d/1JE6_LdE8MXhJM0eey2RdJKGaC7mGJ9Ci/view?usp=drive_link", // foto 10
  "https://drive.google.com/file/d/1lSt4PYL__hZm7I8QwwpWDNpZZT8UH8vc/view?usp=drive_link", // foto 11
  "https://drive.google.com/file/d/1P-XiUjga4LV2M0x1wuRCqA3fT4KfhFbN/view?usp=drive_link", // foto 12
  "https://drive.google.com/file/d/1xomiEMmSlLwy_gwzYIt89_kXpqYY2FUE/view?usp=drive_link", // foto 13
  "https://drive.google.com/file/d/1nja9ecXfOuryKdlwrWA9biiRbKMjf-JN/view?usp=drive_link", // foto 14
  "https://drive.google.com/file/d/1Yqewc_6ubVx4EkTZw5L196ULAzpk-o4Z/view?usp=drive_link", // foto 15
  "https://drive.google.com/file/d/1fyhkclVC9rmjU2HAVXVXYztryLDnSxDq/view?usp=drive_link", // foto 16
  "https://drive.google.com/file/d/1GwU7wGq-5ATHgrw2071CJfDL_onO4BX6/view?usp=drive_link", // foto 17
  "https://drive.google.com/file/d/1AsTVmcltNgxiNxPPBVgS3YjOY6jVUPBK/view?usp=drive_link", // foto 18
  "https://drive.google.com/file/d/1MfCoM-elD9hL1xA-aDfTco8l7rlXBq5U/view?usp=drive_link", // foto 19
  "https://drive.google.com/file/d/10l61GTVLSTavhOB98V-X7k6P9GP6QxDl/view?usp=drive_link", // foto 20
  "https://drive.google.com/file/d/1yPoPM1PAWAlkKBkF5jxikn4A_rr4KwGE/view?usp=drive_link", // foto 21
  "https://drive.google.com/file/d/1G3MD6IqBhZ288VIYCOPvYi7HWXFG-KvW/view?usp=drive_link", // foto 22
  "https://drive.google.com/file/d/1gg5Nh-Q4Jhqym3IHtmuDHVVYlpzgoIot/view?usp=drive_link", // foto 23
  "https://drive.google.com/file/d/1wRvc-fS3L_uHYviqRKjm4Jg3xmMleF_Z/view?usp=drive_link", // foto 24
  "https://drive.google.com/file/d/13YXltTKjoaEz1jlxmvUyWxyHrw7kKaRY/view?usp=drive_link", // foto 25 
  "https://drive.google.com/file/d/1uJXIPUMjKfStHAsygiDP6B1G_rCXujGB/view?usp=drive_link", // foto 26
  "https://drive.google.com/file/d/1VeiAxfHlMRK2QXcC_nnJz0iKoPl6OmOv/view?usp=drive_link", // foto 27
  "https://drive.google.com/file/d/16aAFjB_rjanuXNbIu7aa2qLYrObciY7Q/view?usp=drive_link", // foto 28
  "https://drive.google.com/file/d/1JhvNGkn0NIRJ3DJB7eJb-1ZA27lbWzzm/view?usp=drive_link", // foto 29
  "https://drive.google.com/file/d/1l-FpFtROV7WVarNxn2-XZfLGdokpPwgD/view?usp=drive_link", // foto 30
  "https://drive.google.com/file/d/14V0tIWIMt5tz412j13sZ72T4JyTHvith/view?usp=drive_link", // foto 31
  
];

// true  = itens vazios aparecem como "Foto em breve"
// false = itens vazios ficam escondidos
const SHOW_GALLERY_PLACEHOLDERS = true;

const MSG_PENDING_MAIN = "A homenagem principal está sendo finalizada. Em breve, você poderá assistir a ela aqui.";
const MSG_PENDING_ITEM = "Esta lembrança está sendo preparada. Em breve, você poderá assistir a este depoimento.";
const MSG_INVALID_LINK = "Não foi possível carregar este vídeo agora. O link cadastrado não parece ser um link válido de um arquivo do Google Drive.";
const DEFAULT_MESSAGE = "Uma lembrança especial para guardar.";

/* ==========================================================
   LÓGICA (não é necessário editar daqui para baixo)
   ========================================================== */

(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Utilitários ---------- */

  const SMALL_WORDS = new Set(["de", "da", "do", "dos", "das", "e"]);

  function titleCase(name) {
    return String(name || "")
      .toLocaleLowerCase("pt-BR")
      .split(/\s+/)
      .filter(Boolean)
      .map((w, i) => (i > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toLocaleUpperCase("pt-BR") + w.slice(1)))
      .join(" ");
  }

  /* ---------- Google Drive: leitura e validação dos links ---------- */

  // IDs de arquivos do Drive têm 25+ caracteres (letras, números, "_" e "-").
  // O mínimo de 20 evita aceitar por engano textos como "ID_DO_ARQUIVO".
  const DRIVE_ID_RE = /^[A-Za-z0-9_-]{20,100}$/;
  const RESOURCE_KEY_RE = /^[A-Za-z0-9_-]{5,40}$/;

  // Interpreta o link cadastrado e devolve um destes resultados:
  //   { status: "empty" }                          -> campo vazio
  //   { status: "invalid" }                        -> não é um link válido de arquivo do Drive
  //   { status: "ok", id, embedUrl, viewUrl }      -> pronto para incorporar
  // Formatos aceitos:
  //   https://drive.google.com/file/d/ID/view?usp=sharing
  //   https://drive.google.com/file/d/ID/preview
  //   https://drive.google.com/file/u/0/d/ID/view
  //   https://drive.google.com/open?id=ID   e   https://drive.google.com/uc?id=ID
  // O endereço do iframe é SEMPRE montado aqui a partir do ID validado
  // (o texto digitado nunca é usado diretamente como src).
  function parseDriveLink(input) {
    if (typeof input !== "string" || !input.trim()) return { status: "empty" };

    const raw = input.trim();
    let url;
    try {
      url = new URL(/^https?:\/\//i.test(raw) ? raw : "https://" + raw);
    } catch (e) {
      return { status: "invalid" };
    }

    const host = url.hostname.toLowerCase();
    if (host !== "drive.google.com" && host !== "docs.google.com") return { status: "invalid" };

    let id = "";
    const m = url.pathname.match(/^\/file\/(?:u\/\d+\/)?d\/([^/]+)/);
    if (m) {
      id = m[1];
    } else if (url.pathname === "/open" || url.pathname === "/uc" || url.pathname === "/thumbnail") {
      id = url.searchParams.get("id") || "";
    }
    if (!DRIVE_ID_RE.test(id)) return { status: "invalid" };

    // Alguns arquivos compartilhados trazem uma "resourcekey" no link; ela precisa ser mantida.
    const rk = url.searchParams.get("resourcekey");
    const suffix = rk && RESOURCE_KEY_RE.test(rk) ? "?resourcekey=" + encodeURIComponent(rk) : "";
    const base = "https://drive.google.com/file/d/" + id;

    return { status: "ok", id: id, embedUrl: base + "/preview" + suffix, viewUrl: base + "/view" + suffix };
  }

  function createIframe(src, title) {
    const f = document.createElement("iframe");
    f.src = src;
    f.title = title;
    f.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
    f.referrerPolicy = "strict-origin-when-cross-origin";
    f.allowFullscreen = true;
    return f;
  }

  // Linha de ajuda sob o player: o Drive não permite saber, a partir do site, se o acesso
  // foi negado. Por isso o aviso fica sempre visível junto com um atalho para abrir no Drive.
  function clearAccessHelp(box) {
    const next = box && box.nextElementSibling;
    if (next && next.classList.contains("vb-help")) next.remove();
  }

  function setAccessHelp(box, info, variant) {
    clearAccessHelp(box);
    const p = document.createElement("p");
    p.className = "vb-help" + (variant ? " vb-help--" + variant : "");
    
    const span = document.createElement("span");
    span.textContent = "";
    
    const a = document.createElement("a");
    a.href = info.viewUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    
    // Substituição da variável pelo texto direto
    a.textContent = "Abrir no Google Drive"; 
    
    p.append(span, a);
    box.insertAdjacentElement("afterend", p);
}

  // Formato do vídeo (horizontal/vertical). Só ajusta a PROPORÇÃO da caixa: vídeo gravado em pé
  // no celular aparece inteiro em vez de ficar com tarjas laterais. Se não der para descobrir,
  // a caixa continua 16:9 como sempre. Também dá para forçar com videoFormat: "vertical"/"horizontal".
  const formatCache = {};
  function normalizeFormat(v) {
    const t = String(v || "").trim().toLowerCase();
    return t === "vertical" || t === "horizontal" ? t : "";
  }
  function setBoxFormat(box, fmt) {
    box.classList.toggle("video-box--vertical", fmt === "vertical");
  }
  function detectVideoFormat(id) {
    if (formatCache[id]) return Promise.resolve(formatCache[id]);
    return new Promise(function (resolve) {
      const img = new Image();
      let done = false;
      function end(f) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        img.onload = img.onerror = null;
        if (f) formatCache[id] = f;
        resolve(f || "");
      }
      const timer = setTimeout(function () { end(""); }, 4000);
      img.onload = function () {
        end(img.naturalHeight > img.naturalWidth * 1.15 ? "vertical" : "horizontal");
      };
      img.onerror = function () { end(""); };
      img.src = "https://drive.google.com/thumbnail?id=" + encodeURIComponent(id) + "&sz=w400";
    });
  }
  function applyVideoFormat(box, info, forced, isStale) {
    const f = normalizeFormat(forced);
    if (f) { setBoxFormat(box, f); return; }
    detectVideoFormat(info.id).then(function (fmt) {
      if (fmt && !(isStale && isStale())) setBoxFormat(box, fmt);
    });
  }

  // Remove o iframe de um contêiner e interrompe o áudio.
  function unloadVideo(box) {
    if (!box) return;
    box.classList.remove("video-box--vertical");
    box.querySelectorAll("iframe").forEach((f) => {
      try { f.src = "about:blank"; } catch (e) { /* ignora */ }
    });
    box.replaceChildren();
    clearAccessHelp(box);
  }

  function buildNotice(message) {
    const wrap = document.createElement("div");
    wrap.className = "vb-notice";
    wrap.innerHTML =
      '<svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true" focusable="false">' +
      '<path d="M6 30c6-9 14-11 22-7l8-6v16l-8-6c-8 4-16 2-22-7z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>' +
      '<circle cx="14" cy="26" r="1.8" fill="currentColor"/></svg>';
    const p = document.createElement("p");
    p.textContent = message;
    wrap.appendChild(p);
    return wrap;
  }

  function buildCover(label, sub, onClick) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "vb-cover";
    b.innerHTML =
      '<span class="vb-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>' +
      '<span class="vb-label"></span><span class="vb-sub"></span>';
    $(".vb-label", b).textContent = label;
    $(".vb-sub", b).textContent = sub;
    b.addEventListener("click", onClick);
    return b;
  }

  /* ---------- Vídeo principal ---------- */

  function renderMainVideo() {
    const box = $("#mainVideoBox");
    if (!box) return;
    const info = parseDriveLink(mainVideoUrl);
    unloadVideo(box);
    if (info.status === "empty") {
      box.appendChild(buildNotice(MSG_PENDING_MAIN));
      return;
    }
    if (info.status === "invalid") {
      console.warn("[Mural] Link inválido no vídeo principal (mainVideoUrl):", mainVideoUrl);
      box.appendChild(buildNotice(MSG_INVALID_LINK));
      return;
    }
    // O player do Drive só é carregado quando a pessoa clica (nada é carregado na abertura).
    box.appendChild(
      buildCover("Assistir à homenagem", "40 anos de história em um só vídeo", function () {
        box.replaceChildren(createIframe(info.embedUrl, "Vídeo da homenagem a " + HONOREE));
        setAccessHelp(box, info, "plaque");
        applyVideoFormat(box, info, typeof mainVideoFormat === "undefined" ? "" : mainVideoFormat, function () {
          return !box.querySelector("iframe");
        });
      })
    );
  }

  /* ---------- Cartões do mural ---------- */

  const CARD_ROD_SVG =
    '<svg class="card__rod" viewBox="0 0 220 130" aria-hidden="true" focusable="false">' +
    '<g class="card__rodg">' +
    '<path d="M10 118 L172 14" stroke="#5b3a1e" stroke-width="3.5" stroke-linecap="round" fill="none"/>' +
    '<path d="M8 120 L44 97" stroke="#2d1b0c" stroke-width="8" stroke-linecap="round" fill="none"/>' +
    '<circle cx="40" cy="104" r="8" fill="#ffd21f" stroke="#b88a1a" stroke-width="2"/>' +
    '<path d="M172 14 Q184 60 178 100" stroke="#f6efe0" stroke-width="1.4" fill="none"/>' +
    '<g class="card__bobber">' +
    '<circle cx="178" cy="100" r="7.5" fill="#ffffff"/>' +
    '<path d="M170.5 100 a7.5 7.5 0 0 1 15 0z" fill="#e53935"/>' +
    "</g></g>" +
    '<ellipse cx="178" cy="110" rx="15" ry="3.2" fill="#ffffff" opacity="0.35"/>' +
    "</svg>";

  const HOOK_SVG =
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">' +
    '<path d="M12 3v11a4 4 0 1 1-4-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';

  function renderMural() {
    const grid = $("#muralGrid");
    if (!grid) return;
    const frag = document.createDocumentFragment();

    collaborators.forEach(function (c, i) {
      const li = document.createElement("li");
      li.style.setProperty("--i", i);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card";
      btn.dataset.index = String(i);
      btn.setAttribute("aria-haspopup", "dialog");
      btn.setAttribute("aria-label", "Pescar a memória de " + titleCase(c.name) + " e abrir o depoimento");
      btn.innerHTML =
        '<span class="card__scene"><span class="card__num"></span>' + CARD_ROD_SVG + "</span>" +
        '<span class="card__sign"><span class="card__name"></span></span>' +
        '<span class="card__cta">' + HOOK_SVG + "<span>Pescar esta memória</span></span>";
      $(".card__num", btn).textContent = "Nº " + String(i + 1).padStart(2, "0");
      $(".card__name", btn).textContent = c.name;

      li.appendChild(btn);
      frag.appendChild(li);
    });

    grid.replaceChildren(frag);
    grid.addEventListener("click", function (ev) {
      const btn = ev.target.closest(".card");
      if (btn && grid.contains(btn)) openModal(Number(btn.dataset.index));
    });
  }

  /* ---------- Cena do barco (SVG gerado conforme o gênero) ---------- */

  const SHIRTS = ["#ffffff", "#1f9d8b", "#e8704a", "#8e5bd6", "#d94f70", "#2f7dd1", "#f2a900", "#4d8f3c"];
  const HATS = [
    ["#0a2a6b", "#071a45"], ["#c0392b", "#8f2a20"], ["#2a5bd7", "#1b3f9e"],
    ["#2e2e3a", "#1c1c25"], ["#2f8f5a", "#1f6b40"], ["#f58a1f", "#c46a10"]
  ];
  const HAIRS = ["#3b2314", "#1f1a17", "#5a3a22", "#7a5a3a"];
  const SKIN = "#eab58c";
  const SKIN_SHADE = "#d89d73";

  function wavePath(y, amp, per, x0, x1, closeTo) {
    const n = Math.ceil((x1 - x0) / per);
    let d = "M" + x0 + " " + y + " q" + per / 2 + " " + -amp + " " + per + " 0";
    for (let k = 1; k < n; k++) d += " t" + per + " 0";
    if (closeTo) d += " L" + (x0 + n * per) + " " + closeTo + " L" + x0 + " " + closeTo + "Z";
    return d;
  }

  // Personagem de frente, da cintura para cima. Origem (0,0) = cintura, na borda do barco.
  // Desenhado para pescar à ESQUERDA; a pessoa da direita é espelhada.
  function personSVG(o) {
    const shirt = o.shirt;
    let s = "";

    if (o.female) {
      s += '<path d="M-31 -98 Q-40 -56 -24 -46 Q0 -40 24 -46 Q40 -56 31 -98Z" fill="' + o.hair + '"/>';
    }

    // tronco
    s += '<path d="M-36 0 Q-40 -54 -22 -70 Q0 -80 22 -70 Q40 -54 36 0Z" fill="' + shirt + '"/>';
    if (o.vest) {
      s += '<path d="M-36 0 Q-40 -54 -22 -70 L-8 -73 L-6 0Z" fill="' + o.vest + '"/>';
      s += '<path d="M36 0 Q40 -54 22 -70 L8 -73 L6 0Z" fill="' + o.vest + '"/>';
      s += '<rect x="-28" y="-30" width="15" height="12" rx="3" fill="#e0b400"/>';
      s += '<rect x="13" y="-30" width="15" height="12" rx="3" fill="#e0b400"/>';
    }
    if (o.female) {
      s += '<path d="M-13 -73 Q0 -58 13 -73" fill="none" stroke="rgba(0,0,0,0.18)" stroke-width="3" stroke-linecap="round"/>';
    }

    // pescoço, orelhas, cabeça
    s += '<rect x="-7" y="-82" width="14" height="14" rx="5" fill="' + SKIN_SHADE + '"/>';
    s += '<circle cx="-24" cy="-98" r="5.5" fill="' + SKIN + '"/><circle cx="24" cy="-98" r="5.5" fill="' + SKIN + '"/>';
    s += '<circle cx="0" cy="-100" r="25" fill="' + SKIN + '"/>';

    // cabelo + chapéu
    if (o.kind === "luis") {
      s += '<ellipse cx="-24" cy="-103" rx="5" ry="9" fill="#cfd6e4"/><ellipse cx="24" cy="-103" rx="5" ry="9" fill="#cfd6e4"/>';
      s += '<path d="M-25 -109 Q-24 -138 0 -138 Q24 -138 25 -109Z" fill="' + o.hat[0] + '"/>';
      s += '<path d="M-25 -112 Q0 -106 25 -112 L25 -116 Q0 -110 -25 -116Z" fill="#2a5bd7"/>';
      s += '<path d="M-41 -108 Q0 -121 41 -108 Q39 -100 0 -102 Q-39 -100 -41 -108Z" fill="' + o.hat[1] + '"/>';
    } else if (o.female) {
      s += '<path d="M-25 -104 Q-31 -80 -26 -66 L-20 -70 Q-24 -88 -22 -102Z" fill="' + o.hair + '"/>';
      s += '<path d="M25 -104 Q31 -80 26 -66 L20 -70 Q24 -88 22 -102Z" fill="' + o.hair + '"/>';
      s += '<path d="M-22 -112 Q-22 -137 0 -137 Q22 -137 22 -112Z" fill="#f3d58f"/>';
      s += '<path d="M-22 -113 Q0 -107 22 -113 L22 -119 Q0 -113 -22 -119Z" fill="#2a5bd7"/>';
      s += '<path d="M-48 -108 Q0 -126 48 -108 Q46 -99 0 -102 Q-46 -99 -48 -108Z" fill="#ecc877"/>';
    } else {
      s += '<path d="M-25 -106 Q-27 -94 -23 -88 L-20 -102Z" fill="' + o.hair + '"/>';
      s += '<path d="M25 -106 Q27 -94 23 -88 L20 -102Z" fill="' + o.hair + '"/>';
      s += '<path d="M-25 -108 Q-24 -135 0 -135 Q24 -135 25 -108Z" fill="' + o.hat[0] + '"/>';
      s += '<path d="M-27 -109 Q0 -102 27 -109 Q21 -100 0 -100 Q-21 -100 -27 -109Z" fill="' + o.hat[1] + '"/>';
    }

    // rosto
    s += '<circle cx="-9" cy="-95" r="2.8" fill="#2b1b12"/><circle cx="9" cy="-95" r="2.8" fill="#2b1b12"/>';
    s += '<circle cx="-15" cy="-88" r="4.5" fill="#f08a7a" opacity="0.35"/><circle cx="15" cy="-88" r="4.5" fill="#f08a7a" opacity="0.35"/>';
    s += '<circle cx="0" cy="-91" r="1.8" fill="' + SKIN_SHADE + '"/>';
    s += '<path d="M-10 -85 Q0 -75 10 -85" stroke="#7a2e1d" stroke-width="2.6" fill="none" stroke-linecap="round"/>';

    // braço que descansa
    s += '<path d="M30 -62 Q44 -40 38 -16" stroke="' + shirt + '" stroke-width="15" stroke-linecap="round" fill="none"/>';
    s += '<circle cx="38" cy="-12" r="7.5" fill="' + SKIN + '"/>';

    // braço que segura a vara
    s += '<path d="M-30 -62 Q-48 -52 -54 -36" stroke="' + shirt + '" stroke-width="15" stroke-linecap="round" fill="none"/>';

    // vara, linha e boia
    s += '<g class="sc-rod' + (o.right ? " sc-rod--r" : "") + '" style="transform-origin:-54px -34px">';
    s += '<path d="M-62 -28 L-236 -172" stroke="#5b3a1e" stroke-width="4.5" stroke-linecap="round" fill="none"/>';
    s += '<path d="M-64 -26 L-48 -40" stroke="#2d1b0c" stroke-width="8" stroke-linecap="round" fill="none"/>';
    s += '<path d="M-236 -172 Q-248 -60 -240 36" stroke="#f6efe0" stroke-width="1.6" fill="none"/>';
    s += '<g class="sc-bobber' + (o.right ? " sc-bobber--r" : "") + '">';
    s += '<circle cx="-240" cy="36" r="8.5" fill="#ffffff"/><path d="M-248.500 36 a8.500 8.500 0 0 1 17 0z" fill="#e53935"/>';
    s += "</g></g>";

    s += '<circle cx="-54" cy="-34" r="8" fill="' + SKIN + '"/>';
    return s;
  }

  function buildScene(c, index) {
    const female = c.gender === "female";
    const display = titleCase(c.name);

    const luis = personSVG({ kind: "luis", shirt: "#2a5bd7", vest: "#ffd21f", hat: ["#fff3c2", "#f0d98a"], hair: "#cfd6e4" });
    const mate = personSVG({
      kind: female ? "female" : "male",
      female: female,
      right: true,
      shirt: SHIRTS[(index * 3 + 1) % SHIRTS.length],
      hat: HATS[(index * 5 + 2) % HATS.length],
      hair: HAIRS[(index * 7 + 1) % HAIRS.length]
    });

    const gulls = [[500, 70], [560, 96], [610, 58]].map(function (g) {
      return '<path d="M' + g[0] + " " + g[1] + ' q8 -8 16 0 q8 -8 16 0" fill="none" stroke="#fff" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round"/>';
    }).join("");

    const reflect = [[274, 60], [287, 88], [301, 112], [318, 132], [337, 150], [358, 162]].map(function (r) {
      return '<rect x="' + (170 - r[1] / 2) + '" y="' + r[0] + '" width="' + r[1] + '" height="5" rx="2.5" fill="#fff0b3" opacity="0.7" class="sc-sparkle"/>';
    }).join("");

    const sparkles = [[90, 350], [250, 385], [560, 392], [700, 372], [470, 398], [30, 400]].map(function (p) {
      return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.4" fill="#ffffff" class="sc-sparkle"/>';
    }).join("");

    return (
      '<svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ilustração: ' + HONOREE + " e " + display +
      ' pescando juntos em um barco, no fim da tarde">' +
      "<defs>" +
      '<linearGradient id="scSky" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="270">' +
      '<stop offset="0" stop-color="#17357e"/><stop offset="0.4" stop-color="#3d63b5"/><stop offset="0.72" stop-color="#f0a35a"/><stop offset="1" stop-color="#ffd978"/></linearGradient>' +
      '<linearGradient id="scWater" gradientUnits="userSpaceOnUse" x1="0" y1="262" x2="0" y2="420">' +
      '<stop offset="0" stop-color="#e2b05f"/><stop offset="0.25" stop-color="#4a70b3"/><stop offset="1" stop-color="#0d2f78"/></linearGradient>' +
      '<radialGradient id="scSun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fffbe0"/><stop offset="0.4" stop-color="#ffe07a" stop-opacity="0.85"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>' +
      "</defs>" +
      '<rect width="800" height="420" fill="url(#scSky)"/>' +
      '<circle cx="170" cy="246" r="120" fill="url(#scSun)"/>' +
      '<circle cx="170" cy="246" r="36" fill="#fff6c9"/>' +
      gulls +
      '<path d="M-20 266 C60 238 140 252 220 248 C320 242 380 260 470 252 C560 244 660 234 740 250 C780 257 820 252 830 254 L830 274 L-20 274Z" fill="#1b3a78" opacity="0.85"/>' +
      '<rect y="262" width="800" height="158" fill="url(#scWater)"/>' +
      reflect +
      '<g class="sc-wave" fill="none" stroke="#bcd3ff" stroke-width="2" stroke-linecap="round" opacity="0.35"><path d="' + wavePath(300, 7, 70, -80, 900) + '"/><path d="' + wavePath(392, 8, 84, -80, 900) + '"/></g>' +
      '<g class="sc-wave sc-wave--2" fill="none" stroke="#ffe9a8" stroke-width="2" stroke-linecap="round" opacity="0.28"><path d="' + wavePath(328, 6, 60, -80, 900) + '"/></g>' +
      sparkles +
      '<g transform="translate(660 352) rotate(-28)" class="sc-fish"><path d="M-14 0 Q0 -10 14 0 Q0 10 -14 0Z" fill="#cfe0ff"/><path d="M14 0 l10 -8 v16z" fill="#ffd21f"/><circle cx="-7" cy="-2" r="1.6" fill="#0a2a6b"/></g>' +
      // barco
      '<g class="sc-boat" transform="translate(400 300)">' +
      '<g transform="translate(-95 -4)">' + luis + "</g>" +
      '<g transform="translate(95 -4) scale(-1 1)">' + mate + "</g>" +
      '<path d="M-210 -4 L210 -4 Q188 54 122 64 L-122 64 Q-188 54 -210 -4Z" fill="#7a4a24"/>' +
      '<path d="M-196 28 Q0 38 196 28" stroke="rgba(0,0,0,0.25)" stroke-width="3" fill="none"/>' +
      '<path d="M-213 -6 L213 -6 L207 9 L-207 9Z" fill="#ffc83d"/>' +
      '<rect x="-46" y="24" width="92" height="26" rx="13" fill="#ffd21f"/>' +
      '<text x="0" y="42.500" text-anchor="middle" font-size="14" font-weight="800" letter-spacing="1" fill="#0a2a6b" style="font-family:Nunito,Arial,sans-serif">40 ANOS</text>' +
      "</g>" +
      // água na frente do barco
      '<path class="sc-wave sc-wave--2" d="' + wavePath(352, 6, 60, -80, 900, 420) + '" fill="url(#scWater)" stroke="#bcd3ff" stroke-opacity="0.55" stroke-width="2"/>' +
      "</svg>"
    );
  }

  /* ---------- Modal ---------- */

  const modal = $("#modal");
  const panel = modal ? $(".modal__panel", modal) : null;
  const state = { open: false, lastFocus: null, videoToken: 0 };

  function ensureExtraModalNodes() {
    // Linha com os dois nomes e foto opcional (criadas por script para manter o HTML simples).
    if (!$("#modalPair")) {
      const p = document.createElement("p");
      p.id = "modalPair";
      p.className = "modal__pair";
      const msg = $("#modalMessage");
      msg.parentNode.insertBefore(p, msg);
    }
    if (!$("#modalPhoto")) {
      const img = document.createElement("img");
      img.id = "modalPhoto";
      img.className = "modal__photo";
      img.hidden = true;
      img.decoding = "async";
      // Se o arquivo da foto não existir, esconde a imagem em vez de mostrar um ícone quebrado.
      img.addEventListener("error", function () { img.hidden = true; });
      const body = $(".modal__body");
      body.insertBefore(img, body.firstChild);
    }
  }

  function renderModalVideo(c, display) {
    const box = $("#modalVideo");
    unloadVideo(box);
    const info = parseDriveLink(c.videoUrl);
    if (info.status === "empty") {
      box.appendChild(buildNotice(MSG_PENDING_ITEM));
      return;
    }
    if (info.status === "invalid") {
      console.warn("[Mural] Link inválido no vídeo de " + c.name + " (videoUrl):", c.videoUrl);
      box.appendChild(buildNotice(MSG_INVALID_LINK));
      return;
    }
    box.appendChild(createIframe(info.embedUrl, "Depoimento de " + display));
    setAccessHelp(box, info);
    const token = state.videoToken;
    applyVideoFormat(box, info, c.videoFormat, function () {
      return !state.open || token !== state.videoToken;
    });
  }

  function openModal(index) {
    const c = collaborators[index];
    if (!c || !modal || !panel) return;

    ensureExtraModalNodes();
    const display = titleCase(c.name);

    state.lastFocus = document.activeElement;
    state.open = true;
    state.videoToken++;

    $("#modalScene").innerHTML = buildScene(c, index);
    $("#modalTitle").textContent = "Uma pescaria de boas lembranças com " + display;
    $("#modalPair").textContent = HONOREE + " e " + display + ": duas varas, um barco e muita história para contar.";
    $("#modalMessage").textContent = (c.message && c.message.trim()) || DEFAULT_MESSAGE;

    const photo = $("#modalPhoto");
    if (c.photo && c.photo.trim()) {
      photo.src = c.photo.trim();
      photo.alt = "Foto de " + display;
      photo.hidden = false;
    } else {
      photo.hidden = true;
      photo.removeAttribute("src");
      photo.alt = "";
    }

    renderModalVideo(c, display);

    modal.hidden = false;
    document.body.classList.add("modal-open");
    panel.scrollTop = 0;
    panel.focus({ preventScroll: true });
  }

  function closeModal() {
    if (!state.open) return;
    state.open = false;
    state.videoToken++;

    unloadVideo($("#modalVideo"));        // para o áudio e remove o iframe
    $("#modalScene").replaceChildren();   // libera a cena
    modal.hidden = true;
    document.body.classList.remove("modal-open");

    const back = state.lastFocus;
    state.lastFocus = null;
    if (back && typeof back.focus === "function" && document.contains(back)) {
      back.focus({ preventScroll: true });
    }
  }

  function trapTab(ev) {
    const items = Array.from(
      panel.querySelectorAll('button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.hidden && el.offsetParent !== null);
    if (!items.length) { ev.preventDefault(); panel.focus(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (ev.shiftKey && (active === first || active === panel)) {
      ev.preventDefault();
      last.focus();
    } else if (!ev.shiftKey && active === last) {
      ev.preventDefault();
      first.focus();
    }
  }

  function bindModal() {
    if (!modal) return;
    $("#modalClose").addEventListener("click", closeModal);
    $("#modalBack").addEventListener("click", closeModal); // o foco volta ao cartão aberto
    // Clique fora do conteúdo (no fundo escuro) fecha; cliques dentro do painel não.
    modal.addEventListener("click", function (ev) {
      if (ev.target && ev.target.dataset && ev.target.dataset.close === "true") closeModal();
    });
    document.addEventListener("keydown", function (ev) {
      if (!state.open) return;
      if (ev.key === "Escape") { ev.preventDefault(); closeModal(); }
      else if (ev.key === "Tab") trapTab(ev);
    });
  }

  /* ---------- Galeria de fotos (polaroids) e lightbox ---------- */

  const GALLERY_TILTS = [-4, 3, -2, 5, -5, 2, -3, 4]; // graus: alterna esquerda e direita
  // Caminho local de imagem (ex.: assets/galeria/pesca-01.jpg). URLs externas e "/" no início não passam.
  const LOCAL_IMG_RE = /^(?!\/|\.\.|[a-z][a-z0-9+.-]*:)[\w\-. /%À-ſ]+\.(?:jpe?g|png|webp|gif|avif)$/i;
  const FISH_SVG =
    '<svg viewBox="0 0 64 40" width="56" height="35" aria-hidden="true" focusable="false">' +
    '<path d="M6 20c8-12 22-14 34-4l12-8v24l-12-8C28 34 14 32 6 20z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<circle cx="16" cy="19" r="1.8" fill="currentColor"/></svg>';
  const MSG_PHOTO_LOADING = "Carregando foto…";
  const MSG_PHOTO_ERROR = "Não foi possível carregar esta foto agora. Confira se ela está compartilhada como “Qualquer pessoa com o link” no Google Drive.";

  // Aceita o ID puro de um arquivo do Drive ou um link de compartilhamento reconhecido.
  function parseDriveImageId(input) {
    if (typeof input !== "string") return "";
    const raw = input.trim();
    if (DRIVE_ID_RE.test(raw)) return raw;
    const info = parseDriveLink(raw);
    return info.status === "ok" ? info.id : "";
  }

  // Converte um ID ou link do Drive no endereço direto de imagem para a tag <img>.
  // Exemplo: "https://drive.google.com/uc?export=view&id=ID_DA_FOTO". Devolve "" se não for válido.
  function driveImageUrl(input) {
    const id = parseDriveImageId(input);
    return id ? "https://drive.google.com/uc?export=view&id=" + id : "";
  }

  // Lista de endereços a tentar, em ordem. Se o primeiro falhar, o próximo é usado.
  // "thumb" = miniatura leve para a galeria; "full" = foto grande para o lightbox.
  function drivePhotoSources(id, kind) {
    const direct = driveImageUrl(id);
    const thumb = function (w) { return "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + w; };
    return kind === "full" ? [direct, thumb(2000)] : [thumb(800), direct];
  }

  function normalizePhoto(entry, index) {
    const obj = typeof entry === "string" ? { photo: entry } : (entry && typeof entry === "object" ? entry : {});
    const raw = String(obj.photo || obj.src || obj.url || "").trim();
    const caption = String(obj.caption || "").trim();
    if (!raw) return { status: "empty", caption: caption };

    if (LOCAL_IMG_RE.test(raw)) {
      return { status: "ok", caption: caption, thumbSources: [raw], fullSources: [raw] };
    }
    const id = parseDriveImageId(raw);
    if (!id) {
      console.warn("[Mural] Foto inválida na galeria (item " + (index + 1) + " de galleryPhotos):", raw);
      return { status: "invalid", caption: caption };
    }
    return { status: "ok", caption: caption, thumbSources: drivePhotoSources(id, "thumb"), fullSources: drivePhotoSources(id, "full") };
  }

  // Carrega uma imagem tentando cada endereço da lista até um funcionar.
  function loadImage(img, sources, onFail, onLoad) {
    let i = 0;
    const seq = (img._seq = (img._seq || 0) + 1); // ignora respostas de cargas antigas
    img.dataset.state = "loading";
    img.onload = function () {
      if (img._seq !== seq) return;
      img.dataset.state = "loaded";
      if (onLoad) onLoad();
    };
    img.onerror = function () {
      if (img._seq !== seq) return;
      if (i < sources.length) {
        img.src = sources[i++];
      } else {
        img.onerror = null;
        img.dataset.state = "error";
        if (onFail) onFail();
      }
    };
    img.src = sources[i++];
  }

  const gallery = { items: [], current: -1, open: false, lastFocus: null };

  function renderGallery() {
    const grid = $("#galleryGrid");
    if (!grid) return;

    let items = (Array.isArray(galleryPhotos) ? galleryPhotos : []).map(normalizePhoto);
    if (!SHOW_GALLERY_PLACEHOLDERS) {
      items = items.filter(function (it) { return it.status === "ok"; });
    }
    gallery.items = items;

    const emptyMsg = $("#galleryEmpty");
    if (emptyMsg) emptyMsg.hidden = items.length > 0;

    const frag = document.createDocumentFragment();
    items.forEach(function (it, i) {
      const li = document.createElement("li");
      li.className = "gallery__item";
      li.style.setProperty("--rot", GALLERY_TILTS[i % GALLERY_TILTS.length] + "deg");
      li.style.setProperty("--dur", (6.5 + (i % 4) * 0.9).toFixed(1) + "s");
      li.style.setProperty("--delay", (-i * 0.8).toFixed(1) + "s");

      if (it.status === "ok") {
        const label = it.caption || "Foto " + (i + 1) + " da galeria";
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "polaroid";
        btn.dataset.index = String(i);
        btn.setAttribute("aria-haspopup", "dialog");
        btn.setAttribute("aria-label", "Ampliar foto: " + label);

        const photo = document.createElement("span");
        photo.className = "polaroid__photo";
        const img = document.createElement("img");
        img.alt = label;
        img.loading = "lazy";
        img.decoding = "async";
        img.draggable = false;
        img.referrerPolicy = "no-referrer";
        const fallback = document.createElement("span");
        fallback.className = "polaroid__fallback";
        fallback.textContent = "Foto indisponível";
        photo.append(img, fallback);

        const cap = document.createElement("span");
        cap.className = "polaroid__caption";
        cap.textContent = it.caption;

        btn.append(photo, cap);
        li.appendChild(btn);

        loadImage(img, it.thumbSources, function () {
          it.broken = true;
          btn.classList.add("is-broken");
          btn.disabled = true;
        });
      } else {
        const box = document.createElement("div");
        box.className = "polaroid polaroid--empty";
        box.innerHTML = '<span class="polaroid__photo polaroid__photo--empty">' + FISH_SVG + '<span class="polaroid__soon"></span></span><span class="polaroid__caption"></span>';
        $(".polaroid__soon", box).textContent = it.status === "invalid" ? "Foto indisponível" : "Foto em breve";
        li.appendChild(box);
      }
      frag.appendChild(li);
    });

    grid.replaceChildren(frag);
    grid.addEventListener("click", function (ev) {
      const btn = ev.target.closest(".polaroid[data-index]");
      if (btn && grid.contains(btn) && !btn.disabled) openLightbox(Number(btn.dataset.index), btn);
    });
  }

  // Índices das fotos que podem ser ampliadas (ignora vazias e as que falharam).
  function galleryNav() {
    const out = [];
    gallery.items.forEach(function (it, i) {
      if (it.status === "ok" && !it.broken) out.push(i);
    });
    return out;
  }

  function showGalleryPhoto(index) {
    const it = gallery.items[index];
    const fig = $("#lightboxFigure");
    const img = $("#lightboxImg");
    if (!it || it.status !== "ok" || !fig || !img) return;

    gallery.current = index;
    fig.classList.remove("is-error");
    fig.classList.add("is-loading");
    $("#lightboxStatus").textContent = MSG_PHOTO_LOADING;

    img.alt = it.caption || "Foto " + (index + 1) + " da galeria, ampliada";
    img.referrerPolicy = "no-referrer";
    $("#lightboxCaption").textContent = it.caption;

    const nav = galleryNav();
    const pos = nav.indexOf(index);
    $("#lightboxCount").textContent = nav.length > 1 && pos >= 0 ? (pos + 1) + " / " + nav.length : "";
    $("#lightboxPrev").hidden = nav.length < 2;
    $("#lightboxNext").hidden = nav.length < 2;

    loadImage(
      img,
      it.fullSources,
      function () {
        fig.classList.remove("is-loading");
        fig.classList.add("is-error");
        $("#lightboxStatus").textContent = MSG_PHOTO_ERROR;
      },
      function () { fig.classList.remove("is-loading"); }
    );
  }

  function openLightbox(index, trigger) {
    const root = $("#lightbox");
    if (!root) return;
    gallery.lastFocus = trigger || document.activeElement;
    gallery.open = true;
    root.hidden = false;
    document.body.classList.add("lightbox-open");
    showGalleryPhoto(index);
    const closeBtn = $("#lightboxClose");
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  }

  function closeLightbox() {
    if (!gallery.open) return;
    gallery.open = false;

    const img = $("#lightboxImg");
    if (img) {
      img._seq = (img._seq || 0) + 1; // cancela qualquer carga em andamento
      img.onload = null;
      img.onerror = null;
      img.removeAttribute("src");
      img.dataset.state = "";
    }
    const root = $("#lightbox");
    if (root) root.hidden = true;
    document.body.classList.remove("lightbox-open");

    const back = gallery.lastFocus;
    gallery.lastFocus = null;
    if (back && typeof back.focus === "function" && document.contains(back)) {
      back.focus({ preventScroll: true });
    }
  }

  function stepLightbox(delta) {
    const nav = galleryNav();
    if (nav.length < 2) return;
    const pos = nav.indexOf(gallery.current);
    const next = pos < 0 ? nav[0] : nav[(pos + delta + nav.length) % nav.length];
    showGalleryPhoto(next);
  }

  function trapLightboxTab(ev) {
    const root = $("#lightbox");
    const items = Array.from(root.querySelectorAll("button")).filter(function (el) { return !el.hidden; });
    if (!items.length) { ev.preventDefault(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (ev.shiftKey && (active === first || !root.contains(active))) {
      ev.preventDefault();
      last.focus();
    } else if (!ev.shiftKey && (active === last || !root.contains(active))) {
      ev.preventDefault();
      first.focus();
    }
  }

  function bindLightbox() {
    const root = $("#lightbox");
    if (!root) return;

    $("#lightboxClose").addEventListener("click", closeLightbox);
    $("#lightboxPrev").addEventListener("click", function () { stepLightbox(-1); });
    $("#lightboxNext").addEventListener("click", function () { stepLightbox(1); });

    // Clique fora da foto (no fundo escuro) fecha; clique na foto ou nos botões não fecha.
    root.addEventListener("click", function (ev) {
      if (ev.target && ev.target.dataset && ev.target.dataset.close === "true") closeLightbox();
    });

    document.addEventListener("keydown", function (ev) {
      if (!gallery.open) return;
      if (ev.key === "Escape") { ev.preventDefault(); closeLightbox(); }
      else if (ev.key === "ArrowLeft") { ev.preventDefault(); stepLightbox(-1); }
      else if (ev.key === "ArrowRight") { ev.preventDefault(); stepLightbox(1); }
      else if (ev.key === "Tab") trapLightboxTab(ev);
    });

    // Deslizar o dedo para os lados troca de foto no celular.
    let tx = 0, ty = 0;
    root.addEventListener("touchstart", function (ev) {
      const t = ev.changedTouches[0];
      tx = t.clientX; ty = t.clientY;
    }, { passive: true });
    root.addEventListener("touchend", function (ev) {
      const t = ev.changedTouches[0];
      const dx = t.clientX - tx, dy = t.clientY - ty;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) stepLightbox(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  /* ---------- Navegação ---------- */

  function bindHero() {
    const btn = $("#btnExplorar");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const target = $("#video");
      if (target) target.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
    });
  }

  /* ---------- Início ---------- */

  function init() {
    renderMainVideo();
    renderMural();
    renderGallery();
    bindModal();
    bindLightbox();
    bindHero();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();