/*
 * CAMPAÑA PUBLICADA
 * Cambia solamente el valor por una de las campañas permitidas.
 */
window.BASTA_SITE = {
  activeCampaign: "otono",
  allowedCampaigns: ["verano", "otono", "black-friday", "cyber-monday", "navidad"]
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
