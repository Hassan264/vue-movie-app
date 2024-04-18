<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="title">Title:</label>
            <input
                v-model="localFormData.title"
                type="text"
                id="title"
                name="title"
                required
            />
            <!-- <span v-if="errors.has('title')" class="error">{{
                errors.first('title')
            }}</span> -->
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea
                v-model="localFormData.description"
                id="description"
                name="description"
            ></textarea>
        </div>
        <div>
            <label for="year">Year:</label>
            <input
                v-model.number="localFormData.year"
                type="number"
                id="year"
                name="year"
                required
            />
            <!-- <span v-if="errors.has('year')" class="error">{{
                errors.first('year')
            }}</span> -->
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import { useForm } from 'vee-validate'

export default {
    props: {
        formData: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        console.log('setup', { props: props })
        const { handleSubmit, form, errors } = useForm()
        const localFormData = { ...props.formData }

        const submitForm = handleSubmit(() => {
            props.$emit('submit', props.localFormData)
        })

        return { form, errors, submitForm, localFormData }
    },
}
</script>

<style scoped></style>
