CREATE DATABASE pratica_5;

CREATE TABLE IF NOT EXISTS funcionarios(
    id BIGSERIAL PRIMARY KEY,
    nome text NOT NULL,
    cargo text NOT NULL,
    dt_nascimento text NOT NULL,
    dt_entrada text NOT NULL
);
