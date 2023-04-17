const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target') // + string i int e cevirir
    const c = +counter.innerText

    const increment = target / 500

    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}` //ceil sayiyi yuvarlar
      setTimeout(updateCounter, 1)
    }else {
      counter.innerText = target
    }
  }

  updateCounter()
})