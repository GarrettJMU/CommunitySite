

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';

const title = 'Housecall Pro Community';

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 definition">
          <h1>SuperPros are the elite users of our software who strive to provide a unique and passionate experience to the consumer (or tagline here)</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
        </div>
      </div>

    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
