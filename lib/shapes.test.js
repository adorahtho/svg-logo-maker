const {Triangle, Circle, Square} = require('./shapes')



describe('Test Shapes', ()=> {
  test('should render a triangle', () => {
    const testTriangle = `<svg width="100" height="100">
    <polygon points="50 15, 100 100, 0 100"fill='green'/>
    <text fill="yellow" font-size="30" font-family="Verdana" font-weight="bold" x="18" y="90">AKT</text>
  </svg>`
    const triangle = new Triangle('green', 'AKT', 'yellow')
  })

  test('should render a circle', () => {
    const testCircle = `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke-width="4" fill='blue'/>
    <text fill="red" font-size="30" font-weight="bold" font-family="Verdana" x="18" y="65">TXT</text>
</svg>`
    const circle = new Circle('blue', 'TXT', 'red')
    expect(circle.render()).toEqual(testCircle)
  })

  test('should render a square', () => {
    const testSquare = `<svg width="130" height="95">
    <rect x="50" y="20" width="120" height="90" fill='pink'/>
    <text fill="black" font-size="30" font-weight="bold" font-family="Verdana" x="58" y="70">ABN</text>
</svg>`
    const square = new Square('pink', 'ABN', 'black')
    expect(square.render()).toEqual(testSquare)
  })
})