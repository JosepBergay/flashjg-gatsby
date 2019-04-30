import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'
import * as moment from "moment";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    author={entry.getIn(['data', 'author'])}
    date={moment(entry.getIn(['data', 'date'])).format("MMMM DD, YYYY")}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
