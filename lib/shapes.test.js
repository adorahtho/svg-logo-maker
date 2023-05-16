const { Triangle, Circle, Square } = require('./shapes')

//test shape svg code

describe('Triangle', ()=> {
  test('should render a triangle', () => {
    const shape = new Triangle()
    shape.setColor('blue')
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
  })
})

describe('Circle', () => {
  test('should render a circle', () => {
    const shape = new Circle()
    shape.setColor('green')
    expect(shape.render()).toEqual(`<circle cx="150" cy="120" r="80" stroke-width="4" fill="green"/>`)
  })
})

describe('Square', () => {
  test('should render a square', () => {
    const shape = new Square()
    shape.setColor('red')
    expect(shape.render()).toEqual(`<rect x="75" y="50" width="150" height="140" fill="red"/>`)
  })
})
