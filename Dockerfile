# Railway baut daraus einen winzigen Webserver, der die Seiten ausliefert.
# Caddy ist ein fertiger Server, hier kommt nur noch unser Inhalt dazu.
FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY . /srv
