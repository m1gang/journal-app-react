# 📖 Journal App

Una aplicación de diario personal desarrollada con React, Vite y Firebase. Permite a los usuarios crear, editar y gestionar sus notas personales con autenticación segura y almacenamiento en la nube.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-11.1.0-FFCA28?logo=firebase)
![Material-UI](https://img.shields.io/badge/Material--UI-6.1.9-0081CB?logo=mui)

## ✨ Características

- 🔐 **Autenticación segura** con Firebase Auth
- 📝 **Gestión de notas** con CRUD completo
- 🖼️ **Subida de imágenes** con Cloudinary
- 🎨 **Interfaz moderna** con Material-UI
- 📱 **Diseño responsivo** para todos los dispositivos
- 🔄 **Estado global** con Redux Toolkit
- ⚡ **Rendimiento optimizado** con Vite
- 🧪 **Testing** con Jest y React Testing Library

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **Vite 6.0.0** - Herramienta de construcción y desarrollo
- **Material-UI 6.1.9** - Biblioteca de componentes de interfaz
- **Redux Toolkit 2.5.0** - Gestión de estado global
- **React Router 7.0.1** - Enrutamiento de la aplicación

### Backend y Servicios
- **Firebase 11.1.0** - Autenticación y base de datos
- **Firestore** - Base de datos NoSQL en tiempo real
- **Cloudinary** - Almacenamiento y optimización de imágenes

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Jest** - Framework de testing
- **Babel** - Transpilación de JavaScript

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Una cuenta de [Firebase](https://firebase.google.com/)
- Una cuenta de [Cloudinary](https://cloudinary.com/) (opcional, para subida de imágenes)

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/journal-app-react.git
   cd journal-app-react
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_APIKEY=tu_api_key_de_firebase
   VITE_AUTHDOMAIN=tu_dominio_de_firebase
   VITE_PROJECTID=tu_project_id_de_firebase
   VITE_STORAGEBUCKET=tu_storage_bucket_de_firebase
   VITE_MESSAGINGSENDERID=tu_messaging_sender_id
   VITE_APPID=tu_app_id_de_firebase
   VITE_CLOUDINARY_URL=tu_cloudinary_url
   ```

4. **Configura Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Authentication con Email/Password
   - Crea una base de datos Firestore
   - Copia las credenciales a tu archivo `.env`

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Construcción para producción
```bash
npm run build
```

### Vista previa de producción
```bash
npm run preview
```

### Testing
```bash
npm test
```

### Linting
```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── auth/                    # Módulo de autenticación
│   ├── layout/             # Layouts de autenticación
│   ├── pages/              # Páginas de login y registro
│   └── routes/             # Rutas de autenticación
├── firebase/               # Configuración de Firebase
├── helpers/                # Funciones auxiliares
├── hooks/                  # Hooks personalizados
├── journal/                # Módulo principal del diario
│   ├── components/         # Componentes del diario
│   ├── layout/             # Layouts del diario
│   ├── pages/              # Páginas del diario
│   ├── routes/             # Rutas del diario
│   └── views/              # Vistas del diario
├── router/                 # Configuración de rutas
├── store/                  # Estado global con Redux
│   ├── auth/              # Estado de autenticación
│   └── journal/           # Estado del diario
├── theme/                  # Configuración de temas
├── ui/                     # Componentes de interfaz
└── styles.css             # Estilos globales
```

## 🔧 Configuración

### Firebase Setup

1. **Authentication**
   - Ve a Authentication > Sign-in method
   - Habilita "Email/Password"

2. **Firestore Database**
   - Crea una base de datos Firestore
   - Configura las reglas de seguridad:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

### Cloudinary Setup (Opcional)

1. Crea una cuenta en [Cloudinary](https://cloudinary.com/)
2. Obtén tu URL de Cloudinary
3. Agrega la variable `VITE_CLOUDINARY_URL` a tu archivo `.env`

## 🧪 Testing

El proyecto incluye tests unitarios y de integración:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests con coverage
npm test -- --coverage
```

## 📱 Características de la Aplicación

### Autenticación
- Registro de nuevos usuarios
- Inicio de sesión
- Cierre de sesión
- Protección de rutas

### Gestión de Notas
- Crear nuevas notas
- Editar notas existentes
- Eliminar notas
- Búsqueda de notas
- Filtrado por fecha

### Interfaz de Usuario
- Diseño responsivo
- Tema personalizable
- Navegación intuitiva
- Sidebar con lista de notas
- Editor de texto enriquecido

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**MiGaNg**
- GitHub: [@MiGaNg](https://github.com/MiGaNg)

## 🙏 Agradecimientos

- [React](https://reactjs.org/) por el framework
- [Vite](https://vitejs.dev/) por la herramienta de desarrollo
- [Firebase](https://firebase.google.com/) por los servicios backend
- [Material-UI](https://mui.com/) por los componentes de interfaz
- [Redux Toolkit](https://redux-toolkit.js.org/) por la gestión de estado

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor:

1. Revisa la [documentación](https://github.com/tu-usuario/journal-app-react#readme)
2. Busca en los [issues existentes](https://github.com/tu-usuario/journal-app-react/issues)
3. Crea un [nuevo issue](https://github.com/tu-usuario/journal-app-react/issues/new)

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!