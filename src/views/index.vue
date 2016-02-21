<template>
    <div id="app">
        <img class="logo" src="../assets/logo.png">
        <hello></hello>
    </div>
</template>

<script>
import hello from '../components/hello'

export default {
    components: {
        hello
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
