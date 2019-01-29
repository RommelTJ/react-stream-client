import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    render() {
        return <div>StreamShow</div>;
    }

}

export default connect(null, { fetchStream })(StreamShow);
