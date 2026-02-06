BEGIN;

    INSERT INTO public.users (first_name, last_name, email, password, created_at ) 
        VALUES('admin', 'admin', 'user@example.com',  '$2b$10$sLHKq7J2DX7xqUcPCA5rAutQOP//mOpuzvLXJSnfBIjVHJkuZqjFG', '1999-01-01 01:01:01.001+00');

    INSERT INTO equipment_types (type, description) 
        VALUES ('Undefined', 'generated, no struct');
    INSERT INTO equipment_types (type, description) 
        VALUES ('Site', 'Factory or location');
    INSERT INTO equipment_types (type, description) 
        VALUES ('Area', 'Location within an factory');
    INSERT INTO equipment_types (type, description) 
        VALUES ('System', 'collection of machine with function');
    INSERT INTO equipment_types (type, description) 
        VALUES ('Equipment', 'piece of machinery');
    INSERT INTO equipment_types (type, description) 
        VALUES ('Module', 'part of machine');

    INSERT INTO data_types (type, is_categorical, description) 
        VALUES ('int', False, 'this is a number');
    INSERT INTO data_types (type, is_categorical, description) 
        VALUES ('double', false, 'this is a decimal number');
    INSERT INTO data_types (type, is_categorical, description) 
        VALUES ('string', True, 'this is a piece of text');
    INSERT INTO data_types (type, is_categorical, description) 
        VALUES ('bool', true, 'this is yes or no');

COMMIT;