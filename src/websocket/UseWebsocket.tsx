import SockJs from "sockjs-client";
import Stomps from "stompjs";
const connectwebSocket = (userId: number) => {
    console.log("Started to connect");
    const socket = new SockJs("http://localhost:8080/ws");
    const stompClient = Stomps.over(socket);
       stompClient.connect({}, (frame) => {
             console.log("Connected "+frame);  
             stompClient.subscribe(`/user/${userId}/queue/notifications`, (msg) => {
                console.log(msg);
             },(er)=>{
                console.log("This is error: ",er);
             });    
          }
        );      
    stompClient.connect({}, (frame) => {
        console.log('Connected: ' + frame);
    }, (error) => {
        console.error('WebSocket connection error:', error);
    });
    return stompClient     
};
export { connectwebSocket }; 
