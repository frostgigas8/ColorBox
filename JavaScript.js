console.clear()

const createRandomArray = (size) => {
  let randomArray = []
  randomArray.length = size
  randomArray = Array.apply(null, randomArray).map((item) => {
    return Math.floor(Math.random() * 255 + 1)
  })
  return randomArray
}

const colorCount = 2
const randomArrayRed = createRandomArray(colorCount)
console.log(randomArrayRed)
const randomArrayGreen = createRandomArray(colorCount)
console.log(randomArrayGreen)
const randomArrayBlue = createRandomArray(colorCount)
console.log(randomArrayBlue)

const colorBlock = document.querySelector('#color-block')

let i = 0
let randomRainbowInterval

function startRainbow() {
  randomRainbowInterval = setInterval(() => {
    const red = randomArrayRed[i]
    const green = randomArrayGreen[i]
    const blue = randomArrayBlue[i]
    colorBlock.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
    i++
    if (i >= colorCount) {
      i = 0
    }
  }, 1000)
}

colorBlock.addEventListener("mouseover", (event) => {
  startRainbow()
})

colorBlock.addEventListener("mouseout", (event) => {
  clearInterval(randomRainbowInterval)
})
