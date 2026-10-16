/* Borderless Buying House — basic FAQ + address bot (no backend, rule-based).
   Included on every page via <script src="assets/chatbot.js" defer></script> */
(function () {
  var SITE = {
    name: "Borderless Buying House",
    tagline: "Sourcing Beyond Borders",
    address: "Duraisamy Nagar, Thirumurugan Poondi, Avinashi Road, Tiruppur-641652",
    email: "info@borderlessbuyinghouse.com",
    phone: "+91 890 30 771 83",
    phoneLink: "+918903077183"
  };

  var FAQS = [
    { keys: ["address", "location", "where", "office", "reach", "tiruppur", "tirupur", "situated", "place"],
      reply: "Our buying office is at:<br><b>" + SITE.address + "</b><br>India Buying Office | Tiruppur, India." },
    { keys: ["email", "mail", "e-mail"],
      reply: "You can mail us at <b>" + SITE.email + "</b> — <a href='mailto:" + SITE.email + "'>" + SITE.email + "</a>." },
    { keys: ["phone", "mobile", "call", "contact", "number", "whatsapp"],
      reply: "Call us at <b>" + SITE.phone + "</b> — <a href='tel:" + SITE.phoneLink + "'>" + SITE.phone + "</a>." },
    { keys: ["service", "offer", "what do you do", "work", "help"],
      reply: "We handle: Supplier Sourcing &amp; Selection, Product &amp; Sample Development, Costing &amp; Price Negotiation, Quality &amp; Compliance Coordination, Order Follow-up &amp; Production Monitoring, Shipment &amp; Documentation Coordination. See the <a href='services.html'>Services page</a> for all 8 services in detail." },
    { keys: ["cost", "price", "pricing", "charge", "fee", "commission", "costing"],
      reply: "We coordinate transparent costing and competitive price negotiations based on your product, quality, quantity and delivery needs. Share your requirement on the <a href='enquiry.html'>Enquiry page</a> for a quote." },
    { keys: ["sample", "sampling", "prototype"],
      reply: "Yes — we manage sample development, size-set coordination, buyer feedback and approvals to fix a clear benchmark for bulk production." },
    { keys: ["quality", "inspection", "inspect", "qc", "assurance", "defect"],
      reply: "We coordinate quality checks from pre-production through final inspection against approved specifications — Receiving Enquiry → Vendor Verify → Production Follow-up → Quality Inspect → Shipment." },
    { keys: ["order", "production", "follow", "track", "status", "lead time", "delivery", "timeline"],
      reply: "We track order progress, materials, production schedules and time-and-action plans with clear buyer–manufacturer communication. For a live order status, please <a href='enquiry.html'>send an enquiry</a> with your order reference." },
    { keys: ["shipment", "shipping", "dispatch", "document", "export", "logistic"],
      reply: "We coordinate export documentation, packing requirements, dispatch schedules and shipment follow-up for smooth, timely delivery." },
    { keys: ["supplier", "vendor", "manufacturer", "factory", "verify", "verification"],
      reply: "We identify and verify reliable manufacturers across Tiruppur and India matched to your product, quality, quantity, price and delivery requirements." },
    { keys: ["enquiry", "enquire", "quote", "quotation", "start", "begin", "join", "register"],
      reply: "To start, fill the <a href='enquiry.html'>Enquiry form</a> (First/Last name, Subject, Product, Email, Phone, Message) or mail <b>" + SITE.email + "</b>." },
    { keys: ["product", "garment", "t-shirt", "tshirt", "knitwear", "woven", "kids", "sportswear", "fashion", "trims"],
      reply: "We source T-Shirts &amp; Knitwear, Woven Garments, Kids Wear, Sportswear, Fashion Apparel, Trims &amp; Accessories from Tiruppur and across India." },
    { keys: ["founder", "owner", "who runs", "sabarinathan", "about", "company", "buying house"],
      reply: "<b>" + SITE.name + "</b> (" + SITE.tagline + ") is a founder-led India buying office in Tiruppur run by <b>Mr. Sabarinathan M.R.</b>, Founder &amp; Global Apparel Sourcing Specialist with 10–12 years in apparel sourcing &amp; merchandising. More on the <a href='about.html'>About page</a>." },
    { keys: ["hour", "timing", "open", "working"],
      reply: "We are based in Tiruppur, India (IST). Write anytime at <b>" + SITE.email + "</b> or call <b>" + SITE.phone + "</b> — the team responds on business days." },
    { keys: ["hi", "hello", "hey", "vanakkam", "good morning", "good afternoon", "good evening"],
      reply: "Hello! Welcome to <b>" + SITE.name + "</b>. Ask me about our address, contact, services, sampling, quality, or how to send an enquiry." },
    { keys: ["thank", "thanks", "ok", "bye"],
      reply: "You're welcome! For anything detailed, reach us at <b>" + SITE.email + "</b> or <b>" + SITE.phone + "</b>." }
  ];
  var FALLBACK = "I can answer basic questions about our <b>address, contact, services, sampling, quality, costing</b> and <b>how to enquire</b>. For details, mail <b>" + SITE.email + "</b> or use the <a href='enquiry.html'>Enquiry page</a>.";

  function answer(q) {
    q = " " + q.toLowerCase() + " ";
    var best = null, bestScore = 0;
    for (var i = 0; i < FAQS.length; i++) {
      var s = 0;
      for (var j = 0; j < FAQS[i].keys.length; j++) {
        if (q.indexOf(FAQS[i].keys[j]) !== -1) s += FAQS[i].keys[j].length;
      }
      if (s > bestScore) { bestScore = s; best = FAQS[i]; }
    }
    return best ? best.reply : FALLBACK;
  }

  var css = ".bbh-bot-btn{position:fixed;right:20px;bottom:20px;z-index:9999;width:70px;height:70px;border-radius:50%;background:transparent;border:none;cursor:pointer;box-shadow:none;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}.bbh-bot-btn:hover{transform:none}.bbh-bot-btn{padding:0;overflow:hidden}.bbh-bot-btn img{width:100%;height:100%;object-fit:cover;display:block;filter:drop-shadow(0 8px 14px rgba(0,0,0,.45))}"
    + ".bbh-bot-panel{position:fixed;right:20px;bottom:88px;z-index:9999;width:min(360px,calc(100vw - 40px));height:480px;max-height:70vh;background:#fff;border-radius:16px;overflow:hidden;display:none;flex-direction:column;box-shadow:0 24px 60px rgba(0,0,0,.4);border:1px solid rgba(197,160,89,.4)}"
    + ".bbh-bot-panel.open{display:flex;animation:bbhPop .35s cubic-bezier(.22,1,.36,1)}@keyframes bbhPop{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}"
    + ".bbh-bot-head{background:#002e26;color:#fff;padding:13px 15px;font-weight:800;font-size:14px;display:flex;align-items:center;gap:10px}.bbh-bot-head img{width:32px;height:32px;border-radius:8px;background:#000}.bbh-bot-head small{display:block;color:#c5a059;font-weight:600;font-size:11px}"
    + ".bbh-bot-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:#f4f6f5;font-size:13.5px}"
    + ".bbh-msg{max-width:85%;padding:9px 12px;border-radius:12px;line-height:1.45}.bbh-msg a{color:#004d40;font-weight:700}"
    + ".bbh-bot-msg{background:#fff;border:1px solid #e2e8e6;border-bottom-left-radius:3px;align-self:flex-start;color:#1f2937}"
    + ".bbh-user-msg{background:#004d40;color:#fff;border-bottom-right-radius:3px;align-self:flex-end}"
    + ".bbh-chips{display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px;background:#f4f6f5;border-top:1px solid #e5e7eb}"
    + ".bbh-chip{background:#fff;border:1px solid #c5a059;color:#004d40;font-size:12px;font-weight:700;border-radius:99px;padding:5px 11px;cursor:pointer;transition:all .25s}.bbh-chip:hover{background:#c5a059;color:#002e26}"
    + ".bbh-input-row{display:flex;gap:8px;padding:10px 12px;background:#fff;border-top:1px solid #e5e7eb}"
    + ".bbh-input-row input{flex:1;border:1px solid #d1d5db;border-radius:10px;padding:9px 12px;font-size:13.5px;outline:none}.bbh-input-row input:focus{border-color:#c5a059;box-shadow:0 0 0 3px rgba(197,160,89,.25)}"
    + ".bbh-input-row button{background:#004d40;color:#fff;border:none;border-radius:10px;padding:0 15px;font-size:16px;cursor:pointer}.bbh-input-row button:hover{background:#c5a059;color:#002e26}"
    + ".bbh-bot-hi{position:fixed;right:100px;bottom:34px;z-index:9998;max-width:235px;background:#fff;border:1px solid #c5a059;border-radius:14px;border-bottom-right-radius:4px;padding:10px 32px 10px 13px;font-size:13px;color:#1f2937;box-shadow:0 14px 34px rgba(0,0,0,.28);cursor:pointer;display:none}"
    + ".bbh-bot-hi.show{display:block;animation:bbhHi .45s cubic-bezier(.22,1,.36,1),bbhFloat 3s ease-in-out .45s infinite}"
    + "@keyframes bbhHi{from{opacity:0;transform:translateY(10px) scale(.95)}to{opacity:1;transform:none}}"
    + "@keyframes bbhFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}"
    + ".bbh-bot-hi b{color:#004d40}.bbh-bot-hi span{display:block;color:#6b7280;font-size:12px;margin-top:2px}"
    + ".bbh-hi-x{position:absolute;top:5px;right:9px;font-style:normal;color:#9ca3af;font-size:12px;cursor:pointer}.bbh-hi-x:hover{color:#004d40}";

  function init() {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var btn = document.createElement("button");
    btn.className = "bbh-bot-btn"; btn.setAttribute("aria-label", "Chat with us"); btn.innerHTML = "<img src='assets/avt_cht-removebg-preview.png' alt='Chat'>";
    var panel = document.createElement("div"); panel.className = "bbh-bot-panel"; panel.id = "bbh-bot-panel";
    panel.innerHTML = "<div class='bbh-bot-head'><img src='assets/avt_cht-removebg-preview.png' onerror=\"this.onerror=null;this.src='assets/logo.webp'\" alt='BBH'><div>" + SITE.name + "<small>" + SITE.tagline + " · typically replies instantly</small></div></div>"
      + "<div class='bbh-bot-msgs' id='bbh-bot-msgs'></div>"
      + "<div class='bbh-chips' id='bbh-bot-chips'></div>"
      + "<div class='bbh-input-row'><input id='bbh-bot-input' type='text' placeholder='Ask about address, services…' autocomplete='off'><button id='bbh-bot-send' aria-label='Send'>➤</button></div>";
    document.body.appendChild(btn); document.body.appendChild(panel);
    var msgs = panel.querySelector("#bbh-bot-msgs");

    function addMsg(html, who) {
      var d = document.createElement("div");
      d.className = "bbh-msg " + (who === "user" ? "bbh-user-msg" : "bbh-bot-msg");
      d.innerHTML = html; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    }
    function ask(text) {
      text = (text || "").trim(); if (!text) return;
      addMsg(text.replace(/</g, "&lt;"), "user");
      setTimeout(function () { addMsg(answer(text), "bot"); }, 350);
    }
    var chips = ["📍 Address", "📞 Contact", "🧵 Services", "📝 Send Enquiry"];
    var chipBox = panel.querySelector("#bbh-bot-chips");
    chips.forEach(function (c) {
      var b = document.createElement("button"); b.className = "bbh-chip"; b.textContent = c;
      b.onclick = function () { ask(c.replace(/^[^\s]+\s/, "")); }; chipBox.appendChild(b);
    });
    var input = panel.querySelector("#bbh-bot-input");
    panel.querySelector("#bbh-bot-send").onclick = function () { ask(input.value); input.value = ""; input.focus(); };
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") { ask(input.value); input.value = ""; } });
    var hi = document.createElement("div"); hi.className = "bbh-bot-hi";
    hi.innerHTML = "<b>Hi! I'm your helper</b><span>Ask about address, services, enquiry…</span><i class='bbh-hi-x'>✕</i>";
    document.body.appendChild(hi);
    hi.querySelector(".bbh-hi-x").onclick = function (e) { e.stopPropagation(); hi.classList.remove("show"); };
    hi.onclick = function () { if (!panel.classList.contains("open")) btn.onclick(); };
    setTimeout(function () { if (!panel.classList.contains("open")) hi.classList.add("show"); }, 2500);
    btn.onclick = function () {
      panel.classList.toggle("open"); hi.classList.remove("show");
      var isOpen = panel.classList.contains("open");
      btn.innerHTML = isOpen ? "✕" : "<img src='assets/avt_cht-removebg-preview.png' alt='Chat'>";
      btn.style.background = isOpen ? "#c5a059" : "transparent";
      btn.style.color = "#002e26"; btn.style.fontSize = "24px";
      if (panel.classList.contains("open") && !msgs.children.length) {
        addMsg("Hello! I'm the <b>" + SITE.name + "</b> assistant. Ask me about our <b>address, contact, services</b> or <b>how to enquire</b>.", "bot");
      }
    };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
