import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import Birthdays from "../components/Birthdays";
import InAndOut from "../components/InAndOut";

export const IndexPageTemplate = ({
    image,
    title,
    subtitle,
    heading,
    mainpitch,
    description,
    birthdays,
    inandout
}) => (
    <div>
        <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${
                    !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`
            }}
        >
            <div
                style={{
                    display: "flex",
                    height: "150px",
                    lineHeight: "1",
                    justifyContent: "space-around",
                    alignItems: "left",
                    flexDirection: "column"
                }}
            >
                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        boxShadow:
                            "rgb(27,55,101) 0.5rem 0px 0px, rgb(27,55,101) -0.5rem 0px 0px",
                        backgroundColor: "rgb(27,55,101)",
                        color: "white",
                        lineHeight: "1",
                        padding: "0.25em"
                    }}
                >
                    {title}
                </h1>
                {subtitle ? (
                    <h3
                        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                        style={{
                            boxShadow:
                                "rgb(27,55,101) 0.5rem 0px 0px, rgb(27,55,101) -0.5rem 0px 0px",
                            backgroundColor: "rgb(27,55,101)",
                            color: "white",
                            lineHeight: "1",
                            padding: "0.25em",
                            textAlign: "center"
                        }}
                    >
                        {subtitle}
                    </h3>
                ) : (
                    ""
                )}
            </div>
        </div>
        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h1 className="title">
                                            {mainpitch.title}
                                        </h1>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">
                                            {mainpitch.description}
                                        </h3>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-2">
                                            {heading}
                                        </h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <Birthdays birthdays={birthdays} />
                                <InAndOut inandout={inandout}/>
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest stories
                                    </h3>
                                    <BlogRoll />
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    heading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    birthdays: PropTypes.object,
    inandout: PropTypes.object
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                heading={frontmatter.heading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                birthdays={frontmatter.birthdays}
                inandout={frontmatter.inandout}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                subtitle
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                mainpitch {
                    title
                    description
                }
                heading
                description
                birthdays {
                    name
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 64) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    items {
                        name
                        date(formatString: "LL", locale: "es")
                    }
                }
                inandout {
                  in {
                    name
                    location
                    firstday(formatString: "LL", locale: "es")
                  }
                  out {
                    name
                    location
                    lastday(formatString: "LL", locale: "es")
                  }
                }
            }
        }
    }
`;
