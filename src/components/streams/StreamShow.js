import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from "../../actions";
import StreamForm from "./StreamEdit";
import _ from "lodash";

class StreamShow extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
