import React from 'react';

class Child extends React.Component{

    static fetchData(){
        console.log('fetchData')
    }

    render(){
        return(
            <div>
                <h2>Child</h2>
            </div>
        )
    }
}

export default Child;
