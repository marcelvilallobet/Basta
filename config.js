/*
 * CAMPAÑA PUBLICADA
 * Cambia solamente "verano" por "black-friday" o "navidad".
 */
window.BASTA_SITE = {
  activeCampaign: "verano",
  allowedCampaigns: ["verano", "black-friday", "navidad"]
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
