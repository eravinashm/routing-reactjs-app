import React, { Component } from 'react';

class Course extends Component {
    state = {
        title:'',
        id: ''
    }

    componentDidMount(){
        this.loadTitle();
    }

    componentDidUpdate(){
        if(this.state.title !== this.props.match.params.courseId)
            this.loadTitle();
    }

    loadTitle(){
        // console.log(this.props.location.search);
        let query = new URLSearchParams(this.props.location.search);
        for(let param of query.entries()){
            if(this.state.title !== param[1])
                this.setState({title: param[1]});
        }        
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;
//              
