import './Home.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-left">
                    <h1>Creative, imagine, and build.</h1>
                    <p>It is always fun to test skills when putting together Nanoblock sets. There are times when we want to put together an easy set, but there are also times when we want a bit of a challenge when putting together a set. lego can be a means for children to be more expressive. Let's Explore!.</p>
                </div>
                <div className="container-right">
                <div className="btn3">
                    <NavLink to="/Pokemon"><input className="btn" type="image" src="./cover_pok.jpg"></input></NavLink>
                    <h2>Pokemon</h2>
                    <NavLink to="/Animal"><input className="btn" type="image" src="./cover_anm.jpg"></input></NavLink>
                    <h2>Animal</h2>
                    <NavLink to="/Special"><input className="btn" type="image" src="./cover_spc.jpg"></input></NavLink>
                    <h2>Special</h2>
                    </div>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default Home;