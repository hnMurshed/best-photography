import React from 'react';

const Blogs = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center mb-4'>Blogs</h2>

            <div class="d-flex">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">What other services does firebase provide other than authentication?</h5>
                        <p class="card-text">There are lots of sevices Firebase provide rather than Authentication. These services includes Realtime Database, Cloud Firestore, Cloud Storage, Machine Learning, Clode Functions, Hosting, Security Rules, etc</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Published on 03-14-2022</small>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Why are you using firebase? What other options do you have to implement authentication?</h5>
                        <p class="card-text">Firebase is the best option for me. It has powerful features for developing, handling, and enhancing applications. It provide several services such as  databases, authentication, push messages, analytics, file storage, and much more.</p>
                        <p class="card-text">Howover besides Firebase, I have much more options to implement authentication. To implement authentication, I can use MongoDB, Okta, JSON Web Token, Amazon Cognito, etc</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Published on 04-10-2022</small>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3"> Difference between authorization and authentication</h5>
                        <p class="card-text">Simply, Authentication veryfies a user who it is, whereas Authorization verifies what specific applications, files, and data the user has access to. </p>
                        <p class="card-text">Authentication is used to verify the users really are who they represent themselves to be. Then authorization is used to permit the user to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Published on 04-14-2022</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;