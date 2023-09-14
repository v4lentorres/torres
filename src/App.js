
import { Routes, Route } from 'react-router-dom';
import { Menu } from './Componentes/Menu';
import { Home } from './Componentes/Home';
import { Recomendados } from './Componentes/Recomendados';
import { Libros } from './Componentes/Libros';
import { Login } from './Componentes/Login';
import { NotFound } from './Componentes/NotFound';
import { Register } from './Componentes/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './Componentes/ProtectedRoute';


export const App = () => {

  return <div>
    <Menu />
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>}>
        </Route>
        <Route path="recomendados" element={
          <ProtectedRoute>
            <Recomendados />
          </ProtectedRoute>}>
        </Route>
        <Route path="libros" element={
          <ProtectedRoute>
            <Libros>
            
            </Libros>
          </ProtectedRoute>}>
        </Route>
        
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AuthProvider>
  </div>
}
