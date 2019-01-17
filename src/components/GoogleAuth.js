import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            console.log('ready');
            window.gapi.client.init({
                clientId: '78568221245-mjenajs06asu4avsm7m7ccb8k9net5bq.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn == null) {
            return <div>I don't know if we're signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I'm signed in</div>;
        } else {
            return <div>I'm not signed in</div>;
        }
    }

    render() {
        return <div>GoogleAuth</div>;
    }

}

export default GoogleAuth;