CREATE DATABASE IF NOT EXISTS unifecaf_flix;
USE unifecaf_flix;

CREATE TABLE IF NOT EXISTS tbl_filme (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    duracao INT NOT NULL,
    ano_lancamento INT NOT NULL
);

INSERT INTO tbl_filme (nome, sinopse, duracao, ano_lancamento) VALUES
('O Poderoso Chefão', 'A história da família Corleone e da ascensão de Michael.', 175, 1972),
('Interestelar', 'Um grupo viaja por um buraco de minhoca em busca de um novo lar para a humanidade.', 169, 2014),
('Vingadores: Ultimato', 'Os heróis restantes se unem para reverter o estalo de Thanos.', 181, 2019),
('Matrix', 'Um hacker descobre que o mundo real é uma simulação controlada por máquinas.', 136, 1999),
('A Origem', 'Um ladrão invade sonhos para roubar informações valiosas.', 148, 2010);
