import React, {Fragment} from 'react';
import Header from 'components/Header';

export default ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
};
