import { useEffect, useState } from "react";
import TableEmp from "./TableEmp";
import DataHandling from "./DataHandling";

const Posts = () => {
  const { isWaitingData, connServerError, posts: fetchedPosts } = DataHandling('https://jsonplaceholder.typicode.com/posts');
  const [posts, setPosts] = useState([]);
  const [checkStatus, setCheckStatus] = useState('OK!');

  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts]);

  const DeleteEmp = (id) => {
    const updateEmp = posts.filter(post => post.id !== id);
    setPosts(updateEmp);
  };

  return (
    <div>
         

      {isWaitingData && <h1><p style={{ color: 'red' }}> Data Loading...</p></h1>}
      {connServerError && <h3>{connServerError}</h3>}

      {posts && (
        <TableEmp
          posts={posts}
          tableName="Showing all Employees"
          DeleteEmp={DeleteEmp}
        />
      )}
    </div>
  );
};

export default Posts;
