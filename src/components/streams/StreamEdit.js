import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from "../../actions";
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    onSubmit = (formProps) => {
        console.log(formProps);
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>);
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);
