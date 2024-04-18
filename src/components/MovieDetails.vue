<template>
    <div>
        <h2>Movie Details</h2>
        <div><strong>Title:</strong> {{ movie.title }}</div>
        <div><strong>Description:</strong> {{ movie.description }}</div>
        <div><strong>Year:</strong> {{ movie.year }}</div>
        <!-- Add more details as needed -->
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
