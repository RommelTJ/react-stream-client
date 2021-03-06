import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { editStream, fetchStream } from "../../actions";
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    onSubmit = (formProps) => {
        const id = this.props.match.params.id;
        this.props.editStream(id, formProps);
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);
