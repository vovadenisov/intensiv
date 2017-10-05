const template = ({ body, title }) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <script>
                </script>
            </head>
            <body>
                <div id="root">${body}</div>
            </body>
        </html>
    `;
};

export default template
