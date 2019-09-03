<template>
  <!-- Body -->
  <div class="container">
    <h1>Contact Me</h1>

    <div class="well">
      <p
        class="lead"
      >Do you have any question? Please use the below contact form and send a message. I'll reply you as quick as possible.</p>
    </div>

    <div class="contact-form col-md-8">
      <form class="form-horizontal" role="form">
        <div class="form-group">
          <label for="name" class="col-md-2">Name</label>
          <div class="col-md-10">
            <input type="text" class="form-control" id="name" placeholder="Name" />
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="col-md-2">Email</label>
          <div class="col-md-10">
            <input type="email" class="form-control" id="email" placeholder="Email" />
          </div>
        </div>

        <div class="form-group">
          <label for="subject" class="col-md-2">Subject</label>
          <div class="col-md-10">
            <input type="subject" class="form-control" id="subject" placeholder="Subject" />
          </div>
        </div>

        <div class="form-group">
          <label for="message" class="col-md-2">Message</label>
          <div class="col-md-10">
            <textarea class="form-control" id="message" placeholder="Message"></textarea>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-12 text-right">
            <button type="submit" class="btn btn-lg btn-primary">Submit your message!</button>
          </div>
        </div>
      </form>
    </div>

    <!-- Latest Posts -->
    <div class="col-md-4">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h4>Latest Posts</h4>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <a href="singlepost.html">1. Aries Sun Sign March 21 - April 19</a>
          </li>
          <li class="list-group-item">
            <a href="singlepost.html">2. Taurus Sun Sign April 20 - May 20</a>
          </li>
          <li class="list-group-item">
            <a href="singlepost.html">3. Gemini Sun Sign May 21 - June 21</a>
          </li>
          <li class="list-group-item">
            <a href="singlepost.html">4. Cancer Sun Sign June 22 - July 22</a>
          </li>
          <li class="list-group-item">
            <a href="singlepost.html">5. Leo Sun Sign July 23 - August 22</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
