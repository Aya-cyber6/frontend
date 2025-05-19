import React from 'react';

function UserDashboard() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 rounded-4">
        <h2 className="mb-4 text-center text-primary">Welcome to Your Dashboard</h2>
        
        <p className="lead text-center">
          You are now logged in. Here’s what you can do:
        </p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card border-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">View Profile</h5>
                <p className="card-text">Check and edit your personal info.</p>
                <button className="btn btn-outline-primary w-100">Go</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Your Activities</h5>
                <p className="card-text">See your recent actions or history.</p>
                <button className="btn btn-outline-success w-100">View</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Log Out</h5>
                <p className="card-text">Sign out of your account safely.</p>
                <button className="btn btn-outline-danger w-100">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
