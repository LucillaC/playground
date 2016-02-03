import { Input } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    this.props.searchCraigslist    
  }

  render() {
    console.log('[app] this.props: ', this.props);
    return (
      <div className='app'>
        <Input
          type='text'
          placeholder='search craigslist'
          onChange={this.props.searchCraigslist}
        />
        <select ref = {(node) => {return this.select = node}} onChange={this.handleChangeSort.bind(this)>
          {this.props.categories.map((category, index) => {
            return <option key={index} value={category}> {category} </option>
          })}
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
