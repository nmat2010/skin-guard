# SKINGUARD -- AI-POWERED DERMATOLOGIST
### 🏆 HackNYU'25 Best First Hack Prize Winner 🏆

## Project Overview
We developed SkinGuard, a platform that leverages OpenAI and the Efficient-Net-B3 machine learning model to identify skin diseases, provide diagnoses, and assist users in protecting themselves from various skin conditions. Given the harsh weather conditions in many US states, we aim to increase awareness about health, specifically skin issues, while offering accessible skincare knowledge without the burden of high healthcare costs. We securely store user information and health records for future reference, including uploaded skin images and diagnoses.

## 🚀 Technology Stack

### Frontend:
- React
- Axios
- Marked
- Javascript ES6+

### Backend:
- MongoDB
- Express.js
- Node.js
- JWToken
- Nodemailer
- FlaskAPI
- Python

  ### Machine Learning Libraries & Model:
  - OpenAI API
  - Efficient-Net-B3
  - NumPy
  - TensorFlow
  - Keras
  - ...

 ## Key Features

 - Skin Disease Detection
 - Diagnose and give advice
 - Machine Learning Model Training
 - Keep track of skincare routine

## 🛠 Installation & Setup
### Prerequisites
- Python 3.9+
- Node.js 14+
- conda
- pip
- git

### Repository Clone
```javascript
git clone https://github.com/nmat2010/skin-guard.git
cd skin-guard
```

### API Key Setup
```javascript
cd server
open .env
```
Place your OpenAI API key in 'YOUR API KEY':
```javascript
OPENAI_SECRET = 'YOUR API KEY'
```

### Backend Setup and Run
```javascript
cd server
conda create —name skinguard python=3.9
pip install -r requirements.txt
npm install
npm run server
```

### Frontend Setup and Run
```
cd ..
cd client
cd src
npm install
npm run dev
```

### Visit our [Devpost](https://devpost.com/software/skinguard-ai-dermatologist)
   
  
