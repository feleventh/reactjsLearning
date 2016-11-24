import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <h2>Repo: {this.props.params.userName}</h2>
                <p>{this.props.params.repoName}</p>
            </div>
        )
    }
})
