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
                    <td>{{ actor.name }}</td>
                    <td>{{ actor.age }}</td>
                    <td>{{ actor.joinDate }}</td>
                    <td>{{ actor.role }}</td>
                    <td>
                        <button @click="editActor(index)">Edit</button>
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
    props: {
        actors: {
            type: Array,
            required: true,
        },
    },
    methods: {
        addActor() {},
        editActor(index) {
            console.log(index)
        },
        removeActor(index) {
            console.log(index)
        },
    },
}
</script>

<style scoped></style>
