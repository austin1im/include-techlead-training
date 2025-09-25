import blogPosts from "@/data/blog";
import styles from "./blogPost.module.scss"

export async function generateStaticParams() {
    return blogPosts.map(post => ({
        slug: post.slug
    }));
}

export default async function BlogPost ({params}) {
    const resolvedParams = await params;
    const post = blogPosts.find(post => post.slug == resolvedParams.slug)
    return (
        <main className={styles.mainContainer}>
            <h1>
                {post.title}
            </h1>
            <p>
                {post.content}
            </p>
        </main>
    )
}