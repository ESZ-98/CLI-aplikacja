# CLI-aplikacja

Polecenia i ich wyniki:

# Otrzymujemy i wyprowadzamy całą listę kontaktów w postaci tabeli (console.table)
node index.js --action list
![Wynik w konsoli](/images/action-list.png)

# Otrzymujemy kontakt po id
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
![Wynik w konsoli](/images/action-get.png)

# Dodajemy kontakt
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![Wynik w konsoli](/images/action-add.png)

# Usuwamy kontakt
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
![action-remove](/images/action-remove.png)
