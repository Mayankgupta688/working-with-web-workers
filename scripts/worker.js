// Recieving Message from Main Scripts..

onmessage = (event) => {
    console.log(`Worker Thread Up and Running: ${event.data} !!!`)

    // Sending Message to theMain Script

    postMessage("Data Recieved");
}