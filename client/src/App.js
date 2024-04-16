import React from 'react';
import PostCreate from './postCreate';
import PostList from './postList';


export default () => {
    return <div>
        <h1>Blog app</h1>
        <PostCreate />
        <hr/>
        <h1>Posts</h1>
        <PostList />
    </div>;
}