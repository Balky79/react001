import React, { Component } from "react";

class Header_presentation extends Component {
    render(){
        // { children } notation below somehow drags the content from busines logic layer
        // This gives flexibility to do more junk on the business logic side, but we'll get there once... maybe :D
        const { children } = this.props;
        return(
            <div>
                <div>
                    {children}
                </div>
            </div>
        );
    }
}

export default Header_presentation;