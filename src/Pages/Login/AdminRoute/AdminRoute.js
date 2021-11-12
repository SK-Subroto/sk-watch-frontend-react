import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import ReactLoading from 'react-loading';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) { return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
            <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} />
        </div>
    ) }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;