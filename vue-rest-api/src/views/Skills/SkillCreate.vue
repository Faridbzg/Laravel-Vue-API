
import { errorMessages } from 'vue/compiler-sfc';
<script setup>
import useSkills from "@/composables/skills";
import { reactive } from "vue";
const { StoreSkill,errors }= useSkills();
const form=reactive({
    name:"",
    slug:""
})

</script>
<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="StoreSkill(form)">
<div class="space-y-6">
    <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
    <input v-model="form.name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div> 
<div v-if="errors.name">
    <span class="text-sm text-red-400">{{ errors.name[0] }}</span></div>               
   
<div class="mb-6">
    <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
    <input v-model="form.slug" type="text" id="slug" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>
<div v-if="errors.slug">
    <span class="text-sm text-red-400">{{ errors.slug[0] }}</span></div> 

</div>
<div class="mt-4">
    <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800 rounded-full text-white">Store Skill</button>
</div>
</form>
 </div>
</template>
