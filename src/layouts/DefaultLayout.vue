<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
    <!-- Header -->
    <header class="bg-white shadow-lg p-6 border-b border-gray-200 sticky top-0 z-10">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-600 tracking-tight flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
          AI PDF Analyzer
        </h1>
        <nav class="flex gap-4">
          <button class="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
            Inicio
          </button>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow p-8 max-w-6xl mx-auto w-full">
      <slot/>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 py-6 text-center">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} AI PDF Analyzer. Todos los derechos reservados. Contacto 3003991313
          </p>
          <div class="flex space-x-6">
            <a href="https://web.facebook.com/profile.php?id=61561970022170" target="_blank" class="text-gray-400 hover:text-indigo-500 transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

