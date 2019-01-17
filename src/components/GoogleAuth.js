import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            console.log('ready');
            window.gapi.client.init({
                clientId: '78568221245-mjenajs06asu4avsm7m7ccb8k9net5bq.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>GoogleAuth</div>;
    }

}

export default GoogleAuth;
