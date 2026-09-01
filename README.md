# BastaPlay

Web oficial de [bastaplay.store](https://bastaplay.store), publicada automáticamente con GitHub Pages desde la rama `main`.

## Cambiar la campaña publicada

1. Abre el archivo [`config.js`](config.js) en GitHub.
2. Pulsa el icono del lápiz para editarlo.
3. Cambia únicamente el valor de `activeCampaign`:

```js
activeCampaign: "verano"
```

Los valores permitidos son:

- `verano`
- `black-friday`
- `navidad`

4. Pulsa **Commit changes**.
5. Espera unos minutos a que GitHub Pages actualice la web.

## Previsualizar sin cambiar la web pública

- Verano: <https://bastaplay.store/?theme=verano>
- Black Friday: <https://bastaplay.store/?theme=black-friday>
- Navidad: <https://bastaplay.store/?theme=navidad>

El parámetro `?theme=` solo cambia la campaña en ese navegador. La portada normal siempre utiliza la campaña definida en `config.js`.

## Archivos de campaña

- `config.js`: decide qué campaña está publicada.
- `campaigns.js`: contiene los textos de cada campaña.
- `campaigns.css`: contiene los colores y estilos de cada campaña.
- `index.html`: contiene la estructura compartida de la tienda.

El enlace de pago, las fotografías, las reseñas, la analítica y las páginas legales se comparten entre las tres campañas.
