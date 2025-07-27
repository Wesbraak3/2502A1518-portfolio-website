BEGIN;

--users table (users)
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    version SMALLINT DEFAULT 1,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

--history table (users_history)
CREATE TABLE IF NOT EXISTS users_history (
    history_id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    version SMALLINT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    password TEXT,
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ,
    operation VARCHAR(10) NOT NULL,           -- 'INSERT', 'UPDATE', 'DELETE'
    changed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_users_history_changed_at ON users_history(changed_at);

END;