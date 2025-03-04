import { useContext, useEffect } from "react";
import { PostStore } from "../global_provider/PostStore";
import { useContextSelector } from "use-context-selector";  

export const PostList = () => {

  // const data = useContext(PostStore) ;

   const postList = useContextSelector(PostStore, (context) => {
    console.log('context', context) ;
    
    return context.postList ; 

   })

  // console.log('data: ', data) ; 

  const setPostList = useContextSelector(PostStore, (context) => {
    return context.setPostList ; 
  })

  const setSelectedPostId = useContextSelector(PostStore, (context) => {
    return context.setSelectedPostId ; 
  })

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts/')               
     .then(res => res.json())
      .then((response) => {
        setPostList(response)
      })
  }, [])

  return (
  <ul>
      {postList.map(postItem => {
        return <li 
          onClick={() => {
            setSelectedPostId(postItem.id)
          }}
          key={postItem.id}
        >{postItem.title}</li>
      })}
  </ul>
  );
};