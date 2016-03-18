// TODO
var groceryItems = ['Milk', 'Chia', 'Tofu'];

var Cucumbers = () => (
  <li>Cucumbers</li>
);

var Kale = () => (
  <li>Kale</li>
);

var GroceryList = (props) => (
  <div>
  <h2>My Grocery List</h2>
    <ul>
      <li>{props.items[0]}</li>
      <li>{props.items[1]}</li>
      <li>{props.items[2]}</li>
    </ul>
  </div>
);

ReactDOM.render(<GroceryList items={groceryItems}/>, document.getElementById('app'));
