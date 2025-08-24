exports.createResolvers = ({createResolvers, getNodesByType}) => {
    const resolvers = {
        MarkdownRemark: {
            previous: {
                type: "MarkdownRemark",
                resolve: (source, args, context, info) => context.nodeModel.findOne({
                    type: "MarkdownRemark",
                    query: {filter: {frontmatter: {tour_position: {eq: source.frontmatter['tour-position'] - 1}}}}
                }),
            },
            next: {
                type: "MarkdownRemark",
                resolve: (source, args, context, info) => context.nodeModel.findOne({
                    type: "MarkdownRemark",
                    query: {filter: {frontmatter: {tour_position: {eq: source.frontmatter['tour-position'] + 1}}}}
                }),
            },
            parentPage: {
                type: "MarkdownRemark",
                resolve: (source, args, context, info) => source.frontmatter.parent
                    ? context.nodeModel.findOne({
                        type: "MarkdownRemark",
                        query: {filter: {frontmatter: {slug: {eq: source.frontmatter.parent}}}}
                    })
                    : null,
            },
            childPages: {
                type: ["MarkdownRemark"],
                resolve: (source, args, context, info) => context.nodeModel.findAll({
                    type: "MarkdownRemark",
                    query: {filter: {frontmatter: {parent: {eq: source.frontmatter.slug}}}}
                }).then(({entries}) => entries),
            },
        },
    };
    createResolvers(resolvers);
};
