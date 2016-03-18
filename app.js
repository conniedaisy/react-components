// TODO
var groceryItems = ['Milk', 'Chia', 'Tofu'];

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal' 
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.items}</li>
    );

  }

}

var GroceryList = (props) => {

  return (
    <div>
    <h2>My Grocery List</h2>
      <ul>
      {props.items.map(item =>
        <GroceryListItem items={item} />
        )}
      </ul>
    </div>
  );  
};

ReactDOM.render(<GroceryList items={groceryItems}/>, document.getElementById('app'));
