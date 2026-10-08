import '../components/css/Login.css'
export default function Login() {
    return (
        <div className="login__page">
            <div className="login__card">
                <h1>تسجيل الدخول</h1>
                <form>
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="password">كلمة المرور</label>
                    <input type="password" name="password" id="password" />

                    <button type="submit">تسجيل الدخول</button>
                </form>
            </div>
        </div>
    )
}