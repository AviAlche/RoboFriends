import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
// import robotsData from './roboData.js';
import './App.css';

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots : [],        //robot infomation array
            searchText : ''     //search input by user
        }
    }

    //handler that is trigered by an event in the child component "SearchBox"
    onSearchChange = (event) => {
        this.setState({ searchText : event.target.value });
    }

    //Loading the robot data from web api/local file
    componentDidMount(){
        //From web api:
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
        
        //From local data file
        //  this.setState({robots: robotsData});
    }

    render(){
        const { robots, search } = this.state;
        //filtering the data according to the user input
        const filteredRoboList = this.state.robots.filter(r => {
            return r.name.toLowerCase().includes(this.state.searchText.toLowerCase())
        });
        // checking if there is any data to show
        if(this.state.robots.lentgh){
            return <h1>"Loading..."</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'> Robofriends </h1>
                    <SearchBox searchChange = {this.onSearchChange}/>  {/* passing the event handler to the child component */}                    
                    <Scroll>
                        <CardList robots={filteredRoboList}/>           {/* passing the filtered data  to the child component */}
                    </Scroll>
                </div>
            );
        }   
    }
}

export default App;