import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head >
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
                </Head>
                <body className="bg-fixed bg-gradient-to-r from-white to-white dark:from-dark-500 dark:to-dark-700 dark:text-white font-Raleway">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument