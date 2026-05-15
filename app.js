

const SEASON_DATES = {
  yearRound: "Year-Round runs May 1, 2026 – Apr 30, 2027.",
  summer:    "Summer runs May 1 – Oct 31, 2026.",
  winter:    "Winter runs Nov 1, 2026 – Apr 30, 2027."
};

const state = {
  season: "yearRound",
  expanded: {}
};

function priceHTML(tier, season) {
  const p = tier.pricing[season];

  
  if (p === null) {
    return `
      <div class="price unavailable">
        <span class="amount">Seasonal only</span>
        <span class="sub">Available in Summer or Winter</span>
      </div>
    `;
  }

  const total = p.total !== null
    ? `<span class="sub">$${p.total} ${p.totalLabel}</span>`
    : (p.note ? `<span class="sub">${p.note}</span>` : "");

  return `
    <div class="price">
      <span class="amount">$${p.monthly}</span><span class="per">/mo</span>
      ${total}
    </div>
  `;
}

function benefitsHTML(tier) {
  const items = tier.benefits.map(b => {
    const value = b.value || "Not included";
    return `<dt>${b.label}</dt><dd>${value}</dd>`;
  }).join("");

  return `<div class="benefits"><dl>${items}</dl></div>`;
}

function cardHTML(tier) {
  const isOpen = !!state.expanded[tier.id];
  const btnLabel = isOpen ? "Hide benefits" : "See benefits";

  return `
    <article class="card" data-tier="${tier.id}">
      <h3>${tier.name}</h3>
      <p class="tagline">${tier.tagline}</p>
      ${priceHTML(tier, state.season)}
      <button class="expand-btn" data-action="toggle">${btnLabel}</button>
      ${isOpen ? benefitsHTML(tier) : ""}
    </article>
  `;
}

function render() {
  const cardsEl = document.querySelector(".cards");
  cardsEl.innerHTML = TIERS.map(cardHTML).join("");

  document.getElementById("season-dates").textContent = SEASON_DATES[state.season];

  document.querySelectorAll(".season-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.season === state.season);
  });
}

function onSeasonClick(e) {
  const btn = e.target.closest(".season-btn");
  if (!btn) return;
  state.season = btn.dataset.season;
  render();
}

function onCardsClick(e) {
  const btn = e.target.closest("[data-action='toggle']");
  if (!btn) return;
  const card = btn.closest(".card");
  const id = card.dataset.tier;
  state.expanded[id] = !state.expanded[id];
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  document.querySelector(".season-toggle").addEventListener("click", onSeasonClick);
  document.querySelector(".cards").addEventListener("click", onCardsClick);
});
