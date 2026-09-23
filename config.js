/*
 * CAMPAÑA PUBLICADA
 * Cambia solamente el valor por una de las campañas permitidas.
 */
window.BASTA_SITE = {
  activeCampaign: "otono",
  allowedCampaigns: ["verano", "otono", "black-friday", "cyber-monday", "navidad"],

  /*
   * PRECIO Y CHECKOUT
   * unitPrice es el único precio base que hay que modificar en la web.
   * El pack de 2 se calcula así: (unitPrice × 2) − secondUnitReduction.
   */
  pricing: {
    currency: "EUR",
    locale: "es-ES",
    unitPrice: 18.98,
    unitStripeUrl: "https://buy.stripe.com/cNi28tfDW7yneyq0WI5kk00",
    pack2: {
      enabled: true,
      secondUnitReduction: 4,
      stripeUrl: ""
    }
  }
};

(function selectCampaign() {
  var configured = window.BASTA_SITE.activeCampaign;
  var requested = new URLSearchParams(window.location.search).get("theme");
  var selected = window.BASTA_SITE.allowedCampaigns.indexOf(requested) !== -1
    ? requested
    : configured;

  window.BASTA_ACTIVE_CAMPAIGN = selected;
  document.documentElement.dataset.campaign = selected;
})();
