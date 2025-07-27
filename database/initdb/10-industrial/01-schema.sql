BEGIN;

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




END;