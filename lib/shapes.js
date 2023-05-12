class Shape {
  constructor(shapeColor, text, textColor){
    this.shapeColor = shapeColor
    this.text = text
    this.textColor = textColor
  }
}
class Triangle extends Shape {
  constructor(shapeColor, text, textColor){
    super(shapeColor, text, textColor)
  }
  render(){
    return `<svg width="100" height="100">
    <polygon points="50 15, 100 100, 0 100"fill='${this.shapeColor}'/>
    <text fill="${this.textColor}" font-size="30" font-family="Verdana" font-weight="bold" x="18" y="90">${this.text}</text>
  </svg>`
  }
}
class Circle extends Shape {
  constructor(shapeColor, text, textColor){
    super(shapeColor, text, textColor)
  }
  render(){
    return `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke-width="4" fill='${this.shapeColor}'/>
    <text fill="${this.textColor}" font-size="30" font-weight="bold" font-family="Verdana" x="18" y="65">${this.text}</text>
</svg>`
  }
}
class Square extends Shape {
  constructor(shapeColor, text, textColor){
    super(shapeColor, text, textColor)
  }
  render(){
    return `<svg width="130" height="95">
    <rect x="50" y="20" width="120" height="90" fill='${this.shapeColor}'/>
    <text fill="${this.textColor}" font-size="30" font-weight="bold" font-family="Verdana" x="58" y="70">${this.text}</text>
</svg>`
  }
}

module.exports = { 
  Triangle,
  Circle,
  Square
 }