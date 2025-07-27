CREATE OR REPLACE FUNCTION log_users_change()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO users_history
        (user_id, version, first_name, last_name, email, password, created_at, updated_at, operation)
        VALUES
        (OLD.id, OLD.version, OLD.first_name, OLD.last_name, OLD.email, OLD.password, OLD.created_at, OLD.updated_at, 'DELETE');
        RETURN OLD;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO users_history
        (user_id, version, first_name, last_name, email, password, created_at, updated_at, operation)
        VALUES
        (OLD.id, OLD.version, OLD.first_name, OLD.last_name, OLD.email, OLD.password, OLD.created_at, OLD.updated_at, 'UPDATE');
        RETURN NEW;
    ELSIF TG_OP = 'INSERT' THEN
        INSERT INTO users_history
        (user_id, version, first_name, last_name, email, password, created_at, updated_at, operation)
        VALUES
        (NEW.id, NEW.version, NEW.first_name, NEW.last_name, NEW.email, NEW.password, NEW.created_at, NEW.updated_at, 'INSERT');
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prune_old_user_history()
RETURNS void AS $$
BEGIN
    DELETE FROM users_history
    WHERE changed_at < now() - INTERVAL '4 years';
END;
$$ LANGUAGE plpgsql;