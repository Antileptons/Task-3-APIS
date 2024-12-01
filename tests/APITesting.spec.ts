import { test, expect } from '@playwright/test';
import {emptyJson} from '../test-data/testdata'
import { title } from 'process';

test.describe('API Testing', ()=>{

    test ('1-Send GET Request to get allposts', async ({request})=>{
        const response = await request.get(`/posts`)
        const responseBody = await response.json()
        expect (response.status()).toBe(200)
        expect (responseBody[0]).toHaveProperty("id",1)
    })

    test ('2-SendGETrequest toget postwith id=99', async ({request})=>{
        const response = await request.get(`/posts/99`)
        const responseBody = await response.json()
        console.log(responseBody)
        expect (response.ok()).toBeTruthy()
        expect (responseBody).toHaveProperty("userId",10)
        expect (responseBody).toHaveProperty("id",99)
        expect (responseBody.title).toBeTruthy()
        expect (responseBody.body).toBeTruthy()
    })

    test ('3-SendGETrequest toget post with id=150', async ({request})=>{
        const response = await request.get(`/posts/150`)
        const responseBody = await response.text()
        expect (response.status()).toBe(404)
        expect (responseBody).toEqual(emptyJson)
    })

    test ('4-Send POST request to create post with userId=1', async ({request})=>{
        const response = await request.post('/posts',{
            data: {
                title: "AlexExample",
                body: "example_body",
                userid: 1,
                id:101
            }
        })
        expect(response.status()).toBe(201)
        const responseBody = await response.json()
        expect (responseBody).toHaveProperty("title","AlexExample")
        expect (responseBody).toHaveProperty("body","example_body")
        expect (responseBody).toHaveProperty("userid",1)
        expect (responseBody.id).toBeTruthy()
        
    })

    test ('5-Send GETrequest to get users', async ({request})=>{
        const response = await request.get(`/users`)
        const responseBody = await response.json()
        console.log(responseBody)
        expect (response.status()).toBe(200)
        expect (responseBody[4]).toHaveProperty("name","Chelsey Dietrich")
        expect (responseBody[4]).toHaveProperty("username","Kamren")
        expect (responseBody[4]).toHaveProperty("email","Lucio_Hettinger@annie.ca")
        expect (responseBody[4].address).toHaveProperty("street","Skiles Walks")
        expect (responseBody[4].address).toHaveProperty("suite","Suite 351")
        expect (responseBody[4].address).toHaveProperty("city","Roscoeview")
        expect (responseBody[4].address).toHaveProperty("zipcode","33263")
        expect (responseBody[4]).toHaveProperty("phone","(254)954-1289")
        expect (responseBody[4]).toHaveProperty("website","demarco.info")
        expect (responseBody[4].company).toHaveProperty("name","Keebler LLC")
        expect (responseBody[4].company).toHaveProperty("catchPhrase","User-centric fault-tolerant solution")
        expect (responseBody[4].company).toHaveProperty("bs","revolutionize end-to-end systems")
    })

    test ('6-Send GETrequest to get users with id=5', async ({request})=>{
        const response = await request.get(`/users/5`)
        const responseBody = await response.json()
        expect (response.status()).toBe(200)
        expect (responseBody).toHaveProperty("name","Chelsey Dietrich")
        expect (responseBody).toHaveProperty("username","Kamren")
        expect (responseBody).toHaveProperty("email","Lucio_Hettinger@annie.ca")
        expect (responseBody.address).toHaveProperty("street","Skiles Walks")
        expect (responseBody.address).toHaveProperty("suite","Suite 351")
        expect (responseBody.address).toHaveProperty("city","Roscoeview")
        expect (responseBody.address).toHaveProperty("zipcode","33263")
        expect (responseBody).toHaveProperty("phone","(254)954-1289")
        expect (responseBody).toHaveProperty("website","demarco.info")
        expect (responseBody.company).toHaveProperty("name","Keebler LLC")
        expect (responseBody.company).toHaveProperty("catchPhrase","User-centric fault-tolerant solution")
        expect (responseBody.company).toHaveProperty("bs","revolutionize end-to-end systems")
    })




    

})