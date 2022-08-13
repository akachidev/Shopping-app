import React, { Component } from 'react';


class Counter extends Component {
        //imageUrl:"https://picsum.photos/200"

    //constructor() {
    //    super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
   // }
    
    

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
</ul>
    }


   // styles = {
    //fontSize: "10px",
   // fontWeight: "bold"
   // };

    render() {
        return (
            <div>
                 {/*{this.state.tags.length === 0 && "please create new //tags!"}
                 {this.renderTags()}
            {/*<img src={this.state.imageUrl} alt="" /> */}
                <span className={this.getBadgeClasses()}>{this.formatCount() }</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
               
        </div>
        );
    }

    getBadgeClasses() {
        return "badge m-2 badge-";
    }
    
     getBadgeClasses () {
     let classes = "badge m-2 badge-";
         classes += this.props.counter.value === 0 ? 'warning' : 'primary';
         return classes
     }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
        //return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;