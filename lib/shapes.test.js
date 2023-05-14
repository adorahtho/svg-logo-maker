const { Triangle, Circle, Square } = require('./shapes')

describe('shapesTest', ()=> {
  test('should render a triangle', () => {
    const testTriangle = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="blue" />

  <text x="150" y="160" font-size="90" text-anchor="middle" fill="red">AKT</text>

</svg>`
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  })

  test('should render a circle', () => {
    const testCircle = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="120" r="80" stroke-width="4" fill='blue'/>

 <text x="150" y="160" font-size="90" text-anchor="middle" fill="red">TXT</text>

</svg>`
    const circle = new Circle('blue', 'TXT', 'red')
    expect(circle.render()).toEqual(testCircle)
  })

  test('should render a square', () => {
    const testSquare = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

<rect x="75" y="50" width="150" height="140" fill='pink'/>

 <text x="150" y="160" font-size="90" text-anchor="middle" fill="black">ABN</text>

</svg>`
    const square = new Square('pink', 'ABN', 'black')
    expect(square.render()).toEqual(testSquare)
  })
})