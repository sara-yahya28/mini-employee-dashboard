import {useState ,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import '../components/css/Login.css'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            login();
            navigate('/');
        }
    };

    return (
        <div className="login__page">
            <div className="login__card">
                <h1>تسجيل الدخول</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">البريد الإلكتروني</label>
                   <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />

                    <label htmlFor="password">كلمة المرور</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />

                    <button type="submit">
                        تسجيل الدخول
                    </button>
                </form>
            </div>
        </div>
    )
}