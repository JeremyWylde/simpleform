import React from "react";
import Post from "./Post";
import {loadData} from "../redux/actions";
import {connect} from "react-redux";

export const FetchedPosts =  ({posts, loadData, asyncPosts}) => {
    if(!asyncPosts.length)
        return <button className={"btn btn-primary"}
                       onClick={()=>loadData()}>Загрузить</button>

    return asyncPosts.map(post => {
        return <Post post={post} key={post.id}/>
    })
}

const mapDispatchToProps = {
    loadData
}

const mapStateToProps = state => {
    return {
        asyncPosts: state.posts.fetchedPosts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts)
