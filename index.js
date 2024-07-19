;(function(oldConsole) {
  const shieldEl = document.createElement('img')
  shieldEl.style.cssText = 'width: 28px; height: 28px; margin-right: 8px; vertical-align: middle;'
  shieldEl.src =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0NDRDZERCIgZD0iTTMzIDNjLTctMy0xNS0zLTE1LTNTMTAgMCAzIDNDMCAxOCAzIDMxIDE4IDM2YzE1LTUgMTgtMTggMTUtMzN6Ii8+PHBhdGggZmlsbD0iIzU1QUNFRSIgZD0iTTE4IDMzLjg4NEM2LjQxMiAyOS43MjkgMS45NjEgMTkuODMxIDQuNzYgNC40NDQgMTEuMDYzIDIuMDI5IDE3LjkyOCAyIDE4IDJjLjA3MSAwIDYuOTU4LjA0IDEzLjI0IDIuNDQ0IDIuNzk5IDE1LjM4Ny0xLjY1MiAyNS4yODUtMTMuMjQgMjkuNDR6Ii8+PHBhdGggZmlsbD0iIzI2OSIgZD0iTTMxLjI0IDQuNDQ0QzI0Ljk1OCAyLjA0IDE4LjA3MSAyIDE4IDJ2MzEuODg0YzExLjU4OC00LjE1NSAxNi4wMzktMTQuMDUzIDEzLjI0LTI5LjQ0eiIvPjwvc3ZnPg=='
  const swordEl = document.createElement('img')
  swordEl.style.cssText = 'width: 28px; height: 28px; margin-right: 8px; vertical-align: middle;'
  swordEl.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzlBQUFCNCIgZD0iTTIzLjM3OCAxOS4wMjlDMjIuNjcgMTkuNzM2IDE2LjMwNSAzMS43NTcuNzUgMzZjMS40MTQtMS40MTUgMTkuNTQtMjEuNjkxIDE5LjU0LTIxLjY5MWwzLjA4OCA0LjcyeiIvPjxwYXRoIGZpbGw9IiNDQ0Q2REQiIGQ9Ik0xNy43MiAxMy4zNzFDMTcuMDEzIDE0LjA3OCA0Ljk5MiAyMC40NDQuNzUgMzZsMjEuMjEzLTIxLjIxNC00LjI0My0xLjQxNXoiLz48cGF0aCBmaWxsPSIjRDk5RTgyIiBkPSJNMjAuNTQ5IDExLjk1N2MtLjc4MS43ODEtLjY1NSAyLjE3NC4yODMgMy4xMTJsLjg0OC44NDljLjkzOC45MzcgMi4zMyAxLjA2MyAzLjExMi4yODJsNy43NzgtNy43NzhjLjc4MS0uNzgxLjY1NC0yLjE3NC0uMjgzLTMuMTExbC0uODQ4LS44NDhjLS45MzgtLjkzOC0yLjMzMS0xLjA2NC0zLjExMS0uMjgzbC03Ljc3OSA3Ljc3N3oiLz48cGF0aCBkPSJNMjguODkyIDEyLjFsLTcuMDcxLTEuNDE0LTEuMjcxIDEuMjcxYy0uMTMzLjEzMy0uMjMuMjg4LS4zMTEuNDUybDYuOTU0IDEuMzkxIDEuNjk5LTEuN3ptLTcuMjEyIDMuODE4Yy45MzguOTM4IDIuMzMxIDEuMDYzIDMuMTEyLjI4MmwuODI2LS44MjYtNS4zMjgtMS4wNjVjLjEzMS4yNy4zMTIuNTI5LjU0My43NmwuODQ3Ljg0OXptOC45MTEtNS41MThsMS43LTEuNjk5LTcuMDcxLTEuNDE0LTEuNyAxLjY5OXptMi40MjMtMy43OTNjLS4xMDctLjQ2LS4zNDYtLjkxNi0uNzI3LTEuMjk3bC0uODQ4LS44NDhjLS4xMDMtLjEwMy0uMjEzLS4xOTItLjMyNS0uMjc1bC0yLjExLS40MjJjLS4yNTIuMDg0LS40ODMuMjItLjY3Ni40MTRsLTEuMjQyIDEuMjQyIDUuOTI4IDEuMTg2eiIgZmlsbD0iI0JGNjk1MiIvPjxjaXJjbGUgZmlsbD0iIzhBNDYzMyIgY3g9IjMxLjg1OCIgY3k9IjQuODk2IiByPSI0Ii8+PHBhdGggZmlsbD0iI0ZGQUMzMyIgZD0iTTE2LjMwNiA5LjgzNmMuNTg2LS41ODYgMS41MzYtLjU4NiAyLjEyMSAwbDguODM5IDguODM5Yy41ODYuNTg2LjU4NiAxLjUzNiAwIDIuMTIxLS41ODYuNTg2LTEuNTM1LjU4Ni0yLjEyMSAwbC04LjgzOS04LjgzOWMtLjU4Ni0uNTg0LS41ODYtMS41MzUgMC0yLjEyMXoiLz48Y2lyY2xlIGZpbGw9IiNGRkFDMzMiIGN4PSIyNy4yNjYiIGN5PSIyMC43OTYiIHI9IjIuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGQUMzMyIgY3g9IjE2LjMwNiIgY3k9IjkuODM2IiByPSIyLjUiLz48Y2lyY2xlIGZpbGw9IiNGRkNDNEQiIGN4PSIyNy4yNjYiIGN5PSIyMC43OTYiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGQ0M0RCIgY3g9IjE2LjMwNiIgY3k9IjkuODM2IiByPSIxLjUiLz48cGF0aCBmaWxsPSIjRkZBQzMzIiBkPSJNMjYuNTY2IDMuODAzYy40MTctLjQxNyAxLjA5My0uNDE3IDEuNTA5IDBsNC44NjUgNC44NjZjLjQxNy40MTcuNDE3IDEuMDkyIDAgMS41MDktLjQxNy40MTctMS4wOTIuNDE3LTEuNTA5IDBsLTQuODY1LTQuODY2Yy0uNDE3LS40MTYtLjQxNy0xLjA5MiAwLTEuNTA5eiIvPjwvc3ZnPg=='
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
    damage += item.dmg ?? 0

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

