-- SELECT p.pitanje,o.odgovor,o.id_odgovora
--     FROM ankete AS a
--     INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
--     INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
--     WHERE a.iDankete=1
    

    ALTER TABLE korisnici 
    ADD prezime VARCHAR(255),
    ADD email VARCHAR(255)
    UNIQUE,
    ADD password 
    VARCHAR(255),
    ADD is_admin BOOLEAN
    DEFAULT FALSE