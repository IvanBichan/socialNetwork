import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            console.log(this.props.isAuth)
            if(!this.props.isAuth) return <Navigate to="/login" replace={true}/>
            return <Component {...this.props} />
        }
    }
    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent;
};

