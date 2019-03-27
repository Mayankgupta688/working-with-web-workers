if(window.Worker) {

    // Calling new Worker will invoke the JavaScript in seperate Thread..

    var newWorker = new Worker("./scripts/worker.js");

    var count = 0;

    setInterval(() => {
        count += 1;

        // Posting Messages to the Web Worker..

        newWorker.postMessage(count)
    }, 1000)

    // Recieving Messages from the Worker..
    
    newWorker.onmessage = (event) => {
        console.log("Data Recieved Acknoledgement");
    }
}