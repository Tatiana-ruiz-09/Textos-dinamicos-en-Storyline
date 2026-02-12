# Implementación Textos Dinámicos – Storyline

## Descripción

Este script permite cargar textos dinámicos en Storyline desde Google Sheets utilizando n8n como middleware.

---

## Flujo

Google Sheets → n8n → Storyline → Variables dinámicas

---

## Requisitos

- Variables creadas en Storyline con formato:
  S{SCENE}S{SLIDE}T{N_TEXT}

- Variables adicionales:
  - sheet_id
  - sheet_name
  - cargando

---

## Ubicación

El código debe agregarse en:

Patrón de diapositivas (Slide Master)

---

## Funcionamiento

1. Obtiene ID y nombre de hoja.
2. Construye URL del webhook.
3. Consulta datos.
4. Recorre JSON dinámicamente.
5. Asigna valores a variables Storyline.

---

## Importante

- Se ejecuta solo al cargar el curso.
- Cambios en la hoja requieren recarga.
- Encabezados en Google Sheets no deben modificarse.
- La hoja debe tener permisos de visualización pública.

---

## Versionado

Registrar en cada commit:

- Fecha
- Hoja asociada
- Número de variables
- Cambios en webhook

---

## Enlaces

- Documentación General → [Agregar enlace Confluence]
- Proceso Google Sheets → [Agregar enlace]
- Proceso Storyline → [Agregar enlace]
