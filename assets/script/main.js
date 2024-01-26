// CONSEGNA - Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// BONUS:
    // 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
    // 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine    automaticamente
    // 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
//


const { createApp } = Vue  

createApp({
    data(){ // funzione 
        return{
            currentSong: 0, // variabile della canzone corrente  
            autoscroll: null, 
            songArray: [  // array di song-objects
                {
                    img: './assets/img/bring-me-the-horizon.jpg',
                    title: "Can You Feel My Heart?", 
                    author: "By: Bring Me The Horizon"
                },
                {
                    img: "./assets/img/the-dresden-dolls.jpg",
                    title: "My Alcoholic Friends", 
                    author: "By: The Dresden Dolls"
                },
                {
                    img: "./assets/img/the-neighbourhood.jpeg",
                    title: "Softcore", 
                    author: "By: The Neighbourhood"
                },
                {
                    img: "./assets/img/mother-mother.jpg",
                    title: "Hayloft II", 
                    author: "By: Mother Mother"
                },
                {
                    img: "./assets/img/my-chemical-romance.jpg",
                    title: "Teenagers", 
                    author: "By: My Chemical Romance"
                },
            ]
        }
    },
    created(){
        this.activeScroll() // per attivare lo scroll 
    },
    methods:{
        previousSong(){ // per andare indietro 
            if (this.currentSong === 0){
                this.currentSong = this.songArray.length
            }
            this.currentSong--
        },
        nextSong(){ // per andare avanti
            this.currentSong++
            if (this.currentSong > this.songArray.length - 1){
                this.currentSong = 0
            }
        },

        activeScroll(){ // per lo scroll
            this.autoscroll = setInterval(()=>{
                this.nextSong()
            },3000)
        },
        stopScroll(){ // per fermare lo scroll 
            clearInterval(this.autoscroll)

        },
        setSong(index){ // per cambiare la current song al click 
            this.currentSong = index
        }
    },
}).mount("#main-container") 