import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        const title = this.props.stream.title;
        return <div>{title}</div>;
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
