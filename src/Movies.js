import React, { Component, createRef } from 'react';
import { Button, DropdownButton, Dropdown, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
import firebase from 'firebase'
import config from './config'
import loadingImg from './imgs/iphone-spinner-2.gif'
import MOVIEIDS from './MovieIds'
import './Movies.css';
import MovieOverlays from './MovieOverlay'

// Firebase format
// In ref('movies'):
// movies: {
//     listname: { 
//        id: {movieData}
//     } || 0
// }



const APIKEY = '9adc9a37'
// https://www.omdbapi.com/?i=tt3896198&apikey=9adc9a37

export default class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            loading: true, 
            overlay: 'hidden', overlayData:{}, 
            movies:[], currentList:'all',
            showDropdown: false,
        };
        // Init firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
            console.log('firebase init')
        } 
        // Control Panel Reference
        this.addMovieInputRef = createRef();
        this.addListInputRef = createRef();
    }

    async componentDidMount() {
        // Scrolling control
        window.addEventListener('wheel', this.scrollLock, { passive: false }); // modern desktop
        window.addEventListener('mousewheel', this.scrollLock, { passive: false }); // modern desktop
        window.addEventListener('touchmove', this.scrollLock, { passive: false }); // mobile
        // window.addEventListener('keydown', this.scrollLock, false);

        // Fetch data from API
        // for (let id of MOVIEIDS) {
        //     var response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`);
        //     this.movieData[id] = response.data;   
        // }
        this.setState({ loading: false });

        // Firebase onValue
        firebase.database().ref('movies').on('value', (snapshot)=>{
            console.log('movies onvalue')
            console.log(snapshot.val())
            this.setState({ movies: snapshot.val(), loading: false }, console.log)
        })
    }
    
    scrollLock = function (e) {
        if(this.state.overlay === 'visible'){
            e.preventDefault();
        }
        return false;
    }.bind(this)



    // Movie Control
    addMovie = async function (event) {
        // event.preventDefault();
        // event.stopPropagation();

        const form = event.currentTarget; // form == [ nameField, ...

        let id = this.addMovieInputRef.current.value;
    
        var response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`);
        var movieData = response.data;
        if(movieData.Response === "False") {
            console.log("Incorrect movie id.")
        }
        console.log(movieData)
        // filter
        var filteredData = {
            imdbID: movieData.imdbID,
            Title: movieData.Title,
            Director: movieData.Director,
            imdbRating: movieData.imdbRating,
            Genre: movieData.Genre,
            Poster: movieData.Poster,
        }
        let moviesState = this.state.movies;
        moviesState['all'][filteredData.imdbID] = filteredData;
        firebase.database().ref('movies').set(moviesState);
        // refresh
    }.bind(this);


    deleteMovie = function(id) {
        console.log(id)
        var moviesState = this.state.movies;
        for(let listName in moviesState) {
            delete moviesState[listName][id]
        }
        firebase.database().ref('movies').set(moviesState);
    }.bind(this)


    addList = function(e) {
        console.log("addList")
        // this.setState({showDropdown:false})
        let newListName = this.addListInputRef.current.value;
        let moviesState = this.state.movies;
        if(newListName in moviesState) { 
            window.alert("List already exists.");
        } else {
            moviesState[newListName] = 0;
            firebase.database().ref('movies').set(moviesState);
        }
    }.bind(this);


    onChangeList = function(listName) {
        this.setState({currentList: listName})
    }.bind(this);


    // Overlay control
    showOverlay = function (data) {
        this.setState({overlay: 'visible', overlayData: data})
    }.bind(this)

    hideOverlay = function () {
        this.setState({overlay: 'hidden'})
    }.bind(this)


    render = function () {

        // Control Panel        
        var addListDiv = React.forwardRef((props, ref) => (
            <div className={props.className+" d-flex"} ref={ref}>
                <Form.Control className="w-auto mr-1"
                    placeholder="+ Create new list"
                    ref={this.addListInputRef}
                />
                <Button type="submit" variant="outline-primary" onClick={this.addList}>Create</Button>
            </div>
        ));

        var panelDiv = 
        <div className="d-flex panel p-3 mb-3 w-100 -shadow">
            <Dropdown onSelect={this.onChangeList}>
                <Dropdown.Toggle variant="outline-primary">
                    List: {this.state.currentList}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    { Object.keys(this.state.movies).map(listName =>
                        <Dropdown.Item eventKey={listName} key={listName}>{listName}</Dropdown.Item>                
                    )}
                    <Dropdown.Divider/>
                    <Dropdown.Item as={addListDiv} onClick={e=>e.preventDefault()}></Dropdown.Item>         
                </Dropdown.Menu>
            </Dropdown>
            <input ref={this.addMovieInputRef}></input>
            <Button type="submit" variant="outline-dark" onClick={this.addMovie}>Add Movie</Button>
        </div>

        // Posters
        var posterDivs = 
        <div className="w-100 p-5 d-flex flex-column align-items-center">
            <img src={loadingImg} alt="loading"></img>
        </div>
        if(!this.state.loading) {
            console.log(this.state)
            var movieList = this.state.movies[this.state.currentList] ?? {};
            console.log(movieList)
            posterDivs = Object.values(movieList).map((data, index) => 
                <div className="m-2 -shadow poster-container" key={index}>
                    <img src={data.Poster} className="poster"
                    onClick={()=>this.showOverlay(data)}></img>
                </div>
            )
        }

        

        // Assemble
        return (
        <div className="row main">
            {panelDiv}
            <div className="w-100 h-100 d-flex flex-wrap justify-content-center align-items-center">
                {posterDivs}
            </div>
            <MovieOverlays data={this.state.overlayData} 
                visibility={this.state.overlay} 
                hideOverlay={this.hideOverlay}
                deleteMovie={this.deleteMovie}/>
        </div>
        )
    }
}