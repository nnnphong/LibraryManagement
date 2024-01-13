import { apiClient } from "./ApiClient";

export const retriveAllUsersApi =
    () => apiClient.get('users')

export const retrieveUserByIdApi = 
    (id) => apiClient.get(`/users/${id}`)

export const deleteUserApi = 
    (id) => apiClient.delete(`/users/${id}`)

export const updateUserApi =
    (id, userFormDTO) => apiClient.put(`/users/${id}`, userFormDTO)

export const createUserApi = 
    (userFormDTO) => apiClient.post(`/users`, userFormDTO)

// export const retrieveUserBy0Api =
//     () => apiClient.get('/info')
    
export const registerUserApi = 
    (registerFormDTO) => apiClient.post(`/register`, registerFormDTO)

export const addLibraryApi =
    (userName, book) => apiClient.post(`/library/${userName}`, book)

export const getLibraryApi =
    (userName) => apiClient.get(`/library/${userName}`)

export const getUserByNameApi =
    (username) => apiClient.get(`/username/${username}`)

export const retrieveUserBookApi =
    (userName, bookID) => apiClient.get(`/update?userName=${userName}&bookID=${bookID}`)

export const updateUserBookApi =
    (userName, bookID, readFormDTO) => apiClient.put(`/update?userName=${userName}&bookID=${bookID}`, readFormDTO)

export const finishBookApi =
    (userName, bookID) => apiClient.get(`/read?userName=${userName}&bookID=${bookID}`)

