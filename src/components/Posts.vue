<template>
  <!-- Body -->
  <div class="container">
    <h1>Posts</h1>

    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="title">Post Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter post title" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" placeholder="Enter post description"></textarea>
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" class="form-control" id="image" />
          </div>
        
          <button type="submit" class="btn btn-primary">Submit</button>
          <a href="#" class="btn btn-default">Add New</a>
        </form>
      </div>

      <div class="col-md-12">
        <hr />
      </div>

      <div class="col-md-12">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Post Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Category</th>
              <th>Modified At</th>
              <th width="150">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Learn PHP Advance In Online</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea.</td>
              <td>
                <img src="assets/img/404.png" alt width="100" class="img-thumbnail" />
              </td>
              <td>PHP</td>
              <td>12 Feb, 2018</td>
              <td>
                <a href="#" class="btn btn-default">Edit</a>
                <a href="#" class="btn btn-danger">Remove</a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea.</td>
              <td>
                <img src="assets/img/404.png" alt width="100" class="img-thumbnail" />
              </td>
              <td>JAVA</td>
              <td>18 Feb, 2019</td>
              <td>
                <a href="#" class="btn btn-default">Edit</a>
                <a href="#" class="btn btn-danger">Remove</a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Lorem ipsum dolor.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea.</td>
              <td>
                <img src="assets/img/404.png" alt width="100" class="img-thumbnail" />
              </td>
              <td>Python</td>
              <td>18 Feb, 2019</td>
              <td>
                <a href="#" class="btn btn-default">Edit</a>
                <a href="#" class="btn btn-danger">Remove</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
