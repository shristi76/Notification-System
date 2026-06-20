CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE api_keys(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    api_key TEXT UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notifications(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    recipient VARCHAR(255),
    subject TEXT,
    message TEXT,
    status VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);