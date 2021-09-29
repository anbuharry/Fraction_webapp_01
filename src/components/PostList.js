import React,{ Component} from "react";
import Date from './Date_range'
import axios from 'axios'


class PostList extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }
    

componentDidMount(){
    axios.get('http://127.0.0.1:8000/hvals_hash?key=31-08-21')
    .then(response => {
        this.setState({
            posts:response.data
        })
        console.log(response.data)

    })
}


    render() {
        const {posts} = this.state
        return (
            <div>
                
                <Date />
                    {
                        posts.map(post => <div key = {post.id}>{post.id} </div>)
                    }
            </div>
        )
    }
}

export default PostList