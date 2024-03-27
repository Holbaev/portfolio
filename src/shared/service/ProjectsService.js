import {db , firebase} from '../firebase/firebase';
import {doc , getDoc } from "firebase/firestore";


export async function getProject(id){
    const productsRef = doc(db , 'projects' , id);
    const projects = await getDoc(productsRef);
    return projects.exists ? projects.data() : null;
}