BEGIN;

-- USERS
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    version SMALLINT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

-- ENTERPRISE
CREATE TABLE IF NOT EXISTS enterprises (
    id BIGSERIAL PRIMARY KEY,
    
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(255),
    is_generated BOOLEAN
);
CREATE INDEX IF NOT EXISTS idx_enterprises_name ON enterprises(name);

-- EQUIPMENT TYPES
CREATE TABLE IF NOT EXISTS equipment_types (
    id BIGSERIAL PRIMARY KEY,

    type VARCHAR(50) NOT NULL,
    description VARCHAR(255)
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_equipment_types_type ON equipment_types(type);

-- EQUIPMENTS
CREATE TABLE IF NOT EXISTS equipments (
    id BIGSERIAL PRIMARY KEY,
    parent BIGINT,
    enterprise BIGINT NOT NULL,
    equipment_type BIGINT NOT NULL DEFAULT 1,
    
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    is_generated BOOLEAN DEFAULT True,
    
    CONSTRAINT fk_equipments_parent FOREIGN KEY (parent)
        REFERENCES equipments(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_equipments_enterprise FOREIGN KEY (enterprise)
        REFERENCES enterprises(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_equipments_equipments_types FOREIGN KEY (equipment_type)
        REFERENCES equipment_types(id)
        ON UPDATE CASCADE ON DELETE SET DEFAULT
);
CREATE INDEX IF NOT EXISTS idx_equipments_parent ON equipments(parent);
CREATE INDEX IF NOT EXISTS idx_equipments_enterprise ON equipments(enterprise);
CREATE INDEX IF NOT EXISTS idx_equipments_equipment_type ON equipments(equipment_type);
CREATE INDEX IF NOT EXISTS idx_equipments_name ON equipments(name);

-- DATA TYPES
CREATE TABLE IF NOT EXISTS data_types (
    id BIGSERIAL PRIMARY KEY,

    type VARCHAR(50) NOT NULL,
    is_categorical BOOLEAN NOT NULL,
    description VARCHAR(50)
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_data_types_type ON data_types(type);

-- PROPERTIES
CREATE TABLE IF NOT EXISTS properties (
    id BIGSERIAL PRIMARY KEY,
    equipment BIGINT NOT NULL,
    data_type BIGINT NOT NULL DEFAULT 1,
    
    name VARCHAR(50) NOT NULL,
    custom_name VARCHAR(50),
    unit VARCHAR(10),
    is_generated BOOLEAN,

    CONSTRAINT fk_properties_equipment FOREIGN KEY (equipment)
        REFERENCES equipments(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_properties_data_type FOREIGN KEY (data_type)
        REFERENCES data_types(id)
        ON UPDATE CASCADE ON DELETE SET DEFAULT
);
CREATE INDEX IF NOT EXISTS idx_properties_equipment ON properties(equipment);
CREATE INDEX IF NOT EXISTS idx_properties_data_type ON properties(data_type);
CREATE INDEX IF NOT EXISTS idx_properties_name ON properties(name);

-- DATA VALUES
CREATE TABLE IF NOT EXISTS data_values (
    id BIGSERIAL PRIMARY KEY,
    property BIGINT NOT NULL,

    registered TIMESTAMPTZ NOT NULL,
    value TEXT NOT NULL,

    CONSTRAINT unique_data_values UNIQUE (registered, property, value),
    CONSTRAINT fk_data_values_property FOREIGN KEY (property)
        REFERENCES properties(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_data_values_property ON data_values(property);
CREATE INDEX IF NOT EXISTS idx_data_values_registered ON data_values(registered);
CREATE INDEX IF NOT EXISTS idx_data_values_property_registered ON data_values(property, registered);

-- batch tracking

-- PROCES
CREATE TABLE IF NOT EXISTS processes (
    id BIGSERIAL PRIMARY KEY,
    enterprise BIGINT NOT NULL,

    name VARCHAR(50) NOT NULL,
    description VARCHAR(50),

    CONSTRAINT fk_processes_enterprises FOREIGN KEY (enterprise)
        REFERENCES enterprises(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_proces_name ON processes(name);

-- ACTIONS
CREATE TABLE IF NOT EXISTS actions (
    id BIGSERIAL PRIMARY KEY,
    proces BIGINT NOT NULL,

    name VARCHAR(50) NOT NULL,
    description VARCHAR(50),

    CONSTRAINT fk_actions_processes FOREIGN KEY (proces)
        REFERENCES processes(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_actions_proces ON actions(proces);
CREATE INDEX IF NOT EXISTS idx_actions_name ON actions(name);

-- ACTION ↔ PROPERTY MAP
CREATE TABLE IF NOT EXISTS action_property_map (
    action BIGINT NOT NULL,
    property BIGINT NOT NULL,

    PRIMARY KEY (action, property),
    CONSTRAINT fk_action_property_map_action FOREIGN KEY (action)
        REFERENCES actions(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_action_property_map_property FOREIGN KEY (property)
        REFERENCES properties(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_action_property_map_property ON action_property_map(property);

-- BATCHES
CREATE TABLE IF NOT EXISTS batches (
    id BIGSERIAL PRIMARY KEY,
    proces BIGINT NOT NULL,

    custom_id VARCHAR(50),

    CONSTRAINT fk_batches_processes FOREIGN KEY (proces)
        REFERENCES processes(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_batches_proces ON batches(proces);
CREATE INDEX IF NOT EXISTS idx_batches_custom_id ON batches(custom_id);

-- BATCH ↔ ACTION MAP
CREATE TABLE IF NOT EXISTS batch_actions (
    batch BIGINT NOT NULL,
    action BIGINT NOT NULL,

    start_time TIMESTAMPTZ NOT NULL,
    stop_time TIMESTAMPTZ,

    PRIMARY KEY (batch, action),
    CONSTRAINT fk_batch_actions_batch FOREIGN KEY (batch)
        REFERENCES batches(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_batch_actions_action FOREIGN KEY (action)
        REFERENCES actions(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_batch_actions_batch ON batch_actions(batch);
CREATE INDEX IF NOT EXISTS idx_batch_actions_action ON batch_actions(action);

-- Machine Learning data

-- DATASETS
CREATE TABLE IF NOT EXISTS ml_datasets (
    id BIGSERIAL PRIMARY KEY,

    name VARCHAR(50) NOT NULL,
    start_time TIMESTAMPTZ,
    stop_time TIMESTAMPTZ,
    feature_engineering JSONB,
    annotation_dict JSONB
);

-- DATASET ↔ PROPERTY MAP
CREATE TABLE IF NOT EXISTS ml_datasets_properties (
    dataset BIGINT NOT NULL,
    property BIGINT NOT NULL,

    isCatagorical BOOLEAN NOT NULL DEFAULT True,

    PRIMARY KEY (dataset, property),
    CONSTRAINT fk_datasets_properties_map_dataset FOREIGN KEY (dataset)
        REFERENCES ml_datasets(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_datasets_properties_map_property FOREIGN KEY (property)
        REFERENCES properties(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_ml_datasets_properties_dataset ON ml_datasets_properties(dataset);

-- MODELS
CREATE TABLE IF NOT EXISTS ml_models (
    id BIGSERIAL PRIMARY KEY,
    property BIGINT UNIQUE NOT NULL,
    
    model BYTEA NOT NULL,
    metadata JSONB NOT NULL,
    last_executed TIMESTAMPTZ,
    last_trained TIMESTAMPTZ NOT NULL,
    
    CONSTRAINT fk_ml_models_properties FOREIGN KEY (property)
        REFERENCES properties(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);

-- DATASET ↔ PROPERTY MAP
CREATE TABLE IF NOT EXISTS ml_models_properties (
    model BIGINT NOT NULL,
    property BIGINT NOT NULL,

    PRIMARY KEY (model, property),
    CONSTRAINT fk_model_property_map_model FOREIGN KEY (model)
        REFERENCES ml_models(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_model_property_map_property FOREIGN KEY (property)
        REFERENCES properties(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_ml_models_properties_model ON ml_models_properties(model);

COMMIT;