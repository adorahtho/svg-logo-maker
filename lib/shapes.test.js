const {Circle, Triangle, Square} = require('./shapes')

describe('testCircle', ()=> {
  test('should render a circle', () => {
    const testCircle = `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke-width="4" fill='${this.shapeColor}'/>
    <text fill="${this.textColor}" font-size="30" font-weight="bold" font-family="Verdana" x="18" y="65">${this.text}</text>
</svg>`
    const circle = new Circle('blue', 'TXT', 'red')
    expect(circle.render()).toEqual(testCircle)
  })
})