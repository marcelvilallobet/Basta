(function () {
  "use strict";

  var campaigns = {
    verano: {
      name: "Verano",
      icon: "\u2600\uFE0F",
      announcement: "\u2600\uFE0F Descuento de verano activo \u2014 \u00A1El juego perfecto para sobremesas y vacaciones!",
      badge: "OFERTA VERANO",
      productTail: "Perfecto para cenas, sobremesas y vacaciones. Desde los m\u00E1s peque\u00F1os hasta los m\u00E1s competitivos.",
      offerTitle: "\u2600\uFE0F Descuento de Verano",
      offerBody: "Una vez termine el descuento, el precio del producto volver\u00E1 a su valor original de \u20AC22,98. \u00A1Aprovecha la oferta de verano!",
      ctaTitle: "\u00BFListos para jugar?",
      ctaText: "Ll\u00E9vate el juego favorito de las sobremesas con un 18% de descuento durante nuestra campa\u00F1a de verano."
    },
    "black-friday": {
      name: "Black Friday",
      icon: "\u26A1",
      announcement: "\u26A1 BLACK FRIDAY \u2014 Basta Juego ahora por \u20AC18,98",
      badge: "BLACK FRIDAY",
      productTail: "La excusa perfecta para reunir a familia y amigos. Aprovecha nuestra campa\u00F1a m\u00E1s esperada del a\u00F1o.",
      offerTitle: "\u26A1 Oferta Black Friday",
      offerBody: "Precio especial Black Friday: \u20AC18,98 en lugar de \u20AC22,98. Compra directamente mediante nuestro pago seguro con Stripe.",
      ctaTitle: "El Black Friday se juega en familia",
      ctaText: "Consigue Basta Juego con un 18% de descuento y convierte cualquier sobremesa en una competici\u00F3n inolvidable."
    },
    navidad: {
      name: "Navidad",
      icon: "\uD83C\uDF84",
      announcement: "\uD83C\uDF84 Esta Navidad, regala risas, retos y sobremesas inolvidables",
      badge: "OFERTA NAVIDAD",
      productTail: "Perfecto para regalar y estrenar en Navidad. Un juego para peque\u00F1os, mayores y los m\u00E1s competitivos de la familia.",
      offerTitle: "\uD83C\uDF81 Descuento de Navidad",
      offerBody: "Estas fiestas, consigue Basta Juego por \u20AC18,98 en lugar de \u20AC22,98. Un regalo f\u00E1cil de aprender e imposible de soltar.",
      ctaTitle: "El regalo que re\u00FAne a todos",
      ctaText: "Pon Basta Juego debajo del \u00E1rbol y prepara una Navidad llena de risas, velocidad y piques en familia."
    }
  };

  function applyCampaign() {
    var selected = window.BASTA_ACTIVE_CAMPAIGN || "verano";
    var campaign = campaigns[selected] || campaigns.verano;

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
