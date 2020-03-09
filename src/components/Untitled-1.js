const t = "teret"
undefined
t
"teret"
t.length
5
t.toUpperCase()
"TERET"
t.toLowerCase()
"teret"
const n = 1
undefined
n
1
n.length
undefined
n+1
2
n-1
0
t + 1
"teret1"
const b = true
undefined
b
true
!b
false
b + 1
2
b.length
undefined
s

typeof s
"undefined"
const l = null
undefined
l
null
const obj = {
name: "test",
age: 2
}
undefined
obj
{name: "test", age: 2}
obj.name
"test"
obj.age
2
const arg = [
"test", "test2", "test3"
]
undefined
arg
(3) ["test", "test2", "test3"]
const arg2 = [
    {
name: "test",
age: 2
},
{
name: "test2",
age: 3
}
]
undefined
arg2
(2) [{…}, {…}]0: {name: "test", age: 2}name: "test"age: 2__proto__: Object1: {name: "test2", age: 3}length: 2__proto__: Array(0)
arg2[0]
{name: "test", age: 2}
arg2.map( (item) => {
    return item.name
}

arg2.map( (item) => {
    return item.name
})
(2) ["test", "test2"]

export const StepTwo = ({ registerRef }) => {
  const product = ['web app', 'mobile app', 'web-site', 'e-com', 'b2b platform']
  const mapedProduct = product.map((item) => {
    return (
      <FormControlLabel
        name="products"
        value={item}
        control={<Checkbox color="primary" />}
        label={item}
        inputRef={registerRef}
        key={item}
      />
    )
  }
  )
  class App extends Component {
    render() {
      var array1 = [5, 12, 8, 130, 44];
      var found = array1.find(function (element) {
        return element > 10;
      });

      return (<div>{found}</div>);
    }
  }