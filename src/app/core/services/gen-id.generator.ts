export function GenId(quantity: number): string {
  let start = 0
  let curentNumber = 0
  let generatedValue = ''
  while (curentNumber < quantity) {
    curentNumber++
    start++
    generatedValue += start.toString()
  }
  return generatedValue
}
