import React from "react";
import PropTypes from "prop-types";
// import { graphql, StaticQuery } from "gatsby";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

class Birthdays extends React.Component {
    render() {
        const { birthdays } = this.props;
        // const { data } = this.props;
        // const { birthdays } = data.markdownRemark.frontmatter;

        if (!birthdays || !birthdays.items || !birthdays.items.length) {
            return <div />;
        }

        return (
            <div className="columns content">
                <div className="column is-12">
                    <h3 className="has-text-weight-semibold">
                        {birthdays.name}
                    </h3>
                    <ul className="customlist">
                        {birthdays.items.map(i => (
                            <li key={i.name}>
                                <div>
                                    <p>
                                        {i.name}, {i.date}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

Birthdays.propTypes = {
    birthdays: PropTypes.object
};
// Birthdays.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             edges: PropTypes.array
//         })
//     })
// };

export default Birthdays;
// export default () => (
//     <StaticQuery
//         query={graphql`
//             query BirthdaysQuery {
//                 markdownRemark(
//                     frontmatter: { templateKey: { eq: "index-page" } }
//                 ) {
//                     frontmatter {
//                         birthdays {
//                             name
//                             image {
//                                 childImageSharp {
//                                     fluid(maxWidth: 2048, quality: 64) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                             items {
//                                 name
//                                 date(
//                                     formatString: "DD MMMM"
//                                     locale: "es"
//                                 )
//                             }
//                         }
//                     }
//                 }
//             }
//         `}
//         render={(data, count) => <Birthdays data={data} count={count} />}
//     />
// );
