import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import { navigate } from '@reach/router';

export default function SignUp() {
	const history = useHistory();
    
	useEffect(() => {
		const response = axiosInstance.post('logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		})
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		navigate('/')
	});
	return <div>Logout</div>;
}