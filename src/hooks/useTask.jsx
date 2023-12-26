import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { useQuery } from "react-query"

const useTask = () => {
    const {user,logOUt} = useContext(AuthContext)

    const {data:tasks = [],refetch} = useQuery({
        queryKey:['tasks'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/tasks?email=${user.email}`,{
                headers: {
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data = res.json()
            console.log(data)
            if(data.message === 'forbidden access'){
                return logOUt().then(res => {}).catch(err =>console.error(err));
            }
            return data
        }
    })
    return [tasks, refetch]
}

export default useTask