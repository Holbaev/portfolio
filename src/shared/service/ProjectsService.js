import api from "../api";

export function getProject(id){
    return api.get(`/projects/${id}`);
}