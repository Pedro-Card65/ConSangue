CREATE DATABASE ConSangue;

USE ConSangue;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    tipo_sanguineo VARCHAR(3) NULL,
    tipo_usuario ENUM('candidato', 'instituicao') NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE nome (
	id_
);

CREATE TABLE hemocentro(
	id_hemocentro INT AUTO_INCREMENT PRIMARY KEY,
    Nome_hemo VARCHAR(100) NOT NULL UNIQUE,
    cep VARCHAR(9) NOT NULL UNIQUE,
	telefone_centro VARCHAR (20) NOT NULL UNIQUE,
    FOREIGN KEY (id_)
);

CREATE TABLE participacoes (
	id_registro INT AUTO_INCREMENT PRIMARY KEY,
    
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE nome (
	id_
);

CREATE TABLE nome (
	id_
);

CREATE TABLE nome (
	id_
);