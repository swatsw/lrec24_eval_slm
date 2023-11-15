function audio_player(speakers) {
    // 
    vits_speaker = speakers['vits'][0]

    // print speaker list to console
    console.log('speaker list (click to select) >>')
    for (var i =0; i < speakers['vits'].length; i++) {
        var speaker = speakers['vits'][i]
        console.log(speaker)
    }

    // document.body.innerHTML += 'speaker list (click to select) >> </br>'
    // for (var i =0; i < speakers['vits'].length; i++) {
    //     speaker = speakers['vits'][i]
    //     document.body.innerHTML += '<input type="button" id="' + speaker + '" value="' + speaker + '"></input></br>'
    // }

    // // parse csv
    // var lines = csv.split("\n");
    // var fpaths = []
    // for (var i = 0; i < lines.length; i++) {
    //     var line = lines[i].split(",")
    //     if (line.length == 2) {
    //         fpaths.push(line[0])
    //     }
    // }

    // // playing fpath params
    // var curr_sub_folder = sub_folder_names[0]
    // var curr_playing_i = 0

    // // sub_folder selector
    // document.body.innerHTML += 'model list (click to select) >> </br>'
    // for (var i =0; i < sub_folder_names.length; i++) {
    //     sub_folder_name = sub_folder_names[i]
    //     document.body.innerHTML += '<input type="button" id="' + sub_folder_name + '" value="' + sub_folder_name + '"></input></br>'
    // }
    // document.body.innerHTML += "</br>"

    // // video i selector
    // document.body.innerHTML += 'input text list (click to select) >> </br>'
    // for (var i =0; i < videos_per_folder; i++) {
    //     document.body.innerHTML += '<input type="button" id="video-'+i+'" value="input text '+i+'"></input></br>'
    // }
    // document.body.innerHTML += "</br>"

    // // sub_folder selector logic
    // var sub_folder_buttons = []
    // for (var i =0; i < sub_folder_names.length; i++) {
    //     sub_folder_name = sub_folder_names[i]
    //     var sub_folder_button = document.getElementById(sub_folder_name);
    //     sub_folder_button.addEventListener("click", function (event) {
    //         for (var i = 0; i < sub_folder_buttons.length; i++) {
    //             sub_folder_buttons[i].style["color"] = "black"
    //             sub_folder_buttons[i].style["background-color"] = "white"
    //         }
    //         curr_sub_folder = event.target.id
    //         event.target.style["color"] = 'white'
    //         event.target.style["background-color"] = 'blue'
    //     })
    //     sub_folder_buttons.push(sub_folder_button)
    //     if (i == 0) {
    //         sub_folder_button.style["color"] = 'white'
    //         sub_folder_button.style["background-color"] = 'blue'
    //     }
    // }

    // // video i selector logic
    // var video_i_buttons = []
    // for (var i =0; i < videos_per_folder; i++) {
    //     var video_i_button = document.getElementById('video-'+i);
    //     video_i_button.addEventListener("click", function (event) {
    //         for (var i = 0; i < video_i_buttons.length; i++) {
    //             video_i_buttons[i].style["color"] = "black"
    //             video_i_buttons[i].style["background-color"] = "white"
    //         }
    //         curr_playing_i = event.target.id.slice(-1)
    //         event.target.style["color"] = 'white'
    //         event.target.style["background-color"] = 'blue'
    //     })
    //     video_i_buttons.push(video_i_button)
    //     if (i == 0) {
    //         video_i_button.style["color"] = 'white'
    //         video_i_button.style["background-color"] = 'blue'
    //     }
    // }

    // // set video element color
    // var video_element = document.getElementById(video_element_id);
    // video_element.style["background-color"] = video_background_color
    // var op = 0.0
    // video_element.style["opacity"] = op
    // var video_div = document.getElementById(video_div_id)
    // video_div.style["background-color"] = video_background_color
    // video_div.style["width"] = width+"px"
    // video_div.style["height"] = height+"px"

    // // starting volume
    // var audio_volume = starting_volume
    // video_element.volume = audio_volume

    // // volume controller
    // var volumeControl = document.getElementById(volume_controller_id)
    // volumeControl.value = audio_volume
    // volumeControl.addEventListener('input', function(){
    //     video_element.volume = this.value
    //     audio_volume = this.value
    // })

    // // fade in and fade out funcs
    // var is_playing = false
    // var is_fading = false
    // fade_in = function() {
    //   timer = setInterval(function() {
    //       if (op >= 1) {
    //         op = 1.0
    //         video_element.style["opacity"] = op
    //         video_element.play()
    //         is_playing = true
    //         is_fading = false
    //         clearInterval(timer);
    //       }
    //       video_element.style["opacity"] = op
    //       op += 0.05
    //     }, fade_speed)
    // }
    // fade_out = function() {
    //   timer = setInterval(function() {
    //       if (op <= 0) {
    //         op = 0.0
    //         video_element.style["opacity"] = op
    //         video_element.pause()
    //         is_playing = false
    //         is_fading = false
    //         clearInterval(timer);
    //       }
    //       video_element.style["opacity"] = op
    //       op -= 0.05
    //     }, fade_speed)
    // }

    // var play_button = document.getElementById(play_button_id)
    // var stop_button = document.getElementById(stop_button_id)
    // video_element.onended = function() {
    //     fade_out()
    //     play_button.style["color"] = "black"
    //     play_button.style["background-color"] = "white"
    // }
    // play_button.addEventListener("click", function (event) {
    //     // event.preventDefault();
    //     if (is_playing || is_fading){
    //         return
    //     }
    //     is_fading = true

    //     video_element.style["opacity"] = op
    //     video_element.src = folder_path + '/' + curr_sub_folder + '/' + curr_sub_folder + '-' + curr_playing_i +'.mp4'

    //     fade_in()

    //     event.target.style["color"] = 'white'
    //     event.target.style["background-color"] = 'blue'
    // })

    // stop_button.addEventListener("click", function (event) {
    //     if (is_fading || (!is_playing)) {
    //       return
    //     }
    //     is_fading = true

    //     play_button.style["color"] = "black"
    //     play_button.style["background-color"] = "white"

    //     video_element.pause()
    //     fade_out()
    // })

}
