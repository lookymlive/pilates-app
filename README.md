# 📘 Documentación Inicial del Proyecto: App de Turnos para Pilates Reformer

## 🧠 Memory Bank (Resumen de avances y decisiones clave)

* **2025-05-15**: Inicio del proyecto. Objetivo: crear una app mobile en Expo para un salón de pilates reformer. Se usarán Supabase, Cloudinary, Tailwind CSS (NativeWind con estilo en línea), shadcn/ui (donde sea posible), Zustand, Zod.
* Estructura basada en `/app` (no `/src`) siguiendo convención de Expo y navegación centralizada.
* Enfoque modular y escalable, basado en buenas prácticas de UX y desarrollo mobile-first.
* **Login/Register básico implementado**: formulario con Zod, validación en tiempo real, integración con Supabase y navegación por stack.

---

## 📦 Tecnologías Base

### Frontend (Expo + React Native)

* **Expo (React Native)**: para desarrollo mobile multiplataforma (iOS/Android).
* **Tailwind CSS (NativeWind con estilo en línea)**: para estilado rápido y consistente.
* **shadcn/ui adaptado o reemplazos en React Native**: componentes reutilizables y accesibles.
* **Zustand**: manejo global del estado.
* **Zod**: validación de formularios y esquemas.

### Backend / BaaS

* **Supabase**:

  * Autenticación (email/password y social logins).
  * Base de datos Postgres (turnos, usuarios, clases, pagos).
  * API REST o Realtime si se requiere en futuro.

### Media

* **Cloudinary**: gestión de imágenes (perfil de usuario, info del salón, etc).

---

## 🛠️ Estructura Inicial del Proyecto

```psh
/pilates-app
│
├── /app               # Entrypoint Expo y navegación
│   ├── /components    # UI compartida
│   ├── /features      # Módulos (turnos, usuarios, pagos)
│   │   └── /auth      # Login, registro, etc.
│   ├── /lib           # Supabase, Cloudinary clients, utils
│   ├── /store         # Zustand stores
│   ├── /types         # Tipado global
│   ├── /validation    # Esquemas Zod
│   └── /navigation    # Stack y Tabs
```
