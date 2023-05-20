import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div>
      <div className="p-5">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 my-4 rounded-box"
        >
          <div className="collapse-title text-3xl font-bold">
            Q1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              <span className="text-2xl">Answer:</span> An access token is a
              short-lived, limited-privilege token that is used to access
              protected resources. A refresh token is a long-lived,
              high-privilege token that can be used to obtain new access tokens.{" "}
              <br />
              Access tokens are typically used to access resources that are only
              needed for a short period of time, such as a user's profile
              information or a list of their friends. Refresh tokens are
              typically used to access resources that are needed for a longer
              period of time, such as a user's email inbox or their calendar.{" "}
              <br />
              Access tokens are typically stored in the browser's local storage
              or cookies. Refresh tokens are typically stored in the browser's
              local storage or a secure database. <br />
              Here is how access tokens and refresh tokens work: <br />
              1. The user logs in to the application. <br /> 2. The application
              requests an access token from the authorization server. <br /> 3.
              The authorization server grants the access token to the
              application. <br /> 4. The application stores the access token in
              the browser's local storage or cookies. <br /> 5. The application
              uses the access token to access protected resources.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 my-4 rounded-box"
        >
          <div className="collapse-title text-3xl font-bold">
            Q2. Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              <span className="text-2xl">Answer:</span> SQL and NoSQL are two
              different types of database management systems (DBMS). SQL
              databases are relational, while NoSQL databases are
              non-relational. This means that SQL databases store data in
              tables, with each row representing a single record and each column
              representing a single piece of data about that record. NoSQL
              databases, on the other hand, store data in a variety of ways,
              including key-value pairs, documents, and graphs.
              <br />
              There are several key differences between SQL and NoSQL databases.
              First, SQL databases are more structured than NoSQL databases.
              This means that SQL databases have a predefined schema, which
              specifies the data types and relationships between the data in the
              database. NoSQL databases, on the other hand, have dynamic
              schemas, which means that the data types and relationships between
              the data can change over time.
              <br />
              Second, SQL databases are better for performing complex queries.
              This is because SQL databases have a rich query language that
              allows users to specify complex relationships between the data in
              the database. NoSQL databases, on the other hand, are better for
              performing simple queries. This is because NoSQL databases do not
              have a rich query language. <br />
              Third, SQL databases are better for storing large amounts of data.
              This is because SQL databases are designed to scale vertically,
              which means that they can be made larger by adding more memory and
              processing power to the database server. NoSQL databases, on the
              other hand, are designed to scale horizontally, which means that
              they can be made larger by adding more database servers.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 my-4 rounded-box"
        >
          <div className="collapse-title text-3xl font-bold">
            Q3. What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              <span className="text-2xl">Answer:</span>
              Express.js and Nest.js are both frameworks for building web
              applications using Node.js. Express.js is a lightweight framework
              that provides a minimal set of features, while Nest.js is a more
              comprehensive framework that provides a wider range of features,
              including dependency injection, routing, and authentication.
              <br />
              Express.js is a good choice for simple web applications, while
              Nest.js is a good choice for more complex web applications.
              <br />
              Here are some additional details about each framework: <br />{" "}
              <span className="text-xl font-semibold">Express.js</span> <br />
              Express.js is a minimal framework that provides a small set of
              features for building web applications. It is easy to learn and
              use, and it is a good choice for simple web applications.
              <br />
              Express.js is a popular framework, and there are many tutorials
              and documentation available online. It is also well-supported by
              the community, and there are many libraries and plugins available.{" "}
              <br />
              <span className="text-xl font-semibold">Nest.js</span>
              <br />
              Nest.js is a more comprehensive framework that provides a wider
              range of features for building web applications. It is built on
              top of Express.js, and it adds features such as dependency
              injection, routing, and authentication. <br />
              Nest.js is a good choice for more complex web applications. It is
              more difficult to learn than Express.js, but it provides a more
              robust set of features.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 my-4 rounded-box"
        >
          <div className="collapse-title text-3xl font-bold">
            Q4. What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              <span className="text-2xl">Answer:</span>
              MongoDB aggregate is a feature that allows you to perform complex
              operations on your data. It is similar to SQL's GROUP BY clause,
              but it is more powerful.
              <br />
              MongoDB aggregate works by using a pipeline of stages. Each stage
              performs an operation on the data, and the output of one stage is
              passed to the next stage. The final stage in the pipeline returns
              the results of the aggregation.
              <br />
              Here are some additional details about each framework: <br />{" "}
              There are many different stages available in MongoDB aggregate.
              Some of the most common stages include:
              <br />
              $match: This stage allows you to filter the data before it is
              processed by the next stage. <br /> $group: This stage groups the data
              together based on a common value. <br /> $sum: This stage calculates the
              sum of a value for each group. $avg: This stage calculates the
              average of a value for each group. <br /> $min: This stage calculates the
              minimum value for each group. <br /> $max: This stage calculates the
              maximum value for each group.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
