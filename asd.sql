SELECT a.ime_ankete,p.pitanje,o.odgovor
FROM ankete AS a
INNER JOIN pitanja AS p ON a.idAnkete = p.id_ankete
INNER JOIN odgovori AS o ON o.id_pitanja =p.id_pitanja