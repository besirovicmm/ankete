-- SELECT p.pitanje,o.odgovor,o.id_odgovora
--     FROM ankete AS a
--     INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
--     INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
--     WHERE a.iDankete=1
<<<<<<< HEAD

-- SELECT * FROM korisnici
-- WHERE id_korisnika=1

-- ALTER TABLE korisnici
-- ADD prezime VARCHAR(255),
-- ADD email VARCHAR(255) UNIQUE,
-- ADD password VARCHAR(255),
-- ADD is_admin BOOLEAN DEFAULT FALSE

-- ALTER TABLE korisnici
-- ADD email VARCHAR(255) UNIQUE;

-- ALTER TABLE korisnici
-- DROP COLUMN email

INSERT INTO korisnici (ime_korisnika,prezime,email, password, is_admin)
VALUES ('Muhammed','besirovic','123@gmail.com','password',TRUE)
=======
    

    ALTER TABLE korisnici 
    ADD prezime VARCHAR(255),
    ADD email VARCHAR(255)
    UNIQUE,
    ADD password 
    VARCHAR(255),
    ADD is_admin BOOLEAN
    DEFAULT FALSE
>>>>>>> 60646588dd65952e97fd385f8a6269a71aba8b2e
