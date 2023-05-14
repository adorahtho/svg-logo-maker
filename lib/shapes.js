class Shape {
  constructor(shapeColor, text, textColor){
    this.shapeColor = shapeColor
    this.text = text
    this.shapeChoice = ''
    this.textColor = textColor
  }
  
}
class Triangle extends Shape {
  constructor(shapeColor, text, textColor){
    super(shapeColor, text, textColor)
  }
  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

 <text x="150" y="160" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}
class Circle extends Shape {
  constructor(shapeColor, text, textColor){
    super(shapeColor, text, textColor)
  }
  render(){
    return `<circle cx="150" cy="120" r="80" stroke-width="4" fill='${this.shapeColor}'/>

 <text x="150" y="160" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}
class Square extends Shape {
  constructor(shapeColor, text, textColor){
    super(shapeColor, text, textColor)
  }
  render(){
    return `<rect x="75" y="50" width="150" height="140" fill='${this.shapeColor}'/>

 <text x="150" y="160" font-size="90" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

module.exports = { 
  Triangle,
  Circle,
  Square
 }
