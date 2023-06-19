import React from "react";
import styles from "./Blog.module.css";
import {blogData} from "./BlogContent";

const Blog: React.FC = () =>{
    return(
        <>
            <div className={styles.blogTitle}>
                <div className={styles.blogTitleFirst}>OUR </div>
                <div>BLOG</div>
            </div>
            <div className={styles.blogBase}>
                <div className={styles.blogContentBase}>
                    {
                        blogData.map((item,index)=>{
                            return(
                                <div className={styles.blogContent} key={index}>
                                    {/*<div className={`${styles.blogContentTitle} ${index % 2 === 0 ? styles.blogContentLeft : styles.blogContentRight}`}>*/}
                                    <div  className={`${index % 2 === 0 ? styles.blogContentLeft : styles.blogContentRight}`}>
                                        <div className={styles.blogContentTitle}>
                                            <div className={styles.blogContentDate}>{item.date}</div>
                                            <div>  </div>
                                            <div className={styles.blogContentTitle}>{item.title}</div>
                                        </div>
                                        <div className={styles.blogContentContent}>{item.content}</div>
                                    </div>
                                </div>
                            )
                        })
                    })

                </div>
            </div>

        </>

    )
}

export default Blog;