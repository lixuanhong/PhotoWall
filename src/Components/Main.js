import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'
import {Link} from 'react-router-dom'
import Single from './Single'
   


class Main extends Component {

    state = { loading: true }
    
    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComment()
    }

    render() {
        return (
            <div> 
                <h1>
                    <Link to="/">Photowall</Link>
                </h1>
                <Route exact path = "/" render={() => (
                  <div>
                     <PhotoWall {...this.props} /> 
                  </div>

                )}/>
           
                
                <Route path = "/AddPhoto" render = {({history}) => (
                    <AddPhoto {...this.props} />
                )}/>

                <Route path="/single/:id" render = {(params) => (
                    <Single loading={this.state.loading} {...this.props} {...params}/>
                )}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state
    }
}



export default Main