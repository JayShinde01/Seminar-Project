import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
const collectionRef = collection(db,"Posts")
// function which take parameter as a post named object and returns post id 
//params: 1)post(object)
export async function createPost(post) {
    let postDoc = addDoc(collectionRef,post)
    return post.id;
}
//function which is returns the all posts
export async function getAllPosts() {
    let snapShot = await getDocs(collectionRef)
    let posts = snapShot.docs.map((post=>{
       return {
        id:post.id,
        ...post.data()
    }
    }))
    return posts;
}

// a function which take postId as a parameter and return single user according to post id
export async function getPost(postId) {
    let singlePost = await getDoc( doc(db,"Posts",postId))
    return  singlePost.data()
}

// function which takes post id as a parameter and delete post
export async function deletePost(postId) {
    await deleteDoc(doc(db,"Posts",postId))
}
// function which updates post
//params: 1)post
        //2)updated post
 export async function updatePost(postId,updatedPost) {
    await updateDoc(doc(db,"Posts",postId),updatedPost)
 }