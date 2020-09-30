import React from 'react';
import PostForm from "./components/PostFrom";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import Form from "./components/Form";

function App() {
    return (
        <div className="container pt-3">

            <div className="row">
                <div className="col">
                    <PostForm />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h2>Синхронные посты</h2>
                    <Posts posts={[]}/>
                </div>

                <div className="row">
                    <div className="col">
                        <h2>Асинхронные посты</h2>
                        <FetchedPosts posts={[]}/>
                    </div>
                </div>
            </div>

            <Form/>

        </div>
    );
}

export default App;
