<template>
    <div>
        <h1>Add Movie</h1>
        <form @submit.prevent="addMovie">
            <div>
                <label for="title">Title:</label>
                <input
                    v-model="form.title"
                    type="text"
                    id="title"
                    name="title"
                    required
                />
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea
                    v-model="form.description"
                    id="description"
                    name="description"
                ></textarea>
            </div>
            <div>
                <label for="year">Year:</label>
                <input
                    v-model.number="form.year"
                    type="number"
                    id="year"
                    name="year"
                    required
                />
            </div>
            <div>
                <label for="actors">Actors:</label>
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
                        <tr v-for="(actor, index) in form.actors" :key="index">
                            <td>
                                <input
                                    v-model="actor.name"
                                    type="text"
                                    required
                                />
                            </td>
                            <td>
                                <input
                                    v-model.number="actor.age"
                                    type="number"
                                    required
                                />
                            </td>
                            <td>
                                <input
                                    v-model="actor.joinDate"
                                    type="date"
                                    required
                                />
                            </td>
                            <td>
                                <select v-model="actor.role" required>
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
                            </td>
                            <td>
                                <button
                                    type="button"
                                    @click="removeActor(index)"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" @click="addActor">Add Actor</button>
            </div>
            <button type="submit">Add Movie</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddMovie',
    data() {
        return {
            form: {
                title: '',
                description: '',
                year: null,
                actors: [{ name: '', age: null, joinDate: '', role: '' }],
            },
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
        addMovie() {
            this.$store.dispatch('addMovie', this.form)
            // Clear form fields after adding movie
            this.form = {
                title: '',
                description: '',
                year: null,
                actors: [{ name: '', age: null, joinDate: '', role: '' }],
            }
        },
    },
}
</script>

<style>
/* Add styles as needed */
</style>
