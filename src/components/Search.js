import React from 'react';


var Search = (props) => ( // destructuring


  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => props.handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);


// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//   }

//   handleInputChange(e) {
//     this.props.getYouTubeVideos(e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//     // console.log('handleInputChange');
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <input
//           className="form-control"
//           type="text"
//           value={this.state.value}
//           onChange={this.handleInputChange.bind(this)}
//         />
//         <button className="btn hidden-sm-down">
//           <span className="glyphicon glyphicon-search"></span>
//         </button>
//       </div>
//     );
//   }
// }

export default Search;
