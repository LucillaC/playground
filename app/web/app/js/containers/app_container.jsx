import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Constants
import ActionTypes from 'action_types';
import Categories from 'craigslist_constants'

// Actions
import AppActions from 'app_actions';

// Components
import App from '../components/app';

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  // _searchCraigslist(e) {
  //   const val = e.target.value;
  //   searchCraigslist(val);
  // }

  _searchCraigslist(obj) {
    const {searchCraigslist} = bindActionCreators(AppActions, this.props.dispatch);
    searchCraigslist(obj);
  }

  render() {
    console.log('$$$', Categories);
    const {
      dispatch,
      app,
    } = this.props;

    return (
      <App
        {...app}
        searchCraigslist={::this._searchCraigslist}
        categories = {Categories.CATEGORIES}
      />
    );
  }
}

AppContainer.displayName = 'AppContainer';

AppContainer.propTypes = {
  dispatch: React.PropTypes.func,
  finances: React.PropTypes.object,
};

module.exports = connect((state) => {
  console.log('[app_container] state: ', state);
  return {
    app: state.app
  };
})(AppContainer);
