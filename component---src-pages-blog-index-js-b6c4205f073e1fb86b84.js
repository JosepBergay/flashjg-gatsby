(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(164),c=a(187),o=a(4),u=a.n(o),m=a(158),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return l.a.createElement("div",{className:"columns is-multiline"},e&&e.map(function(e){var t=e.node;return l.a.createElement("div",{className:"is-parent column is-6",key:t.id},l.a.createElement("article",{className:"tile is-child box notification"},l.a.createElement("p",null,l.a.createElement(m.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),l.a.createElement("span",null," • "),l.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date)),l.a.createElement("p",null,t.excerpt,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:"button",to:t.fields.slug},"Keep Reading →"))))}))},t}(l.a.Component);d.propTypes={data:u.a.shape({allMarkdownRemark:u.a.shape({edges:u.a.array})})};var g=function(){return l.a.createElement(m.b,{query:"3598529817",render:function(e,t){return l.a.createElement(d,{data:e,count:t})},data:c})};a.d(t,"default",function(){return h});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url('/img/blog-index.jpg')"}},l.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},"Noticias")),l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement(g,null)))))},t}(l.a.Component)},158:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(159);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},160:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(55),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},162:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},163:function(e){e.exports={data:{site:{siteMetadata:{title:"JG flash.",description:"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution."}}}}},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(165),l=a.n(i),s=a(7),c=a.n(s),o=a(158),u=a(161),m=a.n(u),d=a(162),g=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{className:"footer has-background-black has-text-white-ter"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("img",{src:"/img/logo-ingenieros.png",alt:"ingenieros JG"})),r.a.createElement("div",{className:"content has-text-centered has-background-black has-text-white-ter"},r.a.createElement("div",{className:"container has-background-black has-text-white-ter"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("section",{className:"menu"},r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement(o.a,{to:"/",className:"navbar-item"},"Home")),r.a.createElement("li",null,r.a.createElement(o.a,{className:"navbar-item",to:"/blog"},"Noticias")),r.a.createElement("li",null,r.a.createElement(o.a,{className:"navbar-item",to:"/about"},"INnovamos"))))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("section",null,r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement(o.a,{className:"navbar-item",to:"/contact"},"Contacta")),r.a.createElement("li",null,r.a.createElement("a",{className:"navbar-item",href:"/admin/",target:"_blank",rel:"noopener noreferrer"},"Admin"))))),r.a.createElement("div",{className:"column is-4 social"},r.a.createElement("a",{title:"facebook",href:"https://www.facebook.com/JG-Ingenieros-155817744468088/"},r.a.createElement("img",{src:m.a,alt:"Facebook",style:{width:"1em",height:"1em"}})),r.a.createElement("a",{title:"twitter",href:"https://twitter.com/jgingenieros"},r.a.createElement("img",{className:"fas fa-lg",src:g.a,alt:"Twitter",style:{width:"1em",height:"1em"}})))))))},t}(r.a.Component),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return c()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.a,{to:"/",className:"navbar-item",title:"Logo"},r.a.createElement("img",{src:"/img/logo-flash.jpg",alt:"Flash"})),r.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},r.a.createElement("div",{className:"navbar-start has-text-centered"},r.a.createElement(o.a,{className:"navbar-item",to:"/blog"},"Noticias"),r.a.createElement(o.a,{className:"navbar-item",to:"/about"},"INnovamos"),r.a.createElement(o.a,{className:"navbar-item",to:"/contact"},"Sugerencias")))))},t}(r.a.Component),M=(a(166),a(163)),b=function(){return M.data.site.siteMetadata};t.a=function(e){var t=e.children,a=b(),n=a.title,i=a.description;return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"icon",href:"/img/favicon.ico"}),r.a.createElement("meta",{name:"theme-color",content:"#000"}),r.a.createElement("meta",{property:"og:type",content:"business.business"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:url",content:"/"}),r.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),r.a.createElement(N,null),r.a.createElement("div",null,t),r.a.createElement(h,null))}},187:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"This week we’ll  take  a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the  Illinois Institute of Technology  said that the Chemex…",id:"508dee5e-004b-5080-9a85-a83494f8a8d8",fields:{slug:"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},frontmatter:{title:"A beginners’ guide to brewing with Chemex",templateKey:"blog-post",date:"hace 2 años"}}},{node:{excerpt:"We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick. Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas…",id:"999261d6-e5b9-545b-add9-a73969be624b",fields:{slug:"/blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},frontmatter:{title:"Just in: small batch of Jamaican Blue Mountain in store next week",templateKey:"blog-post",date:"hace 2 años"}}},{node:{excerpt:"The SCAA updated the wheel to reflect the finer nuances needed to describe flavors more precisely. The new descriptions are more detailed and hence allow cuppers to distinguish between more flavors. While this is going to be a big change for professional coffee tasters, it means a lot to you as a consumer as well. We’ll explain how the wheel came to be, how pros use it and what the flavors…",id:"9a1f6dbc-8dc0-5a8b-82d2-3577424edf31",fields:{slug:"/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},frontmatter:{title:"Making sense of the SCAA’s new Flavor Wheel",templateKey:"blog-post",date:"hace 2 años"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-b6c4205f073e1fb86b84.js.map