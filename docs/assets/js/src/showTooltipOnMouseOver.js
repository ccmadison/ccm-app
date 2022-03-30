function toggleTooltip(e) {
  const tooltip = toggleTooltip.tooltip;

  if (e.type == 'mouseenter') {
    tooltip.show();
  } else {
    tooltip.hide();
  }
}

function showTooltipOnMouseOver(Tooltip) {
  const TOGGLER = document.getElementById('themeToggle');
  const tooltip = Tooltip.getOrCreateInstance(TOGGLER);

  toggleTooltip.tooltip = tooltip;
  TOGGLER.addEventListener('mouseenter', toggleTooltip);
  TOGGLER.addEventListener('mouseleave', toggleTooltip)
}

export default showTooltipOnMouseOver;