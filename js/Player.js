class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null; 
    }
    getCount(){
        var pcRef=database.ref('playerCount');
        pcRef.on("value",(data)=>{
            playerCount=data.val();
        });
    }
updateCount(count){
database.ref('/').update({
    playerCount:count
});
}

}










