export default (on) => {
    on('task', {
        connectToSSE(url){
            console.log("task plugin", url)
            return true
        },
        async playsound(){
            const { data } = await axios.get(`http://192.168.200.241:9999/alert?mp3=bemtevi.mp3&volume=0.1`)
          return data
        }
    })
}