// TODO
var Cucumbers = () => (
  <li>Cucumbers</li>
);

var Kale = () => (
  <li>Kale</li>
);

var GroceryList = () => (
  <div>
  <h2>My Grocery List</h2>
    <ul>
      <Cucumbers />
      <Kale />
    </ul>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
