const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX //ekrandaki click position
    const y = e.clientY

    const buttonTop = e.target.offsetTop //button position
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft // button icindeki position
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500) //clear DOM
  })
})
