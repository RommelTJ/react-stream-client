import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <Link className="ui button" to="/">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        const stream = this.props.stream;
        if (!stream) {
            return "Are you sure you want to delete this stream?";
        }
        return `Are you sure you want to delete the stream with title: ${stream.title}`;
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.getActions()}
                onDismiss={() => history.push("/")}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
