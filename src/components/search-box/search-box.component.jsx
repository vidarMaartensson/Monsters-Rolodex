import {Component} from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
    render(){
        return(
            <input className={`search-box ${this.props.nameOfSearchBar}`}
            type='search' 
            placeholder={this.props.userExplenation} 
            onChange={this.props.onChangeHandler}/>
        );
    }
}

export default SearchBox;