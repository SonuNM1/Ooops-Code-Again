import { useContext, useEffect, useState } from "react";
import { PostStore } from "../global_provider/PostStore";
import { useContextSelector } from "use-context-selector";

const PostDetail = () => {

    // const data = useContext(PostStore)
  
    const selectedPostId = useContextSelector(PostStore, (context) => {
      return context.selectedPostId ; 
    })

    const [postDetail, setPostDetail] = useState(null) ; 
  
    useEffect(()=> {
  
      if(selectedPostId){
        fetch('https://jsonplaceholder.typicode.com/posts/'+selectedPostId)
        .then((res) => res.json())
          .then((response) => {
            setPostDetail(response) ;
          })
      }
    }, [selectedPostId])
  
    if(postDetail == null){
      return <div>
        Please select a post
      </div>
    }
  
    return <div>
      <div>{postDetail.title}</div>
      <div style={{marginTop: 2, borderColor: '1px solid blue'}} >{postDetail.body}</div>
    </div>;
  };

export default PostDetail ; 