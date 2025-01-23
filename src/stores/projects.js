import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProjectStore = defineStore('user-store', () => {
    const projects = ref([])
    const filteredProjects = ref([])
    const fetch = async () => {
        try {
            let response = await axios.get('/api/projects')
            projects.value = response.data.data
            filteredProjects.value =  projects.value
        } catch (error){
            console.log(error)
        }
    }
    const filter = (query) => {
        if(query == ''){
            filteredProjects.value= projects.value
            return
        }
        filteredProjects.value = projects.value.filter(project => {
            return (
                project.name.toLowerCase().includes(query.toLowerCase())
            )
        })
    }
    return{
        projects,
        fetch,
        filter,
        filteredProjects
    }
})

