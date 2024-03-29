import React, { useState } from "react";
import { Link, useNavigate ,json } from "react-router-dom"
const SignIn = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await fetch('/api/auth/signin', {
                method: 'post',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();

            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setError(null)
            navigate('/')
        } catch (error) {
            setLoading(false);
            setError(error.message);
            
        }

    }
    return (
        <>
            <div className="p-3 max-w-lg mx-auto">
                <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type='email' placeholder="email" className="border p-3 rounded-lg" id="email" onChange={handleChange}></input>
                    <input type='password' placeholder="password" className="border p-3 rounded-lg" id="password" onChange={handleChange}></input>
                    <button disabled={loading} className="bg-slate-500 text-white p-3 rounded-lg uppercase hover:opacity-95">
                        {loading ? 'loading...' : 'Sign In'}
                    </button>
                </form>
                <div className="flex gap-3 mt-5">
                    <p>Dont have an account?</p>
                    <Link to={'sign-up'}>
                        <span className="text-blue-700">Sign Up</span>
                    </Link>
                </div>
                {error && <p className="text-red-500 mt-5">{error}</p>}
            </div>
        </>
    )
}

export default SignIn;