import { Input } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    this.props.searchCraigslist({
      search: this.input.value,
      category: this.select.value
    })  
  }

  render() {
    console.log('[app] this.props: ', this.props);
    return (
      <div className='app'>
        <Input
          ref = {(node) => {return this.input = node}}
          type='text'
          placeholder='search craigslist'
          onChange={this.handleChange.bind(this)}
        />
        <select ref = {(node) => {return this.select = node}} onChange={this.handleChange.bind(this)}>
          {_.map(this.props.categories, ((category, index) => {
            return (<option key={index} value={category}> {category} </option>)
          }))}
        </select>
      </div>
    );
  }
}

App.displayName = 'App';

App.propTypes = {
  searchCraigslist: React.PropTypes.func,
  search: React.PropTypes.string
};

module.exports = App;
