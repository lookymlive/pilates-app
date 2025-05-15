# 📘 Documentación Inicial del Proyecto: App de Turnos para Pilates Reformer

## 🧠 Memory Bank (Resumen de avances y decisiones clave)

* **2025-05-15**: Inicio del proyecto. Objetivo: crear una app mobile en Expo para un salón de pilates reformer. Se usarán Supabase, Cloudinary, Tailwind CSS (NativeWind con estilo en línea), shadcn/ui (donde sea posible), Zustand, Zod.
* Estructura basada en `/app` (no `/src`) siguiendo convención de Expo y navegación centralizada.
* Enfoque modular y escalable, basado en buenas prácticas de UX y desarrollo mobile-first.
* **Login/Register básico implementado**: formulario con Zod, validación en tiempo real, integración con Supabase y navegación por stack.
* **Gestión de turnos iniciada**: estructura de vistas dividida por roles (admin/cliente), flujo básico de reserva y creación de clases listo para desarrollo.

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
├── /app
│   ├── /components              # UI compartida
│   ├── /features
│   │   ├── /auth                # Login, registro, etc.
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── authUtils.ts
│   │   │   └── authValidation.ts
│   │   ├── /booking             # Reservas
│   │   │   ├── BookingScreen.tsx
│   │   │   ├── MyBookings.tsx
│   │   │   └── bookingUtils.ts
│   │   ├── /classes             # Gestión de clases (admin)
│   │   │   ├── CreateClass.tsx
│   │   │   ├── ClassList.tsx
│   │   │   └── classUtils.ts
│   │   └── /profile             # Perfil de usuario
│   │       └── ProfileScreen.tsx
│   ├── /lib                     # Supabase, Cloudinary clients, utils
│   ├── /store                   # Zustand stores
│   ├── /types                   # Tipado global
│   ├── /validation              # Esquemas Zod compartidos
│   └── /navigation              # Stack y Tabs
│
├── /docs                        # Documentación del proyecto
│   ├── memory-bank.md
│   ├── tech-stack.md
│   ├── ux-ui-flow.md
│   ├── database-schema.md
│   └── roadmap.md
│
└── README.md
```

---

## 🧩 Módulos Iniciales a Desarrollar

1. **Auth Module**

   * ✅ Registro y login de usuarios (comercio / cliente)
   * Recuperación de contraseña
   * Redirección por rol

2. **Gestión de Turnos**

   * 🛠️ Visualización de calendario semanal (BookingScreen)
   * 🛠️ Crear clases y asignar horarios (CreateClass)
   * 🛠️ Reserva de turnos (cliente)
   * 🛠️ Cancelación o cambio de turno (MyBookings)

3. **Perfil de Usuario**

   * 🛠️ Ver y editar datos personales (ProfileScreen)
   * Subir foto de perfil (Cloudinary)

4. **Pagos** (fase 2)

   * Integración con Stripe o MercadoPago
   * Historial de pagos
   * Planes mensuales o por clase

5. **Admin Panel (mobile)**

   * Crear, editar y eliminar clases
   * Ver reservas
   * Ver usuarios activos

---

## 🔜 Próximos pasos

1. Configurar repo GitHub y estructura inicial del proyecto.
2. Configurar Supabase con tablas básicas: `users`, `classes`, `bookings`, `payments`.
3. Crear diseño de flujo UX/UI base (pantallas, navegación).
4. ✅ Implementar primer feature: **registro/login con Supabase**.
5. ✅ Modularización del auth con navegación, validación Zod y conexión Supabase.
6. 🛠️ Empezar CRUD de clases y reservas.
7. Documentar todo en `/docs` y actualizar el memory-bank.

---

## 🧭 Visión a Futuro

* Panel web para administración (con Next.js)
* Recordatorios push (turnos próximos)
* Recomendaciones de clases según historial
* Módulo de métricas para admins
* Chat interno para usuarios y staff

---

Este documento crecerá a medida que avancemos. Vamos paso a paso, como un split bien hecho: firme, constante y sin atajos. 💪🧘‍♀️
