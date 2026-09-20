# Letrazo

Web oficial de [letrazo.store](https://letrazo.store), publicada automáticamente con GitHub Pages desde la rama `main`.

## Cambiar la campaña publicada

1. Abre el archivo [`config.js`](config.js) en GitHub.
2. Pulsa el icono del lápiz para editarlo.
3. Cambia únicamente el valor de `activeCampaign`:

```js
activeCampaign: "otono"
```

Los valores permitidos son:

- `verano`
- `otono`
- `black-friday`
- `cyber-monday`
- `navidad`

4. Pulsa **Commit changes**.
5. Espera unos minutos a que GitHub Pages actualice la web.

## Previsualizar sin cambiar la web pública

- Verano: <https://letrazo.store/?theme=verano>
- Otoño: <https://letrazo.store/?theme=otono>
- Black Friday: <https://letrazo.store/?theme=black-friday>
- Cyber Monday: <https://letrazo.store/?theme=cyber-monday>
- Navidad: <https://letrazo.store/?theme=navidad>

El parámetro `?theme=` solo cambia la campaña en ese navegador. La portada normal siempre utiliza la campaña definida en `config.js`.

## Archivos de campaña

- `config.js`: decide qué campaña está publicada.
- `pricing.js`: calcula y aplica el precio y el pack en toda la web.
- `campaigns.js`: contiene los textos de cada campaña.
- `campaigns.css`: contiene los colores y estilos de cada campaña.
- `index.html`: contiene la estructura compartida de la tienda.

El precio, el enlace de pago, las fotografías, las reseñas, la analítica y las páginas legales se comparten entre todas las campañas.

## Cambiar el precio

Todo el precio visible de la web se obtiene de `config.js`. Modifica únicamente:

```js
unitPrice: 18.98
```

El formato español (`18,98 €`) se genera automáticamente en todos los precios, botones, textos de campaña y eventos de Meta Pixel.

Importante: esta variable cambia lo que muestra la web, pero por seguridad no puede modificar el importe que cobra Stripe. Si cambia el precio real, primero hay que crear o actualizar el checkout en Stripe y después guardar su URL en `unitStripeUrl`, dentro del mismo archivo.

## Activar el pack de 2

El precio se calcula automáticamente con esta fórmula:

```text
(unitPrice × 2) − secondUnitReduction
```

Con el precio actual y una reducción de 4 € en la segunda unidad, el pack resulta en 33,96 €.

Para publicarlo:

1. Crea en Stripe un Payment Link de pack de 2 por el importe calculado.
2. En `config.js`, pega el enlace en `pack2.stripeUrl`.
3. Cambia `pack2.enabled` de `false` a `true`.

El selector permanece oculto si falta el enlace válido de Stripe, evitando cobros incorrectos.

## Cambio de dominio

El repositorio ya declara `letrazo.store` como dominio principal. En GoDaddy deben configurarse los registros DNS de GitHub Pages antes de publicar este cambio; el dominio anterior puede redirigirse a Letrazo cuando la migración esté comprobada.

Consulta también el [`PLANNING-2026-2027.md`](PLANNING-2026-2027.md) para ver el calendario comercial y las notas sobre logística y tarjeta regalo.
