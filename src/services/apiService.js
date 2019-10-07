import React, { Component } from 'react';
import axios  from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://coding-challenge-api.aerolab.co',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDk4ZjZhM2UyZTA0ZjAwNmQ5Zjc0MmIiLCJpYXQiOjE1NzAzMDU2OTl9.t2vcD08ecnIfxUmDqljYbTKy3U7mOu-ZRx9n8yKSVD4',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  });

class ApiService {

    constructor(){}

    async getProducts() {
        try {
          const response = await axiosInstance.get('/products');
          return response;
        } catch (error) {
          console.error(error);
        }
    }

    async getUser(){
        try {
          const response = await axiosInstance.get('/user/me');
          return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addPoints(_amount){
        try {
            const response = await axiosInstance.post('/user/points',
            {
                'amount': _amount   
            });
            return response;
          } catch (error) {
              console.log(error);
          }
    }

    async getHistory(){
        try {
            const response = await axiosInstance.get('/user/history');
            return response;
          } catch (error) {
              console.log(error);
          }
    }

    async redeemProduct(_productId){
        try {
            const response = await axiosInstance.post('/redeem',
            {
                'productId': _productId 
            });
            return response;
          } catch (error) {
              console.log(error);
          }
    }
}

export default ApiService;