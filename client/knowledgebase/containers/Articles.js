/* eslint-disable react/jsx-filename-extension */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connection } from '../connection';
import { Articles as DumbArticles } from '../components';

const Articles = (props) => {
  const extendedProps = {
    ...props,
    articles: props.data.kbSearchArticles,
  };

  if (props.data.loading) {
    return null;
  }

  return <DumbArticles {...extendedProps} />;
};

Articles.propTypes = {
  data: PropTypes.shape({
    kbSearchArticles: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string,
      summary: PropTypes.string,
      content: PropTypes.string,
      createdBy: PropTypes.string,
      modifiedBy: PropTypes.string,
      createdDate: PropTypes.date,
      modifiedDate: PropTypes.date,
      authorDetails: PropTypes.shape({
        fullName: PropTypes.string,
        avatar: PropTypes.string,
      }),
    })),
    loading: PropTypes.bool,
  }),
};

const mapStateToProps = state => ({

});

const ArticlesWithData = graphql(
  gql`
    query kbSearchArticles($topicId: String!, $searchString: String!) {
      kbSearchArticles(topicId: $topicId, searchString: $searchString) {
        _id
        title
        summary
        content
        createdBy
        createdDate
        modifiedBy
        modifiedDate
        authorDetails {
          fullName
          avatar
        }
      }
    }
  `,
  {
    options: (ownProps) => ({
      fetchPolicy: 'network-only',
      variables: {
        topicId: connection.data.topicId,
        searchString: ownProps.searchString,
      },
    }),
  },
)(Articles);

export default connect(mapStateToProps)(ArticlesWithData);