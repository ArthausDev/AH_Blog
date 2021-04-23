import React from 'react'
import styles from '../Blog/blog.module.scss'
const SectionHeading = ({heading,iconUrl}) => {
    return (
        <h3 className={`${styles.sectionHeading}`} style={iconUrl ? {display:'flex',alignItems:'center'}:null}>
           {iconUrl && 
            <img 
                alt={`${heading} icon`} 
                src={iconUrl}
                className={styles.sectionHeadingIcon}
            />} 
            {heading}
        </h3>
    )
}

export default SectionHeading
