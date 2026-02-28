# Hindi Anime API

> A simple API for accessing Hindi anime content.

---

>## 📌 About
This API does not host or store any files on its own server.  
It only provides access to publicly available resources.

---

>## ⚠️ Disclaimer
This project is developed strictly for **educational purposes**.  
The repository owner is not responsible for any misuse or illegal activities performed using this API.

---
> ## 📚 Table of Contents
- [Installation](#Installation)
    - [Local Installation ](#local-installation)
- [Deployment](#deployment)
    - [Render](#render)
    - [Vercel](#vercel)
- [Documentation](#documentation)
    - [Home](#home)
    - [Recently added episodes](#recently-added-episodes)
    - [Specific Anime Info](#specific-anime-info)
    - [Episodes](#episodes)
    - [Series](#series)
    - [Movies](#movies)
    - [Random Series](#random-series)
    - [Random Movies](#random-movies)
    - [Animes](#anime)
    - [Cartoons](#cartoons)
    - [Networks](#networks)
    - [Genres](#genres)
    - [Languages](#languages)
    - [Schedule](#schedule)
    - [Anime Stream Info](#anime-stream-info)
    - [Alternative Stream Info](#alternative-stream-info)
    - [Downloads](#downloads)

> # Installation

## Local installation

1. Make sure to that you installed `node` on your local machine.

```bash
#For termux
pkg install node
#For linux
apt install node
```

2. Run the following code to clone the repository and install all required dependencies

```bash
#Cloning the repo
git clone https://github.com/Prathmesh6968/anime-api.git

cd anime-api
#Istalling all dependencies
npm i

#Run the Project
npm start
```

> # Deployment

#### Render

### Render

Host your own instance of anime-api on Render.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Prathmesh6968/anime-api.git)

> # Documentation

### Home

```bash
GET /api/
```

### 🔗 Endpoint

```bash
/api
```

> #### No parameter required ❌

#### Example of request

```javascript
import axios from "axios";
const resp = await axios.get("/api");
console.log(resp.data);
```
```javascript
