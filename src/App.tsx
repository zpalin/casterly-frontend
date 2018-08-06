import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import NavBar from './components/common/NavBar'
import Other from './components/pages/Other'

const styles = {
    body: 'flex flex-auto flex-column bg-light-gray',
    content: 'flex flex-auto mt5'
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={styles.body}>
                    <NavBar/>
                    <div className={styles.content}>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/other" component={Other}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default hot(module)(App)
