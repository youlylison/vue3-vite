<template>
    <div>
        <h1>login</h1>
        <p>{{ message }}</p>
        <button @click="handleClick">Click me</button>
    </div>
</template>

<script setup lang='ts'>
let message = 1

const handleClick = () => {
    message += 1
}
</script>

<style></style>