import React from 'react';
import { connect } from 'react-redux';

class StreamEdit extends React.Component {

    componentDidMount() {
        // TODO
    }

    render() {
        console.log(this.props.stream.title);
        return <div>StreamEdit</div>;
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
