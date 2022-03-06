SELECT p.pitanje,o.odgovor,o.id_odgovora
    FROM ankete AS a
    INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
    INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja
    WHERE a.iDankete=1