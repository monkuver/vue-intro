module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "./src/assets/styles/style.scss";
                `,
            },
        },
    },
}