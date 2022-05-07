import React from 'react';
import './Blog.css'

const Blog = () => {
      return (
            <div className='blog'>
                  <h5 className='write'><span className='text-danger'>1.</span> JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses.JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node. js is a server-side scripting language based on the Google Chrome V8 engine.
                  </h5>
                  <h5 className='write'><span className='text-danger'>2.</span>

                        Nodejs is a Javascript engine that you can write any application you want with Javascript language. It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...<br />
                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database.MongoDB is one of the popular databases
                  </h5>
                  <h5 className='write'><span className='text-danger'>3.</span>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</h5>
                  <h5 className='write'><span className='text-danger'>4.</span>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                  </h5>
            </div>
      );
};

export default Blog;