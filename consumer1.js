const rabbitConnection = require('./sharedRabbitMqResource.js');  //Waarom wordt het maken van een connectie in een module gezet?

let channel            = null;   



const consume = async ()=>{
    try { 
        const connection = await rabbitConnection;
        
        //Een check of de channel geïnstantieerd is. 
        //Waarom wordt dit gedaan?

        if(consumeChannel === null){
            consumeChannel = await connection.createChannel();
        }
        //code voor assert queue
        //code voor bindQueue
        //code voor de consume, dus dit:
        //await consumeChannel.consume("bla", eenBericht =>{
            
            //Hier een check wat de opdracht in de message inhoud en wat er mee moet gebeuren.
            //Bedenk of je bij het uitlezen van de payload dat hier moet doen of dat het beter 
            //is om daar een aparte module/class voor aan te maken
            //dto.storeMessage(msg);
            
            channel.ack(message); // Met de 'ack' (acknowledge) geeft je aan dat de consumer het bericht succesvol heeft ontvangen
                                  // Nu weet Rabbit dat ie het bericht op de queue niet meer hoeft te sturen.
        //}); 

    } catch (error) {
        console.log (`error is: ${error}`);
    }
}

module.exports.consume = consume;