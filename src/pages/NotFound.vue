<template>
  <div>
    <h2>
      This route does not exist, Are you looking for
      <router-link to="/home">HOME?</router-link>
    </h2>
    <h2>
      Do you want to create an account?
      <router-link to="/auth/signup">Create new Account</router-link>
    </h2>
      <h2>
      Already have an account?
      <router-link to="/auth/login">Log into your Account</router-link>
    </h2>
    <img
      src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg"
      alt="nof-found"
    />
  </div>
</template>
