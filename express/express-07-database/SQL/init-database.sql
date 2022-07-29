-- # DDL # Création de la table
CREATE TABLE message (

  message_id INT AUTO_INCREMENT
  , pseudo VARCHAR(50) NOT NULL
  , content VARCHAR(1000) NOT NULL
  , created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

  , CONSTRAINT PK_message PRIMARY KEY (message_id)
  , CONSTRAINT CK_message__pseudo CHECK (TRIM(pseudo) NOT LIKE '')
  , CONSTRAINT CK_message__content CHECK (TRIM(content) NOT LIKE '')

);

-- # DML # Ajout des données
INSERT INTO message (pseudo, content)
VALUES
  ('Zaza', 'Initial message in DB :D')
  , ('Riri', 'Second message in DB :)')
  , ('Spartacus', 'THIS IS SPARTA !!!!!!!!!!!!');

-- # DRL # Récupération des données
SELECT
  message_id
  , pseudo
  , content "Contenu"
  , created_at "Date de création"
FROM message