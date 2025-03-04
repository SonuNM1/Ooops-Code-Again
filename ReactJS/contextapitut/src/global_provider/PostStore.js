import React, { useState } from "react";
import { createContext } from "use-context-selector";

export const PostStore = React.createContext();

export const PostStoreProvider = ({children}) => {
    
    const [postList, setPostList] = useState([]) ; 
    const [selectedPostId, setSelectedPostId] = useState(null) ; 
    
    console.log('Selected Post ID: ', selectedPostId)

    return (
        <PostStore.Provider value={{postList, setPostList, setSelectedPostId, selectedPostId}}>
            {children}
        </PostStore.Provider>
    )

}