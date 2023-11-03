# Red social

## Lista de entidades

### Usuario

- **id (PK)**
- nombre
- apellido
- email
- contraseña
- código_recuperación
- activo
- ocupado
- administrador
- fecha_de_creación

### Recuperación_contraseña

- **id (PK)**
- usuario_id (FK)
- código_aleatorio
- usado
- fecha_solicitud

### Visibilidad

- **id (PK)**
- descripción

### País

- **id (PK)**
- nombre
- prefijo

### Perfil

- día_de_nacimiento
- genero
- país_id (FK)
- imagen_perfil
- imagen_cabecera
- titulo
- biografía
- dirección_domicilio
- celular
- usuario_id (FK)
- visibilidad_id (FK)

### Publicación

- **id (PK)**
- titulo
- imagen
- contenido
- tipo_de_publicación
- usuario_id (FK)
- visibilidad_id (FK)
- fecha_creación

### Guardado

- **id (PK)**
- referencia_publicación_id
- usuario_id (FK)
- fecha_guardado
- recomendado

### Solicitud_servicio

- **id (PK)**
- emisor_id (FK)
- receptor_id (FK)
- tipo_solicitud
- aceptado
- visto
- fecha_creación

### Conversación

- **id (PK)**
- emisor_id (FK)
- receptor_id (FK)
- fecha_creación

### Mensaje

- **id (PK)**
- contenido
- emisor_id (FK)
- conversación_id (FK)
- receptor_id (FK)
- fecha_creación
- visto
