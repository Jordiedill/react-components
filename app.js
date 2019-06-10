

class GroceryListItems extends React.Component {
  
  constructor (props){
      super(props);

      this.state = {
          done: false
      };
  }

  onListItemClick() {
      this.setState({
          done: !this.state.done
      });
  }

  render() {

    var style = {
        textDecoration: this.state.done ? 'line-through' : 'none'


    }
    return (
          <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
      
        );
  }
 
}

var GroceryList = (props) => (
     <ul>
    {props.items.map(item =>
      <GroceryListItems item={item}/>
    )}
    </ul>
);



ReactDOM.render(<GroceryList items={['Bread','milk','smokes']}/>, document.getElementById("app"));