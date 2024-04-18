<template>
    <div>
        <h2>Actors</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Join Date</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(actor, index) in actors" :key="index">
                    <td>
                        <input
                            v-model="actor.name"
                            type="text"
                            :name="'actors[' + index + '].name'"
                            required
                        />
                        <!-- <span v-if="errors.has(`actors.${index}.name`)" class="error">{{
                    errors.first(`actors.${index}.name`) }}
                        </span> -->
                    </td>
                    <td>
                        <input
                            v-model="actor.age"
                            type="number"
                            :name="'actors[' + index + '].age'"
                            required
                        />
                        <!-- <span v-if="errors.has(`actors.${index}.age`)" class="error">{{
                    errors.first(`actors.${index}.age`) }}
                        </span> -->
                    </td>
                    <td>
                        <input
                            v-model="actor.joinDate"
                            type="date"
                            :name="'actors[' + index + '].joinDate'"
                            required
                        />
                        <!-- <span v-if="errors.has(`actors.${index}.joinDate`)" class="error">{{
                    errors.first(`actors.${index}.joinDate`) }}
                        </span> -->
                    </td>
                    <td>
                        <select
                            v-model="actor.role"
                            :name="'actors[' + index + '].role'"
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="Background role">
                                Background role
                            </option>
                            <option value="Cameo">Cameo</option>
                            <option value="Recurring character">
                                Recurring character
                            </option>
                            <option value="Side character">
                                Side character
                            </option>
                            <option value="Series regular">
                                Series regular
                            </option>
                        </select>
                        <!-- <span v-if="errors.has(`actors.${index}.role`)" class="error">{{
                    errors.first(`actors.${index}.role`) }}</span> -->
                    </td>
                    <td><button @click="removeActor(index)">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <button @click="addActor">Add Actor</button>
    </div>
</template>

<script>
import { useForm, useFieldArray } from 'vee-validate'

export default {
    props: {
        actors: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const { handleSubmit, errors } = useForm()

        const { fields, remove, push } = useFieldArray({
            field: 'actors',
            validateOnChange: false,
        })

        const addActor = () => {
            push({ name: '', age: null, joinDate: '', role: '' })
        }

        const removeActor = (index) => {
            remove(index)
        }

        const submitForm = handleSubmit(() => {
            props.$emit('submit', props.actors)
        })

        return { fields, addActor, removeActor, errors, submitForm }
    },
}
</script>

<style scoped></style>
