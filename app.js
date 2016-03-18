// TODO
var groceryItems = ['Milk', 'Chia', 'Tofu'];

var GroceryList = (props) => {

  var onListItemClick = (event) => {
    console.log('Buy this!');
  };

  return (
    <div>
    <h2>My Grocery List</h2>
      <ul>
        <li onClick={onListItemClick}>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
      </ul>
    </div>
  );  
};

ReactDOM.render(<GroceryList items={groceryItems}/>, document.getElementById('app'));
