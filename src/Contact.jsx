import React from 'react';
const Contact = () =>
{
  return(
    <>
<dev className="my-5">
<h1 className="text-center">
  Contact Us
  </h1> 
  <div className="container contact-div">
    <div className="row">
      <div className="col-md-5 col-10 mx-auto">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Issue</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">Suggestion or Complain</small>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">file suggestion/complain</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">Tell us in brief</small>
  </div>
  <button type="submit" class="btn btn-warning">Submit</button>
</form>
      </div>
    </div>

  </div>

</dev>
    </>
  )
};

export default Contact;