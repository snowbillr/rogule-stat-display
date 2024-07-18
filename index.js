;(function(oldConsole) {
  const shieldEl = document.createElement('img')
  shieldEl.style.cssText = 'width: 28px; height: 28px; margin-right: 8px; vertical-align: middle;'
  shieldEl.src =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0NDRDZERCIgZD0iTTMzIDNjLTctMy0xNS0zLTE1LTNTMTAgMCAzIDNDMCAxOCAzIDMxIDE4IDM2YzE1LTUgMTgtMTggMTUtMzN6Ii8+PHBhdGggZmlsbD0iIzU1QUNFRSIgZD0iTTE4IDMzLjg4NEM2LjQxMiAyOS43MjkgMS45NjEgMTkuODMxIDQuNzYgNC40NDQgMTEuMDYzIDIuMDI5IDE3LjkyOCAyIDE4IDJjLjA3MSAwIDYuOTU4LjA0IDEzLjI0IDIuNDQ0IDIuNzk5IDE1LjM4Ny0xLjY1MiAyNS4yODUtMTMuMjQgMjkuNDR6Ii8+PHBhdGggZmlsbD0iIzI2OSIgZD0iTTMxLjI0IDQuNDQ0QzI0Ljk1OCAyLjA0IDE4LjA3MSAyIDE4IDJ2MzEuODg0YzExLjU4OC00LjE1NSAxNi4wMzktMTQuMDUzIDEzLjI0LTI5LjQ0eiIvPjwvc3ZnPg=='
  const swordEl = document.createElement('img')
  swordEl.style.cssText = 'width: 28px; height: 28px; margin-right: 8px; vertical-align: middle;'
  swordEl.src = ''
  const statsEl = document.createElement('div')
  statsEl.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px;
    border-radius: 4px;
        border: 2px solid #AAB8C2;
    border-bottom: 5px solid #AAB8C2;
    background-color: #D4E1EA;
  `
  document.body.appendChild(statsEl)

  let armor = 0
  let damage = 0
  renderStats()

  _addItemPickupListener((item => {
    armor += item.armour ?? 0
    damage += item.damage ?? 0

    renderStats()
  }))

  function renderStats() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
    while (statsEl.firstChild) {
      statsEl.removeChild(statsEl.firstChild);
    }

    const armorValue = document.createElement('span')
    armorValue.style.cssText = 'vertical-align: middle;'
    armorValue.textContent = `+${armor}`
    const armorStat = document.createElement('div')
    armorStat.appendChild(shieldEl)
    armorStat.appendChild(armorValue)

    const damageValue = document.createElement('span')
    damageValue.style.cssText = 'vertical-align: middle;'
    damageValue.textContent = `+${damage}`
    const damageStat = document.createElement('div')
    damageStat.appendChild(swordEl)
    damageStat.appendChild(damageValue)

    statsEl.appendChild(armorStat)
    statsEl.appendChild(damageStat)
  }

  function _addItemPickupListener(listener) {
    const oldLog = oldConsole.log

    const newLog = (message, ...rest) => {
      oldLog(message, ...rest)

      const object = rest?.[0]
      if (object?.type === 'item') {
        listener(object.item)
      }
    }

    window.console = { ...oldConsole, log: newLog }
  }
})(window.console)

