// CONSEGNA - Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// BONUS:
    // 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
    // 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine     automaticamente
    // 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
//


const { createApp } = Vue  

createApp({
    data(){
        return{
            currentSong: 0,
            autoscroll: null, 
            songArray: [
                {
                    img: "./assets/img/bring-me-the-horizon.jpg",
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
    methods:{
        previousSong(){
            if (this.currentSong === 0){
                this.currentSong = this.songArray.length - 1
            }
            this.currentSong--
        },
        nextSong(){
            if (this.currentSong > this.songArray.length - 1){
                this.currentSong = 0
            }
            this.currentSong++
        }
    }
}).mount("#main-container") 