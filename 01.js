const app = new Vue({
    el: '#app',
    data: {
        title: 'TRIALS WEE', 
        flower: [
            {name:'Sunflower', quantity: 10}, 
            {name:'Rose', quantity: 9}, 
            {name:'Daisy', quantity: 8},
            {name:'Jazmin', quantity: 7},
            {name:'bla', quantity: 6},
            {name:'ble', quantity: 5},
            {name:'Violet', quantity: 1}
        ],

        newFlower: "", 
        //newQuantity: ""
    },

    methods:{
        addFlower(){
            this.flower.push({
                name: this.newFlower,
                quantity: 0
            })
            console.log('Click a');
        },
        /* addQuantity(){
            this.quantity.push({
                quantity: this.newQuantity
            })
            console.log('Click b')
        }*/

    }


})