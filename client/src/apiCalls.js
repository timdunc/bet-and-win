import axios from "axios";

export const loginCall = async (userCredential) => {
    const res = await axios.post('http://localhost:8800/api/auth/login', userCredential);
    return res.data;
};

