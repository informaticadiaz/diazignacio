
# Configuración de Bash

## Eliminar nombre del directorio por >:

Ejemplo:

cambia:

"usuario@DevHome:~$"

por:

">"

1. Abre el archivo de configuración de Bash llamado `.bashrc` en tu editor de texto favorito. Puedes hacerlo con el siguiente comando:

   ```bash
   nano ~/.bashrc

2. Agrega la línea export PS1='> ' al final del archivo. Debe verse así:

   ```bash
   export PS1='> '

3. Guarda los cambios y cierra el archivo.
