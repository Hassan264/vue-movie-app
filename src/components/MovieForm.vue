<template>
    <div class="form-container">
        <form @click="submitForm">
            <div>
                <label for="title">Title:</label>
                <input
                    v-model="localFormData.title"
                    type="text"
                    id="title"
                    name="title"
                    required
                />
                <span v-if="formErrors.title" class="error">{{
                    formErrors.title
                }}</span>
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
                <span v-if="formErrors.year" class="error">{{
                    formErrors.year
                }}</span>
            </div>
            <actor-form
                :actors="localFormData.actors"
                @add="addActor"
                @remove="removeActor"
            />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import ActorForm from '../components/ActorForm.vue'

export default {
    name: 'MovieForm',
    props: {
        formData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            formErrors: {
                title: '',
                year: '',
            },
            localFormData: { ...this.formData },
        }
    },
    methods: {
        addActor() {
            this.form.actors.push({
                name: '',
                age: null,
                joinDate: '',
                role: '',
            })
        },
        removeActor(index) {
            this.form.actors.splice(index, 1)
        },
        submitForm(e) {
            console.log(e)
            e.preventDefault()
            this.validateForm()
            if (!this.formHasErrors()) {
                this.$emit('submit', this.localFormData)
                console.log('submit', this.localFormData)
                // this.localFormData.title = ''
                // this.localFormData.description = ''
                // this.localFormData.year = ''
            }
        },
        validateForm() {
            this.formErrors.title = !this.localFormData.title
                ? 'Title is required'
                : ''
            this.formErrors.year = !this.localFormData.year
                ? 'Year is required'
                : ''
        },
        formHasErrors() {
            return this.formErrors.title || this.formErrors.year
        },
    },
    components: {
        ActorForm,
    },
}
</script>

<style scoped>
.form-container {
    margin: 0 auto;
    max-width: 600px;
}

.form-container label {
    display: block;
}

.form-container input,
.form-container textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
}

.form-container .error {
    color: red;
}

.form-container button {
    margin-top: 10px;
}
</style>
