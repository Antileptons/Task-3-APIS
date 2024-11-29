import { test, expect } from '@playwright/test';
import {emptyJson} from '../test-data/testdata'
import { title } from 'process';

test.describe('API Testing', ()=>{

    test ('Send GET Request to get allposts', async ({request})=>{
        const response = await request.get(`/posts`)
        const responseBody = await response.json()
        expect (response.status()).toBe(200)
        expect (responseBody[0]).toHaveProperty("id",1)
    })

    test ('SendGETrequest toget postwith id=99', async ({request})=>{
        const response = await request.get(`/posts/99`)
        expect (response.ok()).toBeTruthy()
    })

    test ('SendGETrequest toget post with id=150', async ({request})=>{
        const response = await request.get(`/posts/150`)
        const responseBody = await response.text()
        expect (response.status()).toBe(404)
        expect (responseBody).toEqual(emptyJson)
    })

    test ('Send POST request to create post with userId=1', async ({request})=>{
        const response = await request.post('/posts',{
            data: {
                title: "AlexExample",
                body: "example_body",
                userid: 1,
                id:101
            }
        })
        expect(response.status()).toBe(201)
    })

    test ('Send GETrequest to get users', async ({request})=>{
        const response = await request.get(`/users`)
        const responseBody = await response.json()
        expect (response.status()).toBe(200)
        expect (responseBody[0]).toHaveProperty("id",1)
    })

    test ('Send GETrequest to get users with id=5', async ({request})=>{
        const response = await request.get(`/users/5`)
        const responseBody = await response.json()
        expect (response.status()).toBe(200)
    })




    

})