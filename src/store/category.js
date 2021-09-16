import firebase from "@firebase/app-compat";

export default {
    state:{
        currentCategoryId: null,
    },
    mutations: {
        setCurrentCategory(state, currentCategoryId) {
            state.currentCategoryId = currentCategoryId
       }
    },
    getters: {
        currentCategoryId: (s) => s.currentCategoryId
    },
    actions:{
        async createCategory({commit, dispatch}, {title, limit}){
            try{
                const uid = await dispatch('getUid')
                const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, limit})
                return {title, limit, id:category.key}
            }catch(error){
                commit('setError', error)
                throw error
            }
        },
        async updateCategory({commit, dispatch}, {title, limit, id}){
            try{
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/categories`).child(id).update({title, limit})
                commit('setCurrentCategory', id)
            }catch(error){
                commit('setError', error)
                throw error
            }
        },
        async fetchCategories({commit, dispatch}){
            try{
                const uid = await dispatch('getUid')
                const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {};
                
                // const cats=[]
                // Object.keys(categories).forEach(key => {
                //     cats.push ({
                //         title:categories[key].title,
                //         limit:categories[key].limit,
                //         id:key
                //     })
                // })
                // return cats;

                return Object.keys(categories).map(key => ({...categories[key], id:key}))
            }catch(error){
                commit('setError', error)
                throw error
            }
        }
    },
}