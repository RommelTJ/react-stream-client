import React from 'react';
import { connect } from 'react-redux';
import {deleteStream, fetchStream} from "../../actions";
import Modal from "../Modal";
import history from '../../history';

class StreamDelete extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    getActions() {
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                StreamDelete
                <Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={this.getActions()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
