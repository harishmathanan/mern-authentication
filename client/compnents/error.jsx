import React from 'react';
import propTypes from 'prop-types';

const Error = ({ message }) => {
  <div className="row">
    <div className="col-md-12">
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    </div>
  </div>
};

Error.propTypes = {
  message: propTypes.string
}

export default Error;
