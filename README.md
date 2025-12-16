***** AI Illustration Personalization App****
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 
A full-stack web application that allows users to upload a photo and receive a personalized AI-style illustration.
The project focuses on clean frontend–backend integration, file upload handling, and an AI-ready backend architecture.

* Features
==========
Upload an image

Preview before submission

Send image to backend via REST API

Backend receives and processes the image

Returns an AI-generated illustration URL

Display result on UI

* Tech Stack
* ==========

* 
Frontend
--------
React.js

JavaScript

HTML & CSS

Backend
-------
Java 21

Spring Boot

REST API

Multipart File Upload

Backend is designed to be AI-provider agnostic and can be migrated to Python/FastAPI or Node.js if required.

 API
 ---

POST /api/generate

Request: multipart/form-data

Field: photo (image file)

Response: Generated image URL

  Architecture
  ============
React Frontend
     ↓
Spring Boot API
     ↓
AI Processing Layer
     ↓
Generated Image URL

▶️ How to Run
Backend
Run PhotoBackendApplication
Server → http://localhost:8080

Frontend
npm install
npm start


App → http://localhost:3000

Sample Backend Logs
POST API HIT
Received file: image.png
File size: 848533
AI processing started

 
Architecture supports Stable Diffusion / SDXL / Replicate APIs

CORS enabled for frontend communication


========
 Author|
========
Omkar Biradar

