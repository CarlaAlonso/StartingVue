const app = new Vue({
    el: '#app',
    data: {
        title: 'TRIALS WEE',
        flower: [
            { name: 'Sunflower', quantity: 10 },
            { name: 'Rose', quantity: 9 },
            { name: 'Daisy', quantity: 8 },
            { name: 'Violet', quantity: 1 }
        ],
        newFlower: "",
        //newQuantity: ""
        //total: 0
    },
    methods: {
        addFlower() {
            this.flower.push({
                name: this.newFlower,
                quantity: 0
            })
            //console.log('Click a');

            this.addFlower = '';
        },

    },
    computed: {
        plusFlower() {
            this.total = 0;
            for (flower of this.flower) { //Cada vez que haya un cambio en "cantidad" se modificará lo siguiente
                this.total = this.total + flower.quantity;
            }
            return this.total;
        }
    }
})


/* En "methods" después de addFlower
addQuantity(){
    this.quantity.push({
        quantity: this.newQuantity
    })
    console.log('Click b')
}*/