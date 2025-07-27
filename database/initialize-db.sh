#!/bin/bash
set -e

echo "Running all SQL scripts in subfolders of /docker-entrypoint-initdb.d/"

# Recursively find and sort .sql files in subdirectories only (skip root .sql files)
find /docker-entrypoint-initdb.d/ -type f -name "*.sql" ! -path "/docker-entrypoint-initdb.d/*.sql" | sort | while read -r sql_file; do
    echo "Running $sql_file"
    psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f "$sql_file"
done
a
echo "All SQL scripts executed."
