// Importa os módulos do Firebase do CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAu21g79uprdxc2xXlmjQgU6gQeRR-ZPAc",
    authDomain: "tech-academy-ac333.firebaseapp.com",
    projectId: "tech-academy-ac333",
    storageBucket: "tech-academy-ac333.firebasestorage.app",
    messagingSenderId: "560334089248",
    appId: "1:560334089248:web:8536f2833d08ff66cf6045"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta as instâncias
export { auth, db };

async function checkEmailExists(email) {
    try {
        console.log('Verificando se o e-mail existe:', email);
        const methods = await fetchSignInMethodsForEmail(auth, email);
        console.log('Métodos retornados pelo Firebase:', methods);
        const exists = methods.length > 0;
        console.log('E-mail existe:', exists);
        return exists;
    } catch (error) {
        console.error('Erro ao verificar e-mail:', error);
        throw new Error('Erro ao verificar e-mail. Tente novamente.');
    }
}