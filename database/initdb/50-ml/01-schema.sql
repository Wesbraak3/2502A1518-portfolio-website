BEGIN;

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

END;