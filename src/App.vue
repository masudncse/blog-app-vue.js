<template>
  <div id="app">
    <!-- Header -->
    <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
      <div class="container">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target=".bs-navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="logo-link">
            <img src="./assets/img/logo.png" alt="Astrospace" />
          </a>
        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
          <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view></router-view>

    <!-- Footer -->
    <footer>
      <div class="container">
        <hr />
        <p class="text-center">Copyright &copy; Astrospace 2014. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
