// Fills in the mentorship partner's name from the link, e.g. mentorship.html?with=Emma%20K.
// Mark spots in the HTML with data-name:
//   data-name="full"       -> Emma K.
//   data-name="first"      -> Emma
//   data-name="possessive" -> Emma's
// Without ?with=..., the text written in the HTML stays as the fallback.
(function () {
  const full = (new URLSearchParams(location.search).get("with") || "").trim();
  if (!full) return;
  const first = full.split(/\s+/)[0];
  const forms = { full: full, first: first, possessive: first + "’s" };

  document.querySelectorAll("[data-name]").forEach(el => {
    el.textContent = forms[el.dataset.name] || full;
  });
  document.querySelectorAll("[data-name-label]").forEach(el => {
    el.setAttribute("aria-label", el.dataset.nameLabel.replace("{first}", first));
  });
})();
