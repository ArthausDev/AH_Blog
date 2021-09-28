import React from 'react'
import styles from '../Blog/blog.module.scss'
const SectionHeading = ({heading,iconUrl}) => {
    return (
        <h2 className={`${styles.sectionHeading}`} style={iconUrl ? {display:'flex',alignItems:'center'}:null}>
           {iconUrl && 
            <img 
                alt=''
                src={iconUrl}
                className={styles.sectionHeadingIcon}
            />} 
            {heading}
        </h2>
    )
}

export default SectionHeading
