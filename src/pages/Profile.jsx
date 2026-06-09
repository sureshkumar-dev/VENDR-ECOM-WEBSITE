import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Profile = () => {
    const API = import.meta.env.VITE_API_URL;

    const navigate = useNavigate()
    const [userdata, setuserdata] = useState()
    const fetchuser = async () => {
        const token = localStorage.getItem("token")
        const res = await axios.get(`${API}/profile`, {
            headers: {
                authorization: token
            }
        })
        console.log(userdata)
        setuserdata(res.data.User)
        console.log('data check', res.data)
    }
    useEffect(() => {
        fetchuser()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">

                {/* Profile Image */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                        alt="profile"
                        className="w-24 h-24 rounded-full border-4 border-blue-500"
                    />

                    <h2 className="text-2xl font-bold mt-4">{userdata?.username}</h2>
                    <p className="text-gray-500">{userdata?.email}</p>
                </div>

                {/* User Details */}
                <div className="mt-6 space-y-4">


                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Joined</span>
                        <span className="text-gray-600">{userdata?.createdAt}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                    <button onClick={() => { navigate('/') }} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Close
                    </button>

                    <button onClick={() => {
                        localStorage.removeItem("token")
                        navigate('/auth')
                    }} className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;