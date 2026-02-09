// =======================
// Database initialization
// =======================

print("Initializing database schema...");

// -----------------------
// Collections
// -----------------------

db.createCollection("projects");

// -----------------------
// Indexes
// -----------------------

// projects
db.projects.createIndex({ title: 1 }, { unique: true });

print("Schema created successfully.");