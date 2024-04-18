<template>
    <div class="actor-list-container">
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
                <tr v-for="(actor, index) in localFormData" :key="index">
                    <td><input v-model="actor.name" type="text" required /></td>
                    <td>
                        <input
                            v-model.number="actor.age"
                            type="number"
                            required
                        />
                    </td>
                    <td>
                        <input v-model="actor.joinDate" type="date" required />
                    </td>
                    <td>
                        <select v-model="actor.role" required>
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
                    </td>
                    <td>
                        <button @click="removeActor(index)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="addActor">Add Actor</button>
    </div>
</template>

<script>
export default {
    name: 'ActorList',
    props: {
        actors: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            localFormData: this.actors,
        }
    },
    methods: {
        addActor() {
            this.localFormData.push({
                name: '',
                age: null,
                joinDate: '',
                role: '',
            })
        },
        removeActor(index) {
            this.localFormData.splice(index, 1)
        },
    },
}
</script>

<style>
.actor-list-container {
    margin: 0 auto;
    max-width: 600px;
}

.actor-list-container table {
    width: 100%;
    border-collapse: collapse;
}

.actor-list-container th,
.actor-list-container td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

.actor-list-container th {
    background-color: #f2f2f2;
}

.actor-list-container button {
    margin-top: 10px;
}
</style>
