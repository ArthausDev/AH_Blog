import React from 'react'
import {Helmet} from 'react-helmet'


const SEO = ({metadataTitle}) => {
    return (
        <Helmet>
            <title>{metadataTitle}</title>
        </Helmet>
    )
}

export default SEO
