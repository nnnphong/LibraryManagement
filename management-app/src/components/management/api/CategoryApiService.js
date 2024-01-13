import { apiClient } from "./ApiClient";


export const retrieveAllCategoryApi =
    () => apiClient.get('/category')

export const deleteCategoryApi = 
    (id) => apiClient.delete(`/category/${id}`)

export const updateCategoryApi = 
    (id, category) => apiClient.put(`/category/${id}`, category)

export const createCategoryApi = 
    (category) => apiClient.post('/category', category)
    
export const takeMostCategory =
    (userName) => apiClient.get(`/suggestion/${userName}`)