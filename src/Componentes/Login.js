import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
            
        }

    };

    return (
        <div className="container mt-5">
        {error && <p className="text-danger">{error}</p>}
  
        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white">
          <h2 className="mb-4">Iniciar Sesión</h2>
  
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="youremail@company.ltd"
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="*******"
            />
          </div>
  
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>

    );
}
