class Shape {
  constructor(shape, shapeColor){
    this.shape = shape
    this.shapeColor = shapeColor
  }
  setColor(shapeColor){
    this.shapeColor = shapeColor
  }
}
class Triangle extends Shape {
  constructor(shapeColor){
    super('Triangle', shapeColor)
  }
  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
  }
}
class Circle extends Shape {
  constructor(shapeColor){
    super('Circle', shapeColor)
  }
  render(){
    return `<circle cx="150" cy="120" r="80" stroke-width="4" fill="${this.shapeColor}"/>`
  }
}
class Square extends Shape {
  constructor(shapeColor){
    super('Square', shapeColor)
  }
  render(){
    return `<rect x="75" y="50" width="150" height="140" fill="${this.shapeColor}"/>`
  }
}

module.exports = { 
  Triangle,
  Circle,
  Square
 }