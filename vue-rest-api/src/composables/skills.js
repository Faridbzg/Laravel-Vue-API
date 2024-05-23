import {ref} from "vue"
import axios from "axios";
import { useRouter } from "vue-router";
axios.defaults.baseURL='http://127.0.0.1:8000/api/v1/'
export default function useSkills(){

    const skills=ref([]);
    const skill=ref([]);
    const errors=ref({});
    const router=useRouter();
    const getSkills=async()=>{
        const resposne=await axios.get('http://127.0.0.1:8000/api/v1/skills');
        skills.value =resposne.data.data;
    }

    const getSkill=async (id)=>{
       const resposne=await axios.get("skills/" + id);
        skill.value =resposne.data.data;
    }

    const StoreSkill= async(data) =>{
        try{
            await axios.post("skills",data);
            await router.push({name:"SkillIndex"});
        }catch(error){
            if(error.resposne.status === 442){
                errors.value=error.resposne.data.errors
            }
        }
    }
    const UpdateSkill= async(id)=>{
        try{
            await axios.put("skills/" + id,skill.value);
            await router.push({name:"SkillIndex"});
        }catch(error){
            if(error.resposne.status === 442){
                errors.value=error.resposne.data.errors
            }
        }
    }

    const destroySkill= async(id)=>{
        if(!window.confirm("Are you Sure??!")){
          return;  
        }
        await axios.delete("skills/" + id);
        await getSkills();
    }
    return{
        skill,
        skills,
        getSkill,
        getSkills,
        StoreSkill,
        UpdateSkill,
        destroySkill,
        errors,
    };
}