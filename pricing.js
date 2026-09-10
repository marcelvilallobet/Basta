(function () {
  "use strict";

  var pricing = window.BASTA_SITE.pricing;
  var pack2Price = (pricing.unitPrice * 2) - pricing.pack2.secondUnitReduction;
  var pack2Ready = pricing.pack2.enabled && /^https:\/\/buy\.stripe\.com\//.test(pricing.pack2.stripeUrl);

  function formatMoney(value) {
    return new Intl.NumberFormat(pricing.locale, {
      style: "currency",
      currency: pricing.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  var values = {
    unitPrice: pricing.unitPrice,
    pack2Price: pack2Price,
    packSaving: pricing.pack2.secondUnitReduction,
    unitPriceLabel: formatMoney(pricing.unitPrice),
    pack2PriceLabel: formatMoney(pack2Price),
    packSavingLabel: formatMoney(pricing.pack2.secondUnitReduction)
  };

  window.BASTA_PRICING = values;
  window.BASTA_FORMAT_CAMPAIGN_TEXT = function (text) {
    return text
      .replaceAll("{unitPrice}", values.unitPriceLabel)
      .replaceAll("{pack2Price}", values.pack2PriceLabel)
      .replaceAll("{packSaving}", values.packSavingLabel);
  };

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.textContent = value;
    });
  }

  function selectPurchaseOption(option) {
    var usePack = option === "pack2" && pack2Ready;
    var selectedPrice = usePack ? values.pack2Price : values.unitPrice;
    var selectedUrl = usePack ? pricing.pack2.stripeUrl : pricing.unitStripeUrl;
    var selectedQuantity = usePack ? 2 : 1;

    document.querySelectorAll("[data-purchase-option]").forEach(function (button) {
      var active = button.dataset.purchaseOption === (usePack ? "pack2" : "unit");
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.querySelectorAll("[data-buy-button]").forEach(function (link) {
      link.href = selectedUrl;
      link.dataset.checkoutValue = String(selectedPrice);
      link.dataset.checkoutQuantity = String(selectedQuantity);
    });

    setText("[data-selected-price]", formatMoney(selectedPrice));
    setText("[data-selected-quantity]", String(selectedQuantity));
  }

  function applyPricing() {
    setText("[data-unit-price]", values.unitPriceLabel);
    setText("[data-pack2-price]", values.pack2PriceLabel);
    setText("[data-pack-saving]", values.packSavingLabel);

    var options = document.querySelector("[data-purchase-options]");
    if (options && pack2Ready) options.hidden = false;

    document.querySelectorAll("[data-purchase-option]").forEach(function (button) {
      button.addEventListener("click", function () {
        selectPurchaseOption(button.dataset.purchaseOption);
      });
    });

    selectPurchaseOption("unit");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyPricing);
  } else {
    applyPricing();
  }
})();
