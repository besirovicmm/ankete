-- SELECT p.pitanje,o.odgovor,o.id_odgovora
--     FROM ankete AS a
--     INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
--     INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
--     WHERE a.iDankete=1

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

-- INSERT INTO korisnici (ime_korisnika,prezime,email, password, is_admin)
-- VALUES ('Muhammed','besirovic','123@gmail.com','password',TRUE)


-- SELECT a.ime_ankete,p.pitanje,o.odgovor,o.id_odgovora
--     FROM ankete AS a
--     INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
--     INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
--     INNER JOIN odgovori_korisnika AS odg ON o.id_odgovora=odg.id_odgovora
--     INNER JOIN korisnici AS kor ON odg.id_korisnika=kor.id_korisnika
--     WHERE kor.id_korisnika=12


-- SELECT o.id_odgovora,o.odgovor,p.pitanje,p.id_pitanja
-- FROM odgovori AS o
-- INNER JOIN pitanja AS p ON o.id_pitanja = p.id_pitanja


-- INSERT INTO odgovori_korisnika(id_odgovora,id_korisnika)
-- VALUES (2,12),(6,12)

-- INSERT INTO ankete(ime_ankete)
-- VALUES ('Anketa 2')

-- INSERT INTO pitanja(id_ankete,tip_pitanja,pitanje)
-- VALUES 
-- (2,'Tekstualno','Omiljeni sladoled ?'),
-- (2,'Tekstualno','Psi ili macke ?')

-- INSERT INTO odgovori(id_pitanja,odgovor)
-- VALUES
-- (4,'Psi'),
-- (4,'Macke')


-- SELECT p.pitanje,o.odgovor
--     FROM ankete AS a
--     INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
--     INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
--     INNER JOIN odgovori_korisnika AS odg ON o.id_odgovora=odg.id_odgovora
--     INNER JOIN korisnici AS kor ON odg.id_korisnika=kor.id_korisnika
--     WHERE kor.id_korisnika=12 && a.idAnkete=1


-- INSERT INTO odgovori_korisnika(id_odgovora,id_korisnika)
-- VALUES 
-- (1,12),
-- (5,12)

-- DELETE FROM odgovori_korisnika WHERE id_korisnika=12


-- SELECT DISTINCT a.idAnkete,a.ime_ankete
--     FROM ankete AS a
--     LEFT JOIN pitanja AS p ON a.idAnkete = p.id_ankete
--     LEFT JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
--     LEFT JOIN odgovori_korisnika AS odg ON o.id_odgovora=odg.id_odgovora
--     LEFT JOIN korisnici AS kor ON odg.id_korisnika=kor.id_korisnika
--     WHERE kor.id_korisnika=12


SELECT p.pitanje,o.odgovor
    FROM ankete AS a
    INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
    INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
    INNER JOIN odgovori_korisnika AS odg ON o.id_odgovora=odg.id_odgovora
    INNER JOIN korisnici AS kor ON odg.id_korisnika=kor.id_korisnika
    WHERE kor.id_korisnika=11 && a.idAnkete=2