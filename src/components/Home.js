import React from "react";

const Home = () => (
  <div>
    <h2>All Courses</h2>
    <p>Welcome to the course catalog. Choose a category to explore courses.</p>
    <div className="course-card">
      <h3>Python Objects 101</h3>
      <p>
        Learn the basics of Python objects and how to use them in your programs.
      </p>
    </div>
    <div className="course-card">
      <h3>Machine Learning Must-Know</h3>
      <p>
        Understand the essentials of machine learning and how to apply them.
      </p>
    </div>
    <div className="course-card">
      <h3>Unlocking the Power of NLP</h3>
      <p>
        Explore the field of Natural Language Processing and its applications.
      </p>
    </div>
  </div>
);

export default Home;
