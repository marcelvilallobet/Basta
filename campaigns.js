(function () {
  "use strict";

  var campaigns = {
    verano: {
      name: "Verano",
      icon: "\u2600\uFE0F",
      announcement: "\u2600\uFE0F Verano BastaPlay \u2014 el juego perfecto para sobremesas y vacaciones",
      badge: "VERANO",
      productTail: "Perfecto para cenas, sobremesas y vacaciones. Desde los m\u00E1s peque\u00F1os hasta los m\u00E1s competitivos.",
      offerTitle: "\u2600\uFE0F Modo Verano",
      offerBody: "Basta Juego mantiene su precio habitual de \u20AC18,98. Prep\u00E1ralo para vacaciones, cenas y sobremesas sin pantallas.",
      ctaTitle: "\u00BFListos para jugar?",
      ctaText: "Ll\u00E9vate el juego favorito de las sobremesas y convierte cualquier reuni\u00F3n en una competici\u00F3n inolvidable."
    },
    otono: {
      name: "Oto\u00F1o",
      icon: "\uD83C\uDF42",
      announcement: "\uD83C\uDF42 Vuelven las sobremesas \u2014 vuelve BastaPlay",
      badge: "OTO\u00D1O",
      productTail: "Perfecto para tardes en casa, cenas con amigos y sobremesas en familia. F\u00E1cil de aprender e imposible de soltar.",
      offerTitle: "\uD83C\uDF42 Temporada de Oto\u00F1o",
      offerBody: "Basta Juego mantiene su precio habitual de \u20AC18,98. Una excusa perfecta para volver a reunir a todos alrededor de la mesa.",
      ctaTitle: "Las mejores tardes empiezan con Basta",
      ctaText: "Una letra, varias categor\u00EDas y todos intentando responder primero. Este oto\u00F1o, vuelve a jugar en familia."
    },
    "black-friday": {
      name: "Black Friday",
      icon: "\u26A1",
      announcement: "\u26A1 BLACK FRIDAY \u2014 Basta Juego ahora por \u20AC18,98",
      badge: "BLACK FRIDAY",
      productTail: "La excusa perfecta para reunir a familia y amigos durante la semana m\u00E1s intensa del a\u00F1o.",
      offerTitle: "\u26A1 Black Friday BastaPlay",
      offerBody: "Basta Juego mantiene su precio habitual de \u20AC18,98 y el mismo pago seguro con Stripe.",
      ctaTitle: "El Black Friday se juega en familia",
      ctaText: "Consigue Basta Juego y convierte cualquier sobremesa en una competici\u00F3n inolvidable."
    },
    "cyber-monday": {
      name: "Cyber Monday",
      icon: "\uD83D\uDCBB",
      announcement: "\uD83D\uDCBB CYBER MONDAY \u2014 \u00FAltima llamada para jugar en familia",
      badge: "CYBER MONDAY",
      productTail: "De la pantalla a la mesa: desconecta, re\u00FAne a los tuyos y demuestra qui\u00E9n responde m\u00E1s r\u00E1pido.",
      offerTitle: "\uD83D\uDCBB Cyber Monday BastaPlay",
      offerBody: "Basta Juego mantiene su precio habitual de \u20AC18,98 y el mismo pago seguro con Stripe.",
      ctaTitle: "Apaga la pantalla. Empieza la partida.",
      ctaText: "Cyber Monday tambi\u00E9n puede terminar alrededor de una mesa. Consigue Basta Juego y reta a toda la familia."
    },
    navidad: {
      name: "Navidad",
      icon: "\uD83C\uDF84",
      announcement: "\uD83C\uDF84 Esta Navidad, regala risas, retos y sobremesas inolvidables",
      badge: "NAVIDAD",
      productTail: "Perfecto para regalar y estrenar en Navidad. Un juego para peque\u00F1os, mayores y los m\u00E1s competitivos de la familia.",
      offerTitle: "\uD83C\uDF81 Navidad con BastaPlay",
      offerBody: "Basta Juego mantiene su precio habitual de \u20AC18,98. Un regalo f\u00E1cil de aprender e imposible de soltar.",
      ctaTitle: "El regalo que re\u00FAne a todos",
      ctaText: "Pon Basta Juego debajo del \u00E1rbol y prepara una Navidad llena de risas, velocidad y piques en familia."
    }
  };

  function applyCampaign() {
    var selected = window.BASTA_ACTIVE_CAMPAIGN || "otono";
    var campaign = campaigns[selected] || campaigns.otono;

    document.querySelectorAll("[data-campaign-text]").forEach(function (element) {
      var key = element.dataset.campaignText;
      if (campaign[key]) element.textContent = campaign[key];
    });

    document.querySelectorAll("[data-campaign-name]").forEach(function (element) {
      element.textContent = campaign.icon + " " + campaign.name;
    });

    var requested = new URLSearchParams(window.location.search).get("theme");
    if (requested && requested !== window.BASTA_SITE.activeCampaign && campaigns[requested]) {
      var preview = document.createElement("div");
      preview.className = "campaign-preview-badge";
      preview.textContent = "Vista previa \u00B7 " + campaign.name;
      preview.setAttribute("role", "status");
      document.body.appendChild(preview);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyCampaign);
  } else {
    applyCampaign();
  }
})();
