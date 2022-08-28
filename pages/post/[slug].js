import { useContext, useEffect, useState } from "react";
import ArticalMain from "../../components/ArticalMain";
import ReaderNav from "../../components/ReaderNav";
import Recommendations from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from "next/router";
import Router from "next/dist/server/router";

const styles = {
  content: `flex`,
};

const Post = () => {
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  const { posts, users } = useContext(MediumContext);
  const router = useRouter();

  useEffect(() => {
    if (posts.length === 0) {
      return;
    }

    setPost(posts.find((post) => post.id === router.query.slug));
    setAuthor(users.find((user) => user.id === post.data?.author));
  }, [post]);

  return (
    <div className={styles.content}>
      <ReaderNav />
      <ArticalMain post={post} author={author} />
      <Recommendations />
    </div>
  );
};

export default Post;
