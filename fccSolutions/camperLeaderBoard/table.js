// var DataRow = React.createClass({
// 	render : function(){		
// 		return(
// 			<tr>
// 				<td>{this.props.data.category}</td>
// 				<td>{this.props.data.price}</td>
// 				<td>{foo++}</td>
// 				<td>{this.props.data.name}</td>
// 			</tr>
// 		);
// 	}
// });
// 	var foo = 1;

// var MainTable = React.createClass({
// 	render : function(){
// 		var rows = [];
// 		this.props.datum.forEach(function(data){
// 			rows.push(<DataRow  data={data} />)
// 		});
// 		return(
// 		<table className="table table-striped table-bordered" >
// 			<caption>LeaderBoard</caption>
// 			<thead>
// 				<tr>
// 					<th>#</th>
// 					<th>Camper Name</th>
// 					<th>Points in past 30 days</th>
// 					<th>All time points</th>
// 				</tr>
// 			</thead>

// 			<tbody>
// 				{rows}
// 			</tbody>
// 		</table>);
// 	}
// });


// ReactDOM.render(
// 	<MainTable datum={PRODUCTS}/>,
// 	document.getElementById('container')
// );

var bar =1;

var UserLink = React.createClass({
	render : function(){
	var url  = "https://www.freecodecamp.com/" + this.props.data.username;
	console.log(url);
		return(
			<a href={url+name} className="user-link">{this.props.data.username}</a>
		);
	}
});

var UserImage = React.createClass({
	render : function(){
		return(
			<img src={this.props.data.img} className="user-image"/>
		);
	}
});

var TableRows = React.createClass({
  render : function(){
    var rows = [];
    this.props.data.forEach(function(data, index){
      rows.push(<TableRow si={index+1} data={data} key={bar++}/>);
    });
    return(
        <tbody>{rows}</tbody>
    );
  }
});

var rec = -99;

var TableRow = React.createClass({
  render : function(){
    return(
      <tr>
        <td>{this.props.si}</td>
        <td>
        	<UserImage data={this.props.data} />
        	<UserLink data={this.props.data} />
        </td>
        <td className="txtcenter">{this.props.data.recent}</td>   
        <td className="txtcenter">{this.props.data.alltime}</td>
     </tr>
    );
  }
});


var LeaderBoard = React.createClass({

  getInitialState : function(){
    return({alltime : [], recent : [], recents : true});
  },
  componentDidMount : function(){
    $.ajax({
      url: this.props.api[0],
      dataType: 'json',
      cache: false,
      success: function(data) {
      	console.log("success");
        this.setState({alltime: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    $.ajax({
      url: this.props.api[1],
      dataType: 'json',
      cache: false,
      success: function(data) {
      	console.log("success");
        this.setState({recent: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },
  displayRecent : function(){
  	this.setState({recents : true});
  },

  displayAllTime : function(){
  	console.log("displayAllTime");
  	this.setState({recents : false});
  },
  render : function(){
    return(
      <table className="table table-striped table-bordered">
        <caption>Leaderboard</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th className={"txtcenter " + (this.state.recents ? "" : "underline")} onClick = {this.displayAllTime}>Points in past 30 days</th>
            <th className={"txtcenter "  + (this.state.recents ? "underline" : "")} onClick = {this.displayRecent}>All time Points</th>
          </tr>
        </thead>
        	<TableRows data = {this.state.recents ? this.state.recent : this.state.alltime} />
      </table>
    );
  }
});

var apis = ["https://fcctop100.herokuapp.com/api/fccusers/top/recent",
			"https://fcctop100.herokuapp.com/api/fccusers/top/alltime"];

ReactDOM.render(
  <LeaderBoard api={apis} />,
  document.getElementById("container")
);